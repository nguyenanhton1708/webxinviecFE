import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { LANGUAGES } from "../../../utils";
import "./DetailCompany.scss";
import HomeHeader from "../../HomePage/HomeHeader";
import HomeFooter from "../../HomePage/HomeFooter";
import { getDetailInforCompany } from "../../../services/userService";
class DetailCompany extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detailCompany: {},
    };
  }

  async componentDidMount() {
    if (
      this.props.match &&
      this.props.match.params &&
      this.props.match.params.id
    ) {
      let id = this.props.match.params.id;
      let res = await getDetailInforCompany(id);
      if (res && res.errCode === 0) {
        this.setState({
          detailCompany: res.data,
        });
      }
    }
  }
  componentDidUpdate(prevProps, prevState, snapshot) {}

  render() {
    console.log("check check state:", this.state);
    let { detailCompany } = this.state;
    return (
      <div>
        <HomeHeader isShowBanner={false} />
        <div className="company-detail-container">
          <div className="company-detail-header">
            <div
              className="content-left"
              style={{
                backgroundImage: `url(${
                  detailCompany && detailCompany.image
                    ? detailCompany.image
                    : ""
                })`,
              }}
            ></div>
            <div className="content-right">
              <h1>{detailCompany.companyName}</h1>
              <div className="company-desc">
                {detailCompany &&
                  detailCompany.Markdown &&
                  detailCompany.Markdown.description && (
                    <span>{detailCompany.Markdown.description}</span>
                  )}
              </div>
            </div>
          </div>
          <div className="company-recruit">
            {detailCompany &&
              detailCompany.Markdown &&
              detailCompany.Markdown.contentHTML && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: detailCompany.Markdown.contentHTML,
                  }}
                ></div>
              )}
          </div>
        </div>
        <HomeFooter />
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
    // fetchAllCompanys: (id) => dispatch(actions.fetchAllCompanys()),
    // saveDetailCompany: (data) => dispatch(actions.saveDetailCompany(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailCompany);
