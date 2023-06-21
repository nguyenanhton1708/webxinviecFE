import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import * as actions from "../../../store/actions";
import { dispatch } from "../../../redux";
import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
import "./EmployerManage.scss";
import "react-markdown-editor-lite/lib/index.css";
import { getDetailInforCompany } from "../../../services/userService";
import Select from "react-select";
import { CRUD_ACTIONS, LANGUAGES } from "../../../utils";
const mdParser = new MarkdownIt(/* Markdown-it options */);

class EmployerManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contentMarkdown: "",
      contentHTML: "",
      selectedCompany: "",
      description: "",
      listCompanys: [],
      hasOldData: false,
    };
  }

  componentDidMount() {
    this.props.fetchAllCompanys();
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
      contentMarkdown: text,
      contentHTML: html,
    });
  };

  handleSaveContentMarkdown = () => {
    let { hasOldData } = this.state;
    this.props.saveDetailCompany({
      contentHTML: this.state.contentHTML,
      contentMarkdown: this.state.contentMarkdown,
      description: this.state.description,
      companyId: this.state.selectedCompany.value,
      action: hasOldData === true ? CRUD_ACTIONS.EDIT : CRUD_ACTIONS.CREATE,
    });
    // console.log("check old data", hasOldData);
  };

  handleChangeSelect = async (selectedCompany) => {
    this.setState({ selectedCompany });
    let res = await getDetailInforCompany(selectedCompany.value);
    if (res && res.errCode === 0 && res.data && res.data.Markdown) {
      let markdown = res.data.Markdown;
      this.setState({
        contentHTML: markdown.contentHTML,
        contentMarkdown: markdown.contentMarkdown,
        description: markdown.description,
        hasOldData: true,
      });
    } else {
      this.setState({
        contentHTML: "",
        contentMarkdown: "",
        description: "",
        hasOldData: false,
      });
    }
    // console.log("check on change", selectedCompany);
  };
  handleOnchangeDesc = (event) => {
    this.setState({
      description: event.target.value,
    });
  };
  render() {
    let { hasOldData } = this.state;
    console.log("check all data", this.state);

    return (
      <div className="employer-manage-container">
        <div className="employer-manage-title">
          <h1>Quản lý thông tin nhà tuyển dụng</h1>
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
            <div className="employer-desc">
              <label>Giới thiệu công ty:</label>
              <textarea
                className="employer-desc-text"
                onChange={(event) => this.handleOnchangeDesc(event)}
                value={this.state.description}
              ></textarea>
            </div>
          </div>
          <div>
            <label>Vì sao nên gia nhập công ty</label>
            <MdEditor
              style={{ height: "500px" }}
              renderHTML={(text) => mdParser.render(text)}
              onChange={this.handleEditorChange}
              value={this.state.contentMarkdown}
            />
          </div>
        </div>
        <button
          onClick={() => this.handleSaveContentMarkdown()}
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
    saveDetailCompany: (data) => dispatch(actions.saveDetailCompany(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EmployerManage);
