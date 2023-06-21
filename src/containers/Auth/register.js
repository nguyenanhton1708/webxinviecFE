import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import { withRouter } from "react-router";
import "./register.scss";

class register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      isShowPassword: false,
    };
  }
  handleOnChangePassword = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  handleShowHidePassword = () => {
    this.setState({ isShowPassword: !this.state.isShowPassword });
  };

  handleSaveUsers = () => {
    let isValid = this.checkValidateInput();
    if (isValid === false) return;
    this.setState({
      ...this.state,
      isUserCreated: false,
    });
    this.props.createNewUsers({
      email: this.state.email,
      password: this.state.password,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
    });
    if (isValid) {
      if (this.props.history) {
        // Redirect to "/home" on success
        this.props.history.push(`/home`);
      }
    }
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

  checkValidateInput = () => {
    let isValid = true;
    let arrCheck = ["email", "password", "firstName", "lastName"];
    for (let i = 0; i < arrCheck.length; i++) {
      if (!this.state[arrCheck[i]]) {
        isValid = false;
        alert("Chưa nhập: " + arrCheck[i]);
        break;
      }
    }
    return isValid;
  };

  render() {
    let { email, password, firstName, lastName } = this.state;
    return (
      <div className="register-background">
        <div className="register-container">
          <div className="register-content">Đăng kí</div>
          <div className="register-name">
            <div className="register-firstName">
              <label>Họ:</label>
              <input
                placeholder="Nhập họ"
                type="text"
                value={firstName}
                onChange={(event) => {
                  this.onChangeInput(event, "firstName");
                }}
              ></input>
            </div>
            <div className="register-lastName">
              <label>Tên:</label>
              <input
                type="text"
                placeholder="Nhập tên"
                value={lastName}
                onChange={(event) => {
                  this.onChangeInput(event, "lastName");
                }}
              ></input>
            </div>
          </div>

          <div className="register-email">
            <label>Email:</label>
            <input
              type="text"
              placeholder="Nhập email"
              value={email}
              onChange={(event) => {
                this.onChangeInput(event, "email");
              }}
            ></input>
          </div>
          <div className="register-password">
            <label>Mật khẩu: </label>
            <div className="custom-input-password">
              <input
                type={this.state.isShowPassword ? "text" : "password"}
                placeholder="Nhập mật khẩu"
                className="input-password"
                value={password}
                onChange={(event) => {
                  this.onChangeInput(event, "password");
                }}
              ></input>
              <span
                onClick={() => {
                  this.handleShowHidePassword();
                }}
              >
                <i
                  className={
                    this.state.isShowPassword
                      ? "far fa-eye"
                      : "fas fa-eye-slash"
                  }
                ></i>
              </span>
            </div>
          </div>
          <div className="show-error" style={{ color: "red" }}>
            {this.state.errMessage}
          </div>
          <div className="register-button">
            <button
              className="btn-register"
              onClick={() => this.handleSaveUsers()}
            >
              Đăng kí
            </button>
          </div>
          <div className="text-center">
            <span> Hoặc đăng nhập với</span>
          </div>
          <div className="register-social">
            <i className="fab fa-facebook-f facebook"></i>
            <i className="fab fa-google google"></i>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.admin.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createNewUsers: (data) => dispatch(actions.createNewUsers(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(register);
