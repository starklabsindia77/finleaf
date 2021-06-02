import React from "react";
import { Link } from "react-router-dom";

function BlogSection({ data }) {
  var ret = [];
  for (var i = data.length - 1; i >= data.length - 3; i--) {
    ret.push(data[i]);
  }

  return (
    <section className="news-section-two alternate">
      <div className="auto-container">
        <div className="sec-title-two centered">
          <div className="title">latest Blog</div>
          <h2>
            Learn some new info from our latest <span>news</span>
          </h2>
        </div>

        <div className="row clearfix">
          {ret.map((value, index) => {
            return (
              <div className="news-block-two brown col-lg-4 col-md-6 col-sm-12">
                <div
                  className="inner-box wow fadeInUp"
                  data-wow-delay="600ms"
                  data-wow-duration="1500ms"
                >
                  <div className="image">
                    <img src={value.thumbImage} alt="" />
                    <div className="overlay-box">
                      <Link
                        to={value.thumbImage}
                        data-fancybox="news"
                        data-caption=""
                        className="plus flaticon-plus-symbol"
                      ></Link>
                    </div>
                  </div>
                  <div className="lower-content">
                    <ul className="post-meta">
                      <li>
                        <span className="fa fa-calendar"></span>September 12,
                        2019
                      </li>
                      <li>
                        <span className="fa fa-user"></span>Admin
                      </li>
                    </ul>
                    <h5>
                      <Link to={`/post/${value.slug}`} className="line-clamp-1">
                        {value.title}
                      </Link>
                    </h5>
                    <Link
                      to={`/post/${value.slug}`}
                      className="theme-btn btn-style-eighteen"
                    >
                      View more
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default BlogSection;
