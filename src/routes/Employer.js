import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import PostRecruitManage from "../containers/System/Employer/PostRecruitManage";
import EmployerManage from "../containers/System/Employer/EmployerManage";
import Header from "../containers/Header/Header";
class Employer extends Component {
  render() {
    const { isLoggedIn } = this.props;
    return (
      <React.Fragment>
        {isLoggedIn && <Header />}
        <div className="Employer-container">
          <div className="Employer-list">
            <Switch>
              <Route
                path="/system/employer-manage"
                component={EmployerManage}
              />
              <Route
                path="/employer/recruit-manage"
                component={PostRecruitManage}
              />
            </Switch>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    EmployerMenuPath: state.app.EmployerMenuPath,
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Employer);
