import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import "./UserManage.scss";
import { getAllCodeService } from "../../services/userService";
import * as actions from "../../store/actions";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import TableManageUser from "./TableManageUser";
import { CRUD_ACTIONS, CommonUtils, LANGUAGES } from "../../utils";

class UserManage extends Component {
  handleChangeLanguage = (language) => {
    this.props.changeLanguageApp(language);
  };
  constructor(props) {
    super(props);
    this.state = {
      genderArr: [],
      positionArr: [],
      roleArr: [],
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
      companyName: "",
      image: "",

      action: "",
      userEditId: "",
    };
  }

  async componentDidMount() {
    this.props.getGenderStart();
    this.props.getPositionStart();
    this.props.getRoleStart();
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.genderRedux !== this.props.genderRedux) {
      let arrGenders = this.props.genderRedux;
      this.setState({
        genderArr: arrGenders,
        gender: arrGenders && arrGenders.length > 0 ? arrGenders[0].keyMap : "",
      });
    }

    if (prevProps.positionRedux !== this.props.positionRedux) {
      let arrPositions = this.props.positionRedux;
      this.setState({
        positionArr: arrPositions,
        position:
          arrPositions && arrPositions.length > 0 ? arrPositions[0].keyMap : "",
      });
    }
    if (prevProps.roleRedux !== this.props.roleRedux) {
      let arrRoles = this.props.roleRedux;
      this.setState({
        roleArr: arrRoles,
        role: arrRoles && arrRoles.length > 0 ? arrRoles[0].keyMap : "",
      });
    }

    if (prevProps.users !== this.props.users) {
      let arrGenders = this.props.genderRedux;
      let arrRoles = this.props.roleRedux;
      let arrPositions = this.props.positionRedux;

      this.setState({
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        gender: arrGenders && arrGenders.length > 0 ? arrGenders[0].keyMap : "",
        position:
          arrPositions && arrPositions.length > 0 ? arrPositions[0].keyMap : "",
        role: arrRoles && arrRoles.length > 0 ? arrRoles[0].keyMap : "",
        phoneNumber: "",
        address: "",
        companyName: "",
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
        companyName: this.state.companyName,
        gender: this.state.gender,
        roleId: this.state.role,
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
        companyName: this.state.companyName,
        gender: this.state.gender,
        roleId: this.state.role,
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
      role: user.roleId,
      position: user.positionId,
      phoneNumber: user.phoneNumber,
      companyName: user.companyName,
      address: user.address,
      image: "",
      previewImgURL: imageBase64,
      action: CRUD_ACTIONS.EDIT,
      userEditId: user.id,
    });
  };

