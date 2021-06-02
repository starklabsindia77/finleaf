import React from "react";
import { Link } from "react-router-dom";

function BlogSection({ data }) {
  return (
    <section className="news-section-two alternate">
      <div className="auto-container">
        <div className="sec-title-two centered">
          <div className="title">latest Blog</div>
          <h2>
            Learn some new info from our latest <span>news</span>
          </h2>
          {/* <div className="text">
            The argument in favor of using filler text goes something like this:
            If you use real content in the design process, anytime you reach a
            review point you’ll end up reviewing and negotiating the content
            itself and not the design.
          </div> */}
        </div>

        <div className="row clearfix">
          {/* <div className="news-block-two brown col-lg-4 col-md-6 col-sm-12">
            <div
              className="inner-box wow fadeInUp"
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <div className="image">
                <img src="assets/images/resource/news-4.jpg" alt="" />
                <div className="overlay-box">
                  <Link
                    to="assets/images/resource/news-4.jpg"
                    datafancybox="news"
                    datafaption=""
                    className="plus flaticon-plus-symbol"
                  ></Link>
                </div>
              </div>
              <div className="lower-content">
                <ul className="post-meta">
                  <li>
                    <span className="fa fa-calendar"></span>September 12, 2019
                  </li>
                  <li>
                    <span className="fa fa-user"></span>Admin
                  </li>
                </ul>
                <h5>
                  <Link to="blog-single.html">
                    Strategy for Norway's Peion Fund Global.
                  </Link>
                </h5>
                <Link to="blog-single.html" className="theme-btn btn-style-ten">
                  View more
                </Link>
              </div>
            </div>
          </div>

          
          <div className="news-block-two brown col-lg-4 col-md-6 col-sm-12">
            <div
              className="inner-box wow fadeInUp"
              data-wow-delay="300ms"
              data-wow-duration="1500ms"
            >
              <div className="image">
                <img src="assets/images/resource/news-5.jpg" alt="" />
                <div className="overlay-box">
                  <Link
                    to="assets/images/resource/news-5.jpg"
                    data-fancybox="news"
                    data-caption=""
                    className="plus flaticon-plus-symbol"
                  ></Link>
                </div>
              </div>
              <div className="lower-content">
                <ul className="post-meta">
                  <li>
                    <span className="fa fa-calendar"></span>September 12, 2019
                  </li>
                  <li>
                    <span className="fa fa-user"></span>Admin
                  </li>
                </ul>
                <h5>
                  <Link to="blog-single.html">
                    What we are capable of usually gets discovered.
                  </Link>
                </h5>
                <Link to="blog-single.html" className="theme-btn btn-style-ten">
                  View more
                </Link>
              </div>
            </div>
          </div>

           */}

          {data.map((value, index) => {
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
