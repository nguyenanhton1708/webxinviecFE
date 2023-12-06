import React from "react";
import "../../../scss/DetailNew/New.scss";
import renderHTML from "react-render-html";
import { Link } from "react-router-dom";
export default function New(props) {
  const styleFacebook = {
    background: "#3f64ab",
  };
  const styleInstagram = {
    background:
      "linear-gradient(45deg,#f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)",
  };
  const styleTwitch = {
    background: "#1d9ceb",
  };
  return (
    <div className="DetailNew">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="new__box">
              <div className="new__box__content">
                {renderHTML(props.content)}
              </div>
              <div className="container">
                <div className="new__box__share">
                  <div className="shareNow">
                    <span>Chia sẻ ngay:</span>
                  </div>
                  <div className="shareIcon">
                    <div className="icon" style={styleFacebook}>
                      <i className="fab fa-facebook-f"></i>
                    </div>
                    <div className="icon" style={styleInstagram}>
                      <i className="fab fa-instagram"></i>
                    </div>
                    <div className="icon" style={styleTwitch}>
                      <i className="fab fa-twitter"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="box__recruitment">
              <div className="box__recruitment__title title--detail">
                Việc làm đề xuất cho bạn
              </div>
              <div className="box__recruitment__content">
                <div className="box__new">
                  <div className="icon__new">
                    <img
                      src={
                        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Logo_VTC_Game_from_2008_to_2012.svg/1200px-Logo_VTC_Game_from_2008_to_2012.svg.png"
                      }
                      alt=""
                    />
                  </div>
                  <div className="content">
                    <div className="content__title">
                      <Link to="">Lập trình web</Link>
                    </div>
                    <div className="content__name">
                      <Link to="">Công ty VTC</Link>
                    </div>
                  </div>
                </div>
                <div className="box__new">
                  <div className="icon__new">
                    <img
                      src={
                        "https://seeklogo.com/images/V/vng-corp-logo-FC75AB6A1E-seeklogo.com.png"
                      }
                      alt=""
                    />
                  </div>
                  <div className="content">
                    <div className="content__title">
                      <Link to="">Lập trình C, C++</Link>
                    </div>
                    <div className="content__name">
                      <Link to="">Công ty VNG</Link>
                    </div>
                  </div>
                </div>
                <Link to="" className="xemthem">
                  Xem thêm {">>"}
                </Link>
              </div>
            </div>
            <div className="newPost">
              <div className="newPost_box">
                <div className="newPost__box__title title--detail pt-2">
                  Bài viết mới
                </div>
                <div className="newPost__box__content">
                  <div className="content__link">
                    <Link to="">
                      Làm thế nào để CV của bạn trở thành “chân ái” của nhà
                      tuyển dụng?
                    </Link>
                  </div>
                  <div className="content__link">
                    <Link to="">
                      Làm thế nào để CV của bạn trở thành “chân ái” của nhà
                      tuyển dụng?
                    </Link>
                  </div>
                  <div className="content__link">
                    <Link to="">
                      Làm thế nào để CV của bạn trở thành “chân ái” của nhà
                      tuyển dụng?
                    </Link>
                  </div>
                  <div className="content__link">
                    <Link to="">
                      Làm thế nào để CV của bạn trở thành “chân ái” của nhà
                      tuyển dụng?
                    </Link>
                  </div>
                  <div className="content__link">
                    <Link to="">
                      Làm thế nào để CV của bạn trở thành “chân ái” của nhà
                      tuyển dụng?
                    </Link>
                  </div>
                  <div className="content__link">
                    <Link to="">
                      Làm thế nào để CV của bạn trở thành “chân ái” của nhà
                      tuyển dụng?
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
