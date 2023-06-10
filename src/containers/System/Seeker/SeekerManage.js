import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import "./SeekerManage.scss";
import { getAllCodeService } from "../../../services/userService";
import * as actions from "../../../store/actions";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import TableManageSeeker from "./TableManageSeeker";
import { CRUD_ACTIONS, CommonUtils } from "../../../utils";

class SeekerManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genderArr: [],
      previewImgURL: "",
      isOpen: false,
      isUserCreated: false,

      email: "",
      password: "",
      firstName: "",
      lastName: "",
      gender: "",
      phoneNumber: "",
      address: "",
      image: "",

      action: "",
      userEditId: "",
    };
  }

  async componentDidMount() {
    this.props.getGenderStart();
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.genderRedux !== this.props.genderRedux) {
      let arrGenders = this.props.genderRedux;
      this.setState({
        genderArr: arrGenders,
        gender: arrGenders && arrGenders.length > 0 ? arrGenders[0].keyMap : "",
      });
    }

    if (prevProps.users !== this.props.users) {
      let arrGenders = this.props.genderRedux;
      this.setState({
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        gender: arrGenders && arrGenders.length > 0 ? arrGenders[0].keyMap : "",
        phoneNumber: "",
        address: "",
        image: "",
        action: CRUD_ACTIONS.CREATE,
        previewImgURL: "",
      });
    }
  }

  handleOnChangeImage = async (event) => {
    let data = event.target.files;
    let file = data[0];
    if (file) {
      let base64 = await CommonUtils.getBase64(file);
      let objectUrl = URL.createObjectURL(file);
      this.setState({
        previewImgURL: objectUrl,
        image: base64,
      });
    }
  };

  openPreviewImage = () => {
    if (!this.state.previewImgURL) return;
    this.setState({
      isOpen: true,
    });
  };

  handleSaveUsers = () => {
    let isValid = this.checkValidateInput();
    if (isValid === false) return;
    let action = this.state.action;
    this.setState({
      ...this.state,
      isUserCreated: false,
    });
    if (action === CRUD_ACTIONS.CREATE) {
      //fire redux create user
      this.props.createNewUsers({
        email: this.state.email,
        password: this.state.password,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        address: this.state.address,
        phoneNumber: this.state.phoneNumber,
        gender: this.state.gender,
        roleId: this.state.roleId,
        positionId: this.state.position,
        image: this.state.image,
      });
    }
    if (action === CRUD_ACTIONS.EDIT) {
      //fire redux edit user
      this.props.editUsersRedux({
        id: this.state.userEditId,
        email: this.state.email,
        password: this.state.password,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        address: this.state.address,
        phoneNumber: this.state.phoneNumber,
        gender: this.state.gender,
        roleId: this.state.roleId,
        positionId: this.state.position,
        image: this.state.image,
      });
    }
  };

  checkValidateInput = () => {
    let isValid = true;
    let arrCheck = [
      "email",
      "password",
      "firstName",
      "lastName",
      "phoneNumber",
      "address",
    ];
    for (let i = 0; i < arrCheck.length; i++) {
      if (!this.state[arrCheck[i]]) {
        isValid = false;
        alert("Chưa nhập: " + arrCheck[i]);
        break;
      }
    }
    return isValid;
  };

  onChangeInput = (event, id) => {
    let copyState = { ...this.state };
    copyState[id] = event.target.value;
    this.setState(
      {
        ...copyState,
      },
      () => {}
    );
  };

  handleEditUserFromParent = (user) => {
    let imageBase64 = "";
    if (user.image) {
      imageBase64 = new Buffer(user.image, "base64").toString("binary");
    }
    this.setState({
      email: user.email,
      password: "******",
      firstName: user.firstName,
      lastName: user.lastName,
      gender: user.gender,
      phoneNumber: user.phoneNumber,
      address: user.address,
      image: "",
      previewImgURL: imageBase64,
      action: CRUD_ACTIONS.EDIT,
      userEditId: user.id,
    });
  };

  render() {
    let genders = this.state.genderArr;
    let {
      email,
      password,
      firstName,
      lastName,
      gender,
      phoneNumber,
      address,
      image,
    } = this.state;
    return (
      <div className="seeker-manage-create-container">
        <h1>Quản lý ứng viên</h1>
        <div className="seeker-manage-create-content">
          <div className="seekerManage-manage-create">
            <h2>
              {" "}
              {this.state.action === CRUD_ACTIONS.EDIT
                ? "Thay đổi thông tin ứng viên"
                : "Thêm mới ứng viên"}
            </h2>
          </div>
          <div className="seeker-manage-create-form">
            <div className="seeker-email">
              <span>Email</span>
              <input
                type="text"
                value={email}
                onChange={(event) => {
                  this.onChangeInput(event, "email");
                }}
                disabled={
                  this.state.action === CRUD_ACTIONS.EDIT ? true : false
                }
              ></input>
            </div>
            <div className="seeker-password">
              <span>Mật khẩu</span>
              <input
                type="text"
                value={password}
                onChange={(event) => {
                  this.onChangeInput(event, "password");
                }}
                disabled={
                  this.state.action === CRUD_ACTIONS.EDIT ? true : false
                }
              ></input>
            </div>
            <div className="seeker-firstname">
              <span>Họ</span>
              <input
                type="text"
                value={firstName}
                onChange={(event) => {
                  this.onChangeInput(event, "firstName");
                }}
              ></input>
            </div>
            <div className="seeker-lastname">
              <span>Tên</span>
              <input
                type="text"
                value={lastName}
                onChange={(event) => {
                  this.onChangeInput(event, "lastName");
                }}
              ></input>
            </div>
            <div className="seeker-gender">
              <span>Giới tính</span>
              <select
                onChange={(event) => {
                  this.onChangeInput(event, "gender");
                }}
                value={gender}
              >
                {genders &&
                  genders.length > 0 &&
                  genders.map((item, index) => {
                    return (
                      <option key={index} value={item.keyMap}>
                        {item.valueVi}
                      </option>
                    );
                  })}
              </select>
            </div>
            <div className="seeker-phonenumber">
              <span>Số điện thoại</span>
              <input
                type="text"
                value={phoneNumber}
                onChange={(event) => {
                  this.onChangeInput(event, "phoneNumber");
                }}
              ></input>
            </div>
            <div className="seeker-address">
              <span>Địa chỉ</span>
              <input
                type="text"
                value={address}
                onChange={(event) => {
                  this.onChangeInput(event, "address");
                }}
              ></input>
            </div>
            <div className="seeker-image-container">
              <div className="seeker-image">
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
                className="preview-image"
                style={{ background: `url(${this.state.previewImgURL})` }}
                onClick={() => this.openPreviewImage()}
              ></div>
            </div>
          </div>
          <button
            className={
              this.state.action === CRUD_ACTIONS.EDIT
                ? "Users-edit"
                : "Users-save"
            }
            onClick={() => this.handleSaveUsers()}
          >
            {this.state.action === CRUD_ACTIONS.EDIT ? "Lưu thay đổi" : "Lưu"}
          </button>
        </div>
        <TableManageSeeker
          handleEditUserFromParent={this.handleEditUserFromParent}
          action={this.state.action}
        />
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
  return {
    genderRedux: state.admin.genders,
    users: state.admin.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getGenderStart: () => dispatch(actions.fetchGenderStart()),
    createNewUsers: (data) => dispatch(actions.createNewUsers(data)),
    fetchUserRedux: () => dispatch(actions.fetchAllUsersStart()),
    editUsersRedux: (data) => dispatch(actions.editUsers(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SeekerManage);
