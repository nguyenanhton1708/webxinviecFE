import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import "./EmployerManage.scss";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
class EmployerManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // genderArr: [],
      // previewImgURL: "",
      // isOpen: false,
      // email: "",
      // password: "",
      // firstName: "",
      // lastName: "",
      // gender: "",
      // phoneNumber: "",
      // address: "",
      // image: "",
    };
  }

  componentDidMount() {}

  handleOnChangeImage = (event) => {
    let data = event.target.files;
    let file = data[0];
    if (file) {
      let objectUrl = URL.createObjectURL(file);
      this.setState({
        previewImgURL: objectUrl,
        image: file,
      });
    }
  };

  openPreviewImage = () => {
    if (!this.state.previewImgURL) return;
    this.setState({
      isOpen: true,
    });
  };
  render() {
    return (
      <div className="employer-manage-create-container">
        <h1>Quản lý nhà tuyển dụng</h1>
        <div className="employer-manage-create-content">
          <div className="employer-manage-create">
            <h2>Thêm mới nhà tuyển dụng</h2>
          </div>
          <div className="employer-manage-create-form">
            <div className="employer-email">
              <span>Email</span>
              <input type="text"></input>
            </div>
            <div className="employer-password">
              <span>Mật khẩu</span>
              <input type="text"></input>
            </div>
            <div className="employer-firstname">
              <span>Họ</span>
              <input type="text"></input>
            </div>
            <div className="employer-lastname">
              <span>Tên</span>
              <input type="text"></input>
            </div>
            <div className="employer-companyname">
              <span>Tên công ty</span>
              <input type="text"></input>
            </div>
            <div className="employer-address">
              <span>Địa chỉ</span>
              <input type="text"></input>
            </div>
            <div className="employer-phonenumber">
              <span>Số điện thoại</span>
              <input type="text"></input>
            </div>
            <div className="employer-position">
              <span>Chức vụ</span>
              <input type="text"></input>
            </div>
            <div className="employer-logo-container">
              <div className="employer-logo">
                <span>Ảnh đại diện</span>
                <input
                  id="previewImg"
                  type="file"
                  hidden
                  onChange={(event) => this.handleOnChangeImage(event)}
                />
                <label className="label-upload" htmlFor="previewImg">
                  Tải ảnh
                  <i className="fas fa-upload"></i>
                </label>
              </div>
              <div
                className="preview-logo"
                style={{ background: `url(${this.state.previewImgURL})` }}
                onClick={() => this.openPreviewImage()}
              ></div>
            </div>
          </div>
          <button
            className="employer-save"
            // onClick={() => this.handleSaveSeeker()}
          >
            Lưu
          </button>
        </div>
        {this.state.isOpen === true && (
          <Lightbox
            mainSrc={this.state.previewImgURL}
            onCloseRequest={() => this.setState({ isOpen: false })}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(EmployerManage);
