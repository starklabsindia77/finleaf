import React from "react";
import { Link } from "react-router-dom";

function ServiceSidebar() {
  return (
    <div className="sidebar-side col-lg-4 col-md-12 col-sm-12">
      <aside className="sidebar default-sidebar">
        <div className="sidebar-widget sidebar-blog-category">
          <ul className="blog-cat">
            <li className="active">
              <Link to="/services/company">Company Services</Link>
            </li>
            <li>
              <Link to="/services/ipr">Intellectual Property Rights</Link>
            </li>
            <li>
              <Link to="/services/llp">Limited Liability Partnership</Link>
            </li>
            <li>
              <Link to="/services/taxation">Taxation Services</Link>
            </li>
            <li>
              <Link to="/services/registration">Registration Services</Link>
            </li>
            <li>
              <Link to="/services/documentation">Documentation Services</Link>
            </li>
          </ul>
        </div>

        <div className="sidebar-widget contact-widget">
          <div className="sidebar-title">
            <h4>Contact</h4>
          </div>
          <ul>
            <li>
              <span className="icon flaticon-map-1"></span>
              12/626, Friends Society
              <br />
              Vasundhra Ghaziabad <br />
              Uttar Pradesh
            </li>
            <li>
              <span className="icon flaticon-phone-receiver"></span> +91
              8766224590 <br />
              +91 8505949827
            </li>
            <li>
              <span className="icon flaticon-comment"></span>{" "}
              Thefinleaf@gmail.com
            </li>
          </ul>
        </div>

        {/* <div className="sidebar-widget brochures-widget">
          <div className="sidebar-title">
            <h4>Brochures</h4>
          </div>
          <div className="text">
            View our 2019 financial prospectus brochure for an easy to read
            guide on all of the services offer.
          </div>
          <ul className="files">
            <li>
              <Link href="#">
                <span className="fa fa-file-pdf-o"></span> Download Brochure
              </Link>
            </li>
            <li>
              <Link href="#">
                <span className="fa fa-file-word-o"></span> Characteristics
              </Link>
            </li>
          </ul>
        </div> */}

        <div className="sidebar-widget banner-widget">
          <div
            className="widget-content"
            style={{
              backgroundImage: "url(/assets/images/resource/service-15.jpg)",
            }}
          >
            <div className="logo">
              <img src="/assets/images/myimages/finleaf_logo02.png" alt="" />
            </div>
            {/* <div className="title">Securied Business with</div>
            <h2>Financ</h2> */}
            <Link to="/contact" className="theme-btn btn-style-seventen">
              Let’s start now <span className="icon flaticon-link"></span>
            </Link>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default ServiceSidebar;
