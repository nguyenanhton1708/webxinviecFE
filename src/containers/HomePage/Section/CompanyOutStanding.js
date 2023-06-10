import React, { Component } from "react";
import { connect } from "react-redux";
import "./CompanyOutStanding.scss";
import { FormattedMessage } from "react-intl";
import Slider from "react-slick";
import * as actions from "../../../store/actions";
import { LANGUAGES } from "../../../utils";
import companyImg from "../../../../src/assets/companyLogo/logo MB.png";
class CompanyOutStanding extends Component {
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
  render() {
    console.log(" check top companyredux:", this.props.topCompanysRedux);
    let { language } = this.props;
    let arrCompanys = this.state.arrCompanys;
    arrCompanys = arrCompanys.concat(arrCompanys).concat(arrCompanys);
    return (
      <div className="CompanyOutStanding-container">
        <div className="CompanyOutStanding-content">
          <div className="CompanyOutStanding-header">
            <h2>
              <b>Nhà tuyển dụng nổi bật</b>
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
                    let name = `${item.conpanyName}`;
                    // let nameVi = `${item.positionData.valueVi},${item.firstName} ${item.lastName}`;
                    // let nameEn = `${item.positionData.valueEn},${item.firstName} ${item.lastName}`;
                    return (
                      <div className="CompanyOutStanding-product" key={index}>
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CompanyOutStanding);
