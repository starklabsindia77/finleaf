import React from "react";
import { Link } from "react-router-dom";

function BlogBlock({ data }) {
  return (
    <div className="row clearfix">
      {data.map((value, index) => {
        return (
          <div className="news-block-four col-lg-4 col-md-6 col-sm-12">
            <div className="inner-box">
              <div className="image">
                <img src={value.thumbImage} alt="" />
                <div className="overlay-box">
                  <Link
                    href={value.thumbImage}
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

      {/* <div className="news-block-four col-lg-4 col-md-6 col-sm-12">
        <div className="inner-box">
          <div className="image">
            <img src="assets/images/resource/news-5.jpg" alt="" />
            <div className="overlay-box">
              <Link
                href="assets/images/resource/news-5.jpg"
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
              <Link to="/post/what">
                What we are capable of usually gets discovered.
              </Link>
            </h5>
            <Link to="/post/strategy" className="theme-btn btn-style-eighteen">
              View more
            </Link>
          </div>
        </div>
      </div>

     
      <div className="news-block-four col-lg-4 col-md-6 col-sm-12">
        <div className="inner-box">
          <div className="image">
            <img src="assets/images/resource/news-6.jpg" alt="" />
            <div className="overlay-box">
              <Link
                href="assets/images/resource/news-6.jpg"
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
              <Link href="blog-single.html">
                Food industry leaders often change their promoters.
              </Link>
            </h5>
            <Link href="#" className="theme-btn btn-style-eighteen">
              View more
            </Link>
          </div>
        </div>
      </div>

      
      <div className="news-block-four col-lg-4 col-md-6 col-sm-12">
        <div className="inner-box">
          <div className="image">
            <img src="assets/images/resource/news-13.jpg" alt="" />
            <div className="overlay-box">
              <Link
                href="assets/images/resource/news-13.jpg"
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
              <Link href="blog-single.html">
                Strategy for Norway's Peion Fund Global.
              </Link>
            </h5>
            <Link href="#" className="theme-btn btn-style-eighteen">
              View more
            </Link>
          </div>
        </div>
      </div>

      
      <div className="news-block-four col-lg-4 col-md-6 col-sm-12">
        <div className="inner-box">
          <div className="image">
            <img src="assets/images/resource/news-14.jpg" alt="" />
            <div className="overlay-box">
              <Link
                href="assets/images/resource/news-14.jpg"
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
              <Link href="blog-single.html">
                What we are capable of usually gets discovered.
              </Link>
            </h5>
            <Link href="#" className="theme-btn btn-style-eighteen">
              View more
            </Link>
          </div>
        </div>
      </div>

      
      <div className="news-block-four col-lg-4 col-md-6 col-sm-12">
        <div className="inner-box">
          <div className="image">
            <img src="assets/images/resource/news-15.jpg" alt="" />
            <div className="overlay-box">
              <Link
                href="assets/images/resource/news-15.jpg"
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
              <Link href="blog-single.html">
                Food industry leaders often change their promoters.
              </Link>
            </h5>
            <Link href="#" className="theme-btn btn-style-eighteen">
              View more
            </Link>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default BlogBlock;
