import React, { Component } from "react";
import { connect } from "react-redux";
import "./CompanyOutStanding.scss";
import Slider from "react-slick";
import * as actions from "../../../store/actions";
import { withRouter } from "react-router";
import { FormattedMessage } from "react-intl";
import { changeLanguageApp } from "../../../store/actions";

class CompanyOutStanding extends Component {
  changeLanguage = (language) => {
    this.props.changeLanguageApp(language);
  };
  constructor(props) {
    super(props);
    this.state = {
      arrCompanys: [],
    };
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.topCompanysRedux !== this.props.topCompanysRedux) {
      this.setState({
        arrCompanys: this.props.topCompanysRedux,
      });
    }
  }
  componentDidMount() {
    this.props.loadTopCompanys();
  }

  handleViewDetailCompany = (company) => {
    if (this.props.history) {
      this.props.history.push(`/detail-company/${company.id}`);
    }
  };
  render() {
    let arrCompanys = this.state.arrCompanys;
    arrCompanys = arrCompanys.concat(arrCompanys).concat(arrCompanys);
    return (
      <div className="CompanyOutStanding-container">
        <div className="CompanyOutStanding-content">
          <div className="CompanyOutStanding-header">
            <h2>
              <b>
                <FormattedMessage id="homeheader.outStanding" />
              </b>
            </h2>
          </div>
          <div className="CompanyOutStanding-body">
            <Slider {...this.props.settings}>
              {arrCompanys &&
                arrCompanys.length > 0 &&
                arrCompanys.map((item, index) => {
                  let imageBase64 = "";
                  if (item.image) {
                    imageBase64 = new Buffer(item.image, "base64").toString(
                      "binary"
                    );
                    return (
                      <div
                        className="CompanyOutStanding-product"
                        key={index}
                        onClick={() => this.handleViewDetailCompany(item)}
                      >
                        <div
                          className="CompanyOutStanding-image"
                          style={{
                            backgroundImage: `url(${imageBase64})`,
                          }}
                        ></div>

                        <div className="CompanyOutStanding-name">
                          {item.companyName}
                        </div>
                      </div>
                    );
                  }
                })}
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    topCompanysRedux: state.admin.topCompanys,
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadTopCompanys: () => dispatch(actions.fetchTopCompany()),
    changeLanguageApp: (language) => dispatch(changeLanguageApp(language)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CompanyOutStanding)
);
