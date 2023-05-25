import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import "./EmployerManage.scss";
class EmployerManage extends Component {
  state = {};

  componentDidMount() {}

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

            <div className="employer-logo">
              <span>Logo</span>
              <input></input>
            </div>
          </div>
        </div>
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
