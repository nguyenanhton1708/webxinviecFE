import React, { Component } from "react";
import { connect } from "react-redux";
import { LANGUAGES } from "../../../utils";
import "./BlogManage.scss";
import HomeHeader from "../../HomePage/HomeHeader";
import HomeFooter from "../../HomePage/HomeFooter";
import MdEditor from "react-markdown-editor-lite";
import MarkdownIt from "markdown-it";
import "react-markdown-editor-lite/lib/index.css";

const mdParser = new MarkdownIt(/* Markdown-it options */);

class BlogManage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {}
  componentDidUpdate(prevProps, prevState, snapshot) {}

  render() {
    return (
      <div className="blog-manage-container">
        <div className="blog-manage-title">
          <h1>Quản lý Blog</h1>
        </div>
        <div className="blog-manage-editor">
          <div className="blog-manage-top">
            <div className="blog-title">
              <label>Tiêu đề</label>
              <textarea
                className="blog-title-text"
                onChange={(event) => this.handleOnchangeDesc(event)}
                value={this.state.description}
              ></textarea>
            </div>
          </div>
          <div className="blog-content">
            <label>Nội Dung</label>
            <MdEditor
              style={{ height: "500px" }}
              renderHTML={(text) => mdParser.render(text)}
              onChange={this.handleEditorChange}
              value={this.state.contentMarkdown}
            />
          </div>
        </div>
        {/* <button
          onClick={() => this.handleSaveContentMarkdown()}
          className={
            hasOldData === true ? "blog-manage-save" : "blog-manage-edit"
          }
        >
          {hasOldData === true ? (
            <span>Sửa thông tin</span>
          ) : (
            <span>Tạo thông tin</span>
          )}
        </button> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(BlogManage);
