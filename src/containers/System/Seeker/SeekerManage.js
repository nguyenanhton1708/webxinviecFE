import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import "./SeekerManage.scss";
import { getAllCodeService } from "../../../services/userService";
class SeekerManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genderArr: [],
    };
  }

  async componentDidMount() {
    try {
      let res = await getAllCodeService("gender");
      if (res && res.errCode === 0) {
        this.setState({
          genderArr: res.data,
        });
      }
      console.log("check res: ", res);
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    let genders = this.state.genderArr;
    return (
      <div className="seeker-manage-create-container">
        <h1>Quản lý ứng viên</h1>
        <div className="seeker-manage-create-content">
          <div className="seeker-manage-create">
            <h2>Thêm mới ứng viên</h2>
          </div>
          <div className="seeker-manage-create-form">
            <div className="seeker-email">
              <span>Email</span>
              <input type="text"></input>
            </div>
            <div className="seeker-password">
              <span>Mật khẩu</span>
              <input type="text"></input>
            </div>
            <div className="seeker-firstname">
              <span>Họ</span>
              <input type="text"></input>
            </div>
            <div className="seeker-lastname">
              <span>Tên</span>
              <input type="text"></input>
            </div>
            <div className="seeker-gender">
              <span>Giới tính</span>
              <select>
                {genders &&
                  genders.length > 0 &&
                  genders.map((item, index) => {
                    return <option key={index}>{item.valueVi}</option>;
                  })}
              </select>
            </div>
            <div className="seeker-phonenumber">
              <span>Số điện thoại</span>
              <input type="text"></input>
            </div>
            <div className="seeker-address">
              <span>Địa chỉ</span>
              <input type="text"></input>
            </div>
            <div className="seeker-image">
              <span>Ảnh đại diện</span>
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

export default connect(mapStateToProps, mapDispatchToProps)(SeekerManage);
