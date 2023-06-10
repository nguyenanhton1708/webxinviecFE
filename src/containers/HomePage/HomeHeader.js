import React, { Component } from "react";
import { connect } from "react-redux";
import "./HomeHeader.scss";
import { FormattedMessage } from "react-intl";
import { LANGUAGES } from "../../utils";
import { changeLanguageApp } from "../../store/actions";
import * as actions from "../../store/actions";
class HomeHeader extends Component {
  changeLanguage = (language) => {
    this.props.changeLanguageApp(language);
  };

  constructor(props) {
    super(props);
    this.state = {
      cityArr: [],
    };
  }

  async componentDidMount() {
    this.props.getCityStart();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.citys !== this.props.citys) {
      this.setState({
        cityArr: this.props.citys,
      });
    }
  }
  render() {
    let citys = this.state.cityArr;
    let language = this.props.language;

    return (
      <React.Fragment>
        <div className="home-header-container">
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap"
            rel="stylesheet"
          ></link>
          <div className="home-header-content">
            <div className="header-logo">
              <img
                src="https://itviec.com/assets/logo-itviec-4492a2f2577a15a0a1d55444c21c0fa55810822b3b189fc689b450fb62ce0b5b.png"
                className="logo"
              ></img>
            </div>
            <div className="header-left">
              <ul className="header-left-menu">
                <li>
                  <FormattedMessage id="homeheader.jobs" />
                </li>
                <li>
                  {" "}
                  <FormattedMessage id="homeheader.company" />
                </li>
                <li>Blog</li>
                <li>
                  <FormattedMessage id="homeheader.contest" />
                </li>
              </ul>
            </div>
            <div className="header-right">
              <ul className="header-right-menu">
                <li>
                  <FormattedMessage id="homeheader.employers" />
                </li>
                <li>
                  <FormattedMessage id="homeheader.signin" />
                </li>
                <li>
                  <FormattedMessage id="homeheader.signup" />
                </li>
                <li
                  className={
                    language === LANGUAGES.VI
                      ? "language-vi active"
                      : "language-vi"
                  }
                  onClick={() => this.changeLanguage(LANGUAGES.VI)}
                >
                  VN
                </li>
                <li
                  className={
                    language === LANGUAGES.EN
                      ? "language-en active"
                      : "language-en"
                  }
                  onClick={() => this.changeLanguage(LANGUAGES.EN)}
                >
                  EN
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="home-search-container">
          <div className="search-container">
            <h1>
              <FormattedMessage id="homeheader.content" />
            </h1>
            <div className="search">
              <div className="search-dropdown">
                <select>
                  {citys &&
                    citys.length > 0 &&
                    citys.map((item, index) => {
                      return <option key={index}>{item.valueVi}</option>;
                    })}
                </select>
              </div>
              <div className="search-text">
                <i className="fas fa-search"></i>
                <input
                  type="text"
                  placeholder="Tìm kiếm theo kỹ năng, chức vụ, công ty..."
                />
              </div>
              <button className="search-click">
                <FormattedMessage id="homeheader.search" />
              </button>
            </div>
            <div className="search-taglist">
              <a>Java</a>
              <a>ReactJs</a>
              <a>.NET</a>
              <a>Tester</a>
              <a>PHP</a>
              <a>Business Analyst</a>
              <a>NodeJS</a>
              <a>Manager</a>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
    citys: state.admin.citys,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeLanguageApp: (language) => dispatch(changeLanguageApp(language)),
    getCityStart: () => dispatch(actions.fetchCityStart()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
