import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import "./SeekerManage.scss";
import { getAllCodeService } from "../../../services/userService";
import * as actions from "../../../store/actions";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
class SeekerManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genderArr: [],
      previewImgURL: "",
      isOpen: false,

      email: "",
      password: "",
      firstName: "",
      lastName: "",
      gender: "",
      phoneNumber: "",
      address: "",
      image: "",
    };
  }

  async componentDidMount() {
    this.props.getGenderStart();
    // try {
    //   let res = await getAllCodeService("gender");
    //   if (res && res.errCode === 0) {
    //     this.setState({
    //       genderArr: res.data,
    //     });
    //   }
    //   console.log("check res: ", res);
    // } catch (e) {
    //   console.log(e);
    // }
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.genderRedux !== this.props.genderRedux) {
      this.setState({
        genderArr: this.props.genderRedux,
      });
    }
  }

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

  handleSaveSeeker = () => {};

  onChangeInput = (event, id) => {
    let copyState = { ...this.state };
    copyState[id] = event.target.value;
    this.setState(
      {
        ...copyState,
      },
      () => {
        console.log("check input onchange: ", this.state);
      }
    );
    // email: "",
    // password: "",
    // firstName: "",
    // lastName: "",
    // gender: "",
    // phoneNumber: "",
    // address: "",
    // image: "",
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
          <div className="seeker-manage-create">
            <h2>Thêm mới ứng viên</h2>
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
            className="seeker-save"
            onClick={() => this.handleSaveSeeker()}
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
  return {
    genderRedux: state.admin.genders,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getGenderStart: () => dispatch(actions.fetchGenderStart()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SeekerManage);
