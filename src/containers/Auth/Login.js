import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import "./Login.scss";
import { handleLoginApi } from "../../services/userService";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      isShowPassword: false,
      errMessage: "",
    };
  }
  handleOnChangeUsername = (event) => {
    this.setState({
      username: event.target.value,
    });
  };
  handleOnChangePassword = (event) => {
    this.setState({
      password: event.target.value,
    });
  };
  handleLogin = async () => {
    this.setState({
      errMessage: "",
    });

    try {
      let data = await handleLoginApi(this.state.username, this.state.password);
      if (data && data.errCode !== 0) {
        this.setState({
          errMessage: data.message,
        });
      }
      if (data && data.errCode === 0) {
        this.props.userLoginSuccess(data.user);
      }
    } catch (error) {
      if (error.response) {
        if (error.response.data) {
          this.setState({
            errMessage: error.response.data.message,
          });
        }
      }
    }
  };
  handleShowHidePassword = () => {
    this.setState({ isShowPassword: !this.state.isShowPassword });
  };
  render() {
    return (
      <div className="login-background">
        <div className="login-container">
          <div className="login-content">Login</div>
          <div className="login-user">
            <label>Username:</label>
            <input
              type="text"
              placeholder="Enter your username"
              value={this.state.username}
              onChange={(event) => this.handleOnChangeUsername(event)}
            ></input>
          </div>
          <div className="login-password">
            <label>Password: </label>
            <div className="custom-input-password">
              <input
                type={this.state.isShowPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="input-password"
                value={this.state.password}
                onChange={(event) => this.handleOnChangePassword(event)}
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
          <div className="login-button">
            <button
              className="btn-login"
              onClick={() => {
                this.handleLogin();
              }}
            >
              Login
            </button>
          </div>
          <span className="login-forgot">Forgot your password?</span>
          <div className="text-center">
            <span> Or Login with:</span>
          </div>
          <div className="login-social">
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
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    navigate: (path) => dispatch(push(path)),
    userLoginSuccess: (userInfor) =>
      dispatch(actions.userLoginSuccess(userInfor)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
