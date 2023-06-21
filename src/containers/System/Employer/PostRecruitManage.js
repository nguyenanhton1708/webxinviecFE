import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import * as actions from "../../../store/actions";
import { dispatch } from "../../../redux";
import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
import "./PostRecruitManage.scss";
import "react-markdown-editor-lite/lib/index.css";
import {
  getDetailInforCompany,
  getAllPost,
} from "../../../services/userService";
import Select from "react-select";
import { CRUD_ACTIONS, LANGUAGES } from "../../../utils";
const mdParser = new MarkdownIt(/* Markdown-it options */);

class PostRecruitManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contentPostFINAL: "",
      contentPostHTML: "",
      title: "",
      selectedCompany: "",
      listCompanys: [],
      arrPostRecruit: [],
      hasOldData: false,
    };
  }

  async componentDidMount() {
    this.props.fetchAllCompanys();
    // let id = this.state.id;
    // let res = await getAllPost(id);
    // console.log("check res getallpost: ", res);
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.allCompanys !== this.props.allCompanys) {
      let dataSelect = this.buildDataInputSelect(this.props.allCompanys);
      this.setState({
        listCompanys: dataSelect,
      });
    }
  }

  buildDataInputSelect = (inputData) => {
    let result = [];
    if (inputData && inputData.length > 0) {
      inputData.map((item, index) => {
        let object = {};
        object.label = `${item.companyName} `;
        object.value = item.id;
        result.push(object);
      });
    }
    return result;
  };

  handleEditorChange = ({ html, text }) => {
    this.setState({
      contentPostFINAL: text,
      contentPostHTML: html,
    });
  };

  handleSavecontentPostFINAL = () => {
    let { hasOldData } = this.state;
    this.props.saveInforPost({
      contentPostHTML: this.state.contentPostHTML,
      contentPostFINAL: this.state.contentPostFINAL,
      title: this.state.title,
      companyId: this.state.selectedCompany.value,
      action: hasOldData === true ? CRUD_ACTIONS.EDIT : CRUD_ACTIONS.CREATE,
    });
    // console.log("check old data", hasOldData);
  };

  handleChangeSelect = async (selectedCompany) => {
    this.setState({ selectedCompany });
    let res = await getAllPost(selectedCompany.value);
    if (res && res.errCode === 0) {
      this.setState({
        arrPostRecruit: res.data,
      });
    }
    // let res = await getDetailInforCompany(selectedCompany.value);
    // if (res && res.errCode === 0 && res.data && res.data.Recruit) {
    //   let Recruit = res.data.Recruit;
    //   this.setState({
    //     title: Recruit.title,
    //     contentPostHTML: Recruit.contentPostHTML,
    //     contentPostFINAL: Recruit.contentPostFINAL,
    //     hasOldData: true,
    //   });
    // } else {
    //   this.setState({
    //     contentPostHTML: "",
    //     contentPostFINAL: "",
    //     title: "",
    //     hasOldData: false,
    //   });
    // }
  };

  handleOnchangeTitle = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  render() {
    let { hasOldData } = this.state;
    console.log("check all data new", this.state);
    let arrPostRecruit = this.state.arrPostRecruit;

    return (
      <div className="employer-manage-container">
        <div className="employer-manage-post-container">
          <div className="employer-manage-title">
            <h1>Quản lý bài tuyển dụng</h1>
          </div>
          <div className="employer-manage-editor">
            <div className="employer-manage-top">
              <div className="employer-select">
                <label>Chọn công ty</label>
                <Select
                  value={this.state.selectedCompany}
                  onChange={this.handleChangeSelect}
                  options={this.state.listCompanys}
                  className="employer-select-action"
                />
              </div>
            </div>
            <div className="employer-show-post">
              <div>
                <h2>Các bài đăng tuyển dụng</h2>
                <div className="employer-post-item">
                  {arrPostRecruit &&
                    arrPostRecruit.length > 0 &&
                    arrPostRecruit.map((item, index) => {
                      {
                        item.Recruit &&
                          item.Recruit.length > 0 &&
                          item.Recruit.map((recruitItem, recruitIndex) => {
                            <div
                              className="employer-image"
                              style={{
                                backgroundImage: `url(${arrPostRecruit.image})`,
                              }}
                            ></div>;
                            <div
                              className="employer-post-title"
                              key={recruitIndex}
                            >
                              <span>{recruitItem.title}</span>
                            </div>;
                          });
                      }
                    })}
                  <div
                    className="employer-image"
                    style={{ backgroundImage: `url(${arrPostRecruit.image})` }}
                  ></div>

                  {/* arrCompanys &&
                arrCompanys.length > 0 &&
                arrCompanys.map((item, index) => {
                  let imageBase64 = "";
                  if (item.image) {
                    imageBase64 = new Buffer(item.image, "base64").toString(
                      "binary"
                    );
                        <div
                          className="CompanyOutStanding-image"
                          style={{
                            backgroundImage: `url(${imageBase64})`,
                          }}
                        ></div>

                        <div className="CompanyOutStanding-name">
                          {item.companyName}
                        </div>
                      </div>
                    );
                  }
                })} */}
                </div>
              </div>
            </div>
            <div>
              <h2>Thêm bài tuyển dụng</h2>
              <div className="employer-title-post">
                <label>Vị trí tuyển dụng</label>
                <textarea
                  className="employer-title-text"
                  onChange={(event) => this.handleOnchangeTitle(event)}
                  value={this.state.title}
                ></textarea>
              </div>
              <div className="employer-content-post">
                <label>Nội dung tuyển dụng</label>
                <MdEditor
                  style={{ height: "500px" }}
                  renderHTML={(text) => mdParser.render(text)}
                  onChange={this.handleEditorChange}
                  value={this.state.contentPostFINAL}
                />
              </div>
            </div>
          </div>
          <button
            onClick={() => this.handleSavecontentPostFINAL()}
            className={
              hasOldData === true
                ? "employer-manage-save"
                : "employer-manage-edit"
            }
          >
            {hasOldData === true ? (
              <span>Sửa thông tin</span>
            ) : (
              <span>Tạo thông tin</span>
            )}
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    allCompanys: state.admin.allCompanys,
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllCompanys: (id) => dispatch(actions.fetchAllCompanys()),
    saveInforPost: (data) => dispatch(actions.saveInforPost(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostRecruitManage);
