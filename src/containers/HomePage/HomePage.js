import React, { Component } from "react";
import { connect } from "react-redux";
import HomeHeader from "./HomeHeader";
import CompanyOutStanding from "./Section/CompanyOutStanding";
import CompanyPopular from "./Section/CompanyPopular";
import Blog from "./Section/Blog";
import HomeFooter from "./HomeFooter";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
class HomePage extends Component {
  render() {
    let settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
    };

    return (
      <div>
        <HomeHeader />
        <CompanyOutStanding settings={settings} />
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
