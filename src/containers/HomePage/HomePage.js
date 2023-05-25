import React, { Component } from "react";
import { connect } from "react-redux";
import HomeHeader from "./HomeHeader";
import CompanyOutStanding from "./Section/CompanyOutStanding";
import CompanyPopular from "./Section/CompanyPopular";
import Blog from "./Section/Blog";
import HomeFooter from "./HomeFooter";
class HomePage extends Component {
  render() {
    return (
      <div>
        <HomeHeader />
        <CompanyOutStanding />
        <CompanyPopular />
        <Blog />
        <HomeFooter />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
