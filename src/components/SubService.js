import React from "react";
import { Link } from "react-router-dom";

function SubService({ data }) {
  return (
    <div>
      {data ? (
        <section className="services-section-ten style-two">
          <div className="auto-container">
            <div className="sec-title centered"></div>
            <div className="row clearfix">
              {data.map((value, index) => {
                return (
                  <div className="services-block-fifteen col-lg-6 col-md-6 col-sm-12">
                    <div
                      className="inner-box wow bounceIn"
                      data-wow-delay="0ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="image">
                        <img src={value.image} alt="" />
                        <div className="overlay-box">
                          <Link
                            data-fancybox="service-2"
                            data-caption=""
                            className="plus flaticon-plus-symbol"
                          ></Link>
                        </div>
                      </div>
                      <div className="lower-content">
                        <div className="upper-box">
                          <div className={`icon ${value.icon}`}></div>
                          <h5>
                            <Link>{value.title}</Link>
                          </h5>
                        </div>
                        <div className="text line-clamp-2">{value.text}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default SubService;
