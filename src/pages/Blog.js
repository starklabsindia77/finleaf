import React from "react";
import Header2 from "../components/Header2";
import PageTitle from "../components/PageTitle";
import Footer2 from "../components/Footer2";
import { Link } from "react-router-dom";
import BlogBlock from "../components/BlogBlock";
import blogData from "../data/Blog";

function Blog() {
  console.log(blogData);
  return (
    <div className="page-wrapper">
      <Header2 pageName="Blog" />
      <PageTitle pageName="Blog" />

      <section className="blog-list-section">
        <div className="auto-container">
          <div className="sec-title centered">
            <div className="title">Blog</div>
            <h2>
              We are here to manage your <br /> finance with{" "}
              <span>experience</span>
            </h2>
          </div>
          <BlogBlock data={blogData} />
          {/* <ul className="styled-pagination text-center">
            <li>
              <Link href="#" className="active">
                1
              </Link>
            </li>
            <li>
              <Link href="#">2</Link>
            </li>
            <li>
              <Link href="#">3</Link>
            </li>
            <li className="next">
              <Link href="#">
                <span className="fa fa-angle-double-right"></span>
              </Link>
            </li>
          </ul> */}
        </div>
      </section>

      <section className="call-to-action-two">
        <div className="auto-container">
          <div className="clearfix">
            <div className="pull-left">
              <h2>
                Request for <span>quote</span>
              </h2>
            </div>
            <div className="pull-right">
              <Link to="/contact" className="theme-btn btn-style-five">
                Request now <span className="icon fa fa-arrow-right"></span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer2 />
    </div>
  );
}

export default Blog;