  render() {
    let language = this.props.language;
    let genders = this.state.genderArr;
    let positions = this.state.positionArr;
    let roles = this.state.roleArr;
    let {
      email,
      password,
      firstName,
      lastName,
      gender,
      position,
      role,
      phoneNumber,
      companyName,
      address,
      image,
    } = this.state;
    return (
      <div className="Users-manage-create-container">
        <h1>
          <FormattedMessage id="manage-user.header" />
        </h1>
        <div className="Users-manage-create-content">
          <div className="Users-manage-create">
            <h2>
              {" "}
              {this.state.action === CRUD_ACTIONS.EDIT ? (
                <FormattedMessage id="manage-user.create" />
              ) : (
                <FormattedMessage id="manage-user.edit" />
              )}
            </h2>
          </div>
          <div className="Users-manage-create-form">
            <div className="Users-email">
              <span>
                {" "}
                <FormattedMessage id="manage-user.email" />
              </span>
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
            <div className="Users-password">
              <span>
                {" "}
                <FormattedMessage id="manage-user.password" />
              </span>
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
            <div className="Users-firstname">
              <span>
                {" "}
                <FormattedMessage id="manage-user.firstname" />
              </span>
              <input
                type="text"
                value={firstName}
                onChange={(event) => {
                  this.onChangeInput(event, "firstName");
                }}
              ></input>
            </div>
            <div className="Users-lastname">
              <span>
                {" "}
                <FormattedMessage id="manage-user.lastname" />
              </span>
              <input
                type="text"
                value={lastName}
                onChange={(event) => {
                  this.onChangeInput(event, "lastName");
                }}
              ></input>
            </div>

            <div className="Users-phonenumber">
              <span>
                {" "}
                <FormattedMessage id="manage-user.phone" />
              </span>
              <input
                type="text"
                value={phoneNumber}
                onChange={(event) => {
                  this.onChangeInput(event, "phoneNumber");
                }}
              ></input>
            </div>
            <div className="Users-address">
              <span>
                {" "}
                <FormattedMessage id="manage-user.address" />
              </span>
              <input
                type="text"
                value={address}
                onChange={(event) => {
                  this.onChangeInput(event, "address");
                }}
              ></input>
            </div>

            <div className="Users-companyName">
              <span>
                {" "}
                <FormattedMessage id="manage-user.companyname" />
              </span>
              <input
                type="text"
                value={companyName}
                onChange={(event) => {
                  this.onChangeInput(event, "companyName");
                }}
              ></input>
            </div>

            <div className="Users-gender">
              <span>
                {" "}
                <FormattedMessage id="manage-user.gender" />
              </span>
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
                        {language === LANGUAGES.VI
                          ? item.valueVi
                          : item.valueEn}
                      </option>
                    );
                  })}
              </select>
            </div>
            <div className="Users-position">
              <span>
                <FormattedMessage id="manage-user.position" />
              </span>
              <select
                onChange={(event) => {
                  this.onChangeInput(event, "position");
                }}
                value={position}
              >
                {positions &&
                  positions.length > 0 &&
                  positions.map((item, index) => {
                    return (
                      <option key={index} value={item.keyMap}>
                        {language === LANGUAGES.VI
                          ? item.valueVi
                          : item.valueEn}
                      </option>
                    );
                  })}
              </select>
            </div>
            <div className="Users-role">
              <span>
                <FormattedMessage id="manage-user.role" />
              </span>
              <select
                onChange={(event) => {
                  this.onChangeInput(event, "role");
                }}
                value={role}
              >
                {roles &&
                  roles.length > 0 &&
                  roles.map((item, index) => {
                    return (
                      <option key={index} value={item.keyMap}>
                        {language === LANGUAGES.VI
                          ? item.valueVi
                          : item.valueEn}
                      </option>
                    );
                  })}
              </select>
            </div>

            <div className="Users-image-container">
              <div className="Users-image">
                <span>
                  {" "}
                  <FormattedMessage id="manage-user.image" />
                </span>
                <input
                  id="previewImg"
                  type="file"
                  hidden
                  onChange={(event) => this.handleOnChangeImage(event)}
                />
                <label className="label-upload" htmlFor="previewImg">
                  <FormattedMessage id="manage-user.upload" />
                  <i className="fas fa-upload"></i>
                </label>
              </div>
              <div
                className="preview-image"
                style={{ backgroundImage: `url(${this.state.previewImgURL})` }}
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
            {this.state.action === CRUD_ACTIONS.EDIT ? (
              <FormattedMessage id="manage-user.edit-btn" />
            ) : (
              <FormattedMessage id="manage-user.save-btn" />
            )}
          </button>
        </div>
        <TableManageUser
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
    positionRedux: state.admin.positions,
    roleRedux: state.admin.roles,
    users: state.admin.users,
    language: state.app.language,
    isLoadingGender: state.admin.isLoadingGender,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getGenderStart: () => dispatch(actions.fetchGenderStart()),
    getPositionStart: () => dispatch(actions.fetchPositionStart()),
    getRoleStart: () => dispatch(actions.fetchRoleStart()),

    createNewUsers: (data) => dispatch(actions.createNewUsers(data)),
    fetchUserRedux: () => dispatch(actions.fetchAllUsersStart()),
    editUsersRedux: (data) => dispatch(actions.editUsers(data)),
    changeLanguageApp: (language) =>
      dispatch(actions.changeLanguageApp(language)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
