import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../../../scss/Home/ListNew.scss";
import { useDispatch, useSelector } from "react-redux";
import { newData } from "../../../admin/Slice/newSlice";
export default function ListNew() {
  const dispatch = useDispatch();
  const actionResult = async (page) => {
    await dispatch(newData(page));
  };
  useEffect(() => {
    actionResult({ page: 1 });
  }, []);
  const news = useSelector((state) => state.news.new.data);
  const new1 = [];
  const new2 = [];
  const new3 = [];
  if (news) {
    for (let i = 0; i <= news.rows.length; i++) {
      if (new2.length < 1) {
        new2.push(news.rows[i]);
      } else if (new3.length < 3) {
        new3.push(news.rows[i]);
      }
    }
  }
  return (
    <div id="news">
      <div className="heading">
        <div className="heading__title">
          <h3>
            <Link to="/news">Blog</Link> It
          </h3>
        </div>
        <div className="heading__hr"></div>
      </div>
      <div className="container">
        <div className="row mb-4">
          {new1.map((data, index) => (
            <div className="col-sm-6 mb-3" key={index}>
              <Link to={`/news/detailNew/${data.id}`}>
                <div className="news-box">
                  <div className="img-new">
                    <img src={data.avatar} alt="" />
                  </div>
                  <div className="heading p-3">
                    <strong>{data.name}</strong>
                  </div>
                  <div className="content-news">
                    <p className="text-justify">{data.samary}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="row">
          {new2.map((data, index) => (
            <div className="col-md-6 col-sm-6 mb-3" key={index}>
              <Link to={`/news/detailNew/${data.id}`}>
                <div className="news-box">
                  <div style={{ height: "250px" }}>
                    <img src={data.avatar} className="w-100 h-100" alt="" />
                  </div>
                  <div className="heading pt-1 pb-1 pl-2 pr-2">
                    <strong>{data.name}</strong>
                  </div>
                  <div className="content-news">
                    <p className="text-justify">{data.samary}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}

          <div className="col-md-6">
            <div className="row ">
              {new3.map((data, index) => (
                <div className="col-md-12 " key={index}>
                  <Link to={`/news/detailNew/${data.id}`}>
                    <div className="news-box">
                      <div className="row flex col-12">
                        <div className="col-4" style={{ height: "50px" }}>
                          <img src={data.avatar} className="" alt="" />
                        </div>

                        <div className="col-8">
                          <strong style={{ fontSize: ".9rem" }}>
                            {data.name}
                          </strong>
                          <div className="content-news">
                            <p className="text-justify">{data.samary}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
