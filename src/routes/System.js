import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import UserManage from "../containers/System/UserManage";
import Header from "../containers/Header/Header";
// import UsersManage from "../containers/System/Users/UsersManage";
import EmployerManage from "../containers/System/Employer/EmployerManage";
import SeekerManage from "../containers/System/Seeker/SeekerManage";
import PostRecruitManage from "../containers/System/Employer/PostRecruitManage";
import BlogManage from "../containers/System/Blog/BlogManage";
class System extends Component {
  render() {
    const { systemMenuPath, isLoggedIn } = this.props;
    return (
      <React.Fragment>
        {isLoggedIn && <Header />}
        <div className="system-container">
          <div className="system-list">
            <Switch>
              <Route path="/system/admin-manage" component={UserManage} />
              <Route
                path="/system/employer-manage"
                component={EmployerManage}
              />
              <Route path="/system/seeker-manage" component={SeekerManage} />
              <Route path="/system/post-manage" component={PostRecruitManage} />
              <Route path="/system/blog-manage" component={BlogManage} />
              <Route
                component={() => {
                  return <Redirect to={systemMenuPath} />;
                }}
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
    systemMenuPath: state.app.systemMenuPath,
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(System);
