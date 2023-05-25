import React, { Component } from "react";
import { connect } from "react-redux";
import "./CompanyOutStanding.scss";
import { FormattedMessage } from "react-intl";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
class CompanyOutStanding extends Component {
  render() {
    let settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
    };
    return (
      <div className="CompanyOutStanding-container">
        <div className="CompanyOutStanding-content">
          <div className="CompanyOutStanding-header">
            <h2>
              <b>Nhà tuyển dụng nổi bật</b>
            </h2>
          </div>
          <div className="CompanyOutStanding-body">
            <Slider {...settings}>
              <div className="CompanyOutStanding-product">
                <img src="https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBK1lxREE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--dfbd22fbb9a6b44ab1c486c8f0fc55f1daebb55e/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RW5KbGMybDZaVjkwYjE5bWFYUmJCMmtCcWpBPSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--79eee5883893a012786006950460867831e6f661/mgm-technology-partners-vietnam-logo.png"></img>
                <span className="CompanyOutStanding-name">
                  mgm technology partners Vietnam
                </span>
              </div>
              <div className="CompanyOutStanding-product">
                <img src="https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBekpjRUE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--2798d9d93595456ade8b33c28a0fb1cab04029a5/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RW5KbGMybDZaVjkwYjE5bWFYUmJCMmtCcWpBPSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--79eee5883893a012786006950460867831e6f661/toshiba-software-development-viet-nam-co-ltd-logo.png"></img>
                <span className="CompanyOutStanding-name">
                  Toshiba Software Development (Viet Nam) Co, Ltd
                </span>
              </div>
              <div className="CompanyOutStanding-product">
                <img src="https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBN2ZGR2c9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--cfdeddf0aec7ca8b02d0e13e969b9aed22aee626/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RW5KbGMybDZaVjkwYjE5bWFYUmJCMmtCcWpBPSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--79eee5883893a012786006950460867831e6f661/download.png"></img>
                <span className="CompanyOutStanding-name">
                  Ngân Hàng Á Châu | ACB
                </span>
              </div>
              <div className="CompanyOutStanding-product">
                <img src="https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBLzNKTkE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--478da22783e280dd14357eb6e39a558651e90194/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RW5KbGMybDZaVjkwYjE5bWFYUmJCMmtCcWpBPSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--79eee5883893a012786006950460867831e6f661/Logo_Official.png"></img>
                <span className="CompanyOutStanding-name">
                  Titan Technology Corporation
                </span>
              </div>
              <div className="CompanyOutStanding-product">
                <img src="https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMmZvSXc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--88c82102b4c6782414b90e4077f75449b9789560/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RW5KbGMybDZaVjkwYjE5bWFYUmJCMmtCcWpBPSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--79eee5883893a012786006950460867831e6f661/Logo%20MB%20he%20mau%20RGB%2001.png"></img>
                <span className="CompanyOutStanding-name">MB Bank</span>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(CompanyOutStanding);
