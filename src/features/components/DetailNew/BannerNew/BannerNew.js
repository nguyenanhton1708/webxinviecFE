import Avatar from "antd/lib/avatar/avatar";
import React from "react";
import { Link } from "react-router-dom";
import anh from "../../../images/anh.jpg";
import "../../../scss/DetailNew/BannerNew.scss";
export default function BannerNew(props) {
  console.log(props);
  const style = {
    background: `url(${props.img}) repeat center`,
    backgroundSize: "cover",
  };
  return (
    <div className="bannerNew" style={style}>
      <div className="bannerNew__content">
        <div className="bannerNew__content__title">
          <span>{props.title}</span>
        </div>
        <div className="bannerNew__content__tag">
          {props.tags.map((data, index) => (
            <div className="newTag" key={index}>
              <Link to="">{data.name}</Link>
            </div>
          ))}
        </div>
        <div className="bannerNew__content__date">
          <Avatar size="large" src={anh} className="avatarNew" />
          <span>Tuyết Mai lúc 23 Tháng 11 2023</span>
        </div>
      </div>
    </div>
  );
}
