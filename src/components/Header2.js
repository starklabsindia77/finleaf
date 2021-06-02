import React from "react";
import { Link } from "react-router-dom";

function Header2({ pageName }) {
  return (
    <header className="main-header header-style-five five-alternate">
      <div className="header-top">
        <div className="auto-container">
          <div className="inner-container clearfix">
            <div className="top-left">
              <ul className="contact-list clearfix">
                <li>
                  <i className="fa fa-envelope-o"></i> Thefinleaf@gmail.com
                </li>
                <li>
                  <i className="fa fa-phone"></i>
                  +91 8766224590 / +91 8505949827
                </li>
                {/*  <li>
                  <i className="fa fa-map-marker"></i>
                  12/626, Friends Society Vasundhra Ghaziabad Uttar Pradesh
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="header-upper">
        <div className="auto-container">
          <div className="clearfix">
            <div className="pull-left logo-box">
              <div className="logo">
                <Link to="/">
                  <img
                    src="/assets/images/myimages/finleaf_logo02.png"
                    alt=""
                    title=""
                    style={{
                      height: "75px",
                      marginTop: "30px",
                      marginLeft: "-10px",
                    }}
                  />
                </Link>
              </div>
            </div>

            <div className="nav-outer clearfix">
              <nav className="main-menu navbar-expand-md">
                <div className="navbar-header">
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                </div>

                <div
                  className="navbar-collapse collapse clearfix"
                  id="navbarSupportedContent"
                >
                  <ul className="navigation clearfix">
                    {pageName === "Home" ? (
                      <li className=" current">
                        <Link to="/">Home</Link>
                      </li>
                    ) : (
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                    )}

                    {pageName === "About" ? (
                      <li className=" current ">
                        <Link to="/about">About Us</Link>
                      </li>
                    ) : (
                      <li>
                        <Link to="/about">About Us</Link>
                      </li>
                    )}

                    {pageName === "Services" ? (
                      <li className="current dropdown">
                        <Link to="/services">Services</Link>
                        <ul>
                          <li>
                            <Link to="/services/company">Company Services</Link>
                          </li>
                          <li>
                            <Link to="/services/ipr">
                              Intellectual Property Rights
                            </Link>
                          </li>
                          <li>
                            <Link to="/services/llp">
                              Limited Liability Partnership
                            </Link>
                          </li>
                          <li>
                            <Link to="/services/taxation">
                              Taxation Services
                            </Link>
                          </li>
                          <li>
                            <Link to="/services/registration">
                              Registration Services
                            </Link>
                          </li>
                          <li>
                            <Link to="/services/documentation">
                              Documentation Services
                            </Link>
                          </li>
                        </ul>
                      </li>
                    ) : (
                      <li className="dropdown">
                        <Link to="/services">Services</Link>
                        <ul>
                          <li>
                            <Link to="/services/company">Company Services</Link>
                          </li>
                          <li>
                            <Link to="/services/ipr">
                              Intellectual Property Rights
                            </Link>
                          </li>
                          <li>
                            <Link to="/services/llp">
                              Limited Liability Partnership
                            </Link>
                          </li>
                          <li>
                            <Link to="/services/taxation">
                              Taxation Services
                            </Link>
                          </li>
                          <li>
                            <Link to="/services/registration">
                              Registration Services
                            </Link>
                          </li>
                          <li>
                            <Link to="/services/documentation">
                              Documentation Services
                            </Link>
                          </li>
                        </ul>
                      </li>
                    )}

                    {/* {pageName === "Portfolio" ? (
                      <li className="current dropdown">
                        <Link to="/">Portfolio</Link>
                        <ul>
                          <li>
                            <Link href="portfolio-2-column.html">
                              Portfolio Two Column
                            </Link>
                          </li>
                          <li>
                            <Link href="portfolio-3-column.html">
                              Portfolio Three Column
                            </Link>
                          </li>
                          <li>
                            <Link href="portfolio-4-column.html">
                              Portfolio Four Column
                            </Link>
                          </li>
                          <li>
                            <Link href="portfolio-masonry.html">
                              Portfolio Masonry
                            </Link>
                          </li>
                          <li>
                            <Link href="portfolio-single.html">
                              Portfolio Single
                            </Link>
                          </li>
                        </ul>
                      </li>
                    ) : (
                      <li className="dropdown">
                        <Link to="/">Portfolio</Link>
                        <ul>
                          <li>
                            <Link href="portfolio-2-column.html">
                              Portfolio Two Column
                            </Link>
                          </li>
                          <li>
                            <Link href="portfolio-3-column.html">
                              Portfolio Three Column
                            </Link>
                          </li>
                          <li>
                            <Link href="portfolio-4-column.html">
                              Portfolio Four Column
                            </Link>
                          </li>
                          <li>
                            <Link href="portfolio-masonry.html">
                              Portfolio Masonry
                            </Link>
                          </li>
                          <li>
                            <Link href="portfolio-single.html">
                              Portfolio Single
                            </Link>
                          </li>
                        </ul>
                      </li>
                    )} */}

                    {pageName === "Blog" ? (
                      <li className="current">
                        <Link to="/blog">Blog</Link>
                      </li>
                    ) : (
                      <li>
                        <Link to="/blog">Blog</Link>
                      </li>
                    )}

                    {pageName === "Contact" ? (
                      <li className=" current">
                        <Link to="/contact">Contact us</Link>
                      </li>
                    ) : (
                      <li>
                        <Link to="/contact">Contact us</Link>
                      </li>
                    )}
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="sticky-header">
        <div className="auto-container clearfix">
          <div className="logo pull-left">
            <Link to="/" className="img-responsive">
              <img
                src="/assets/images/myimages/finleaf_logo02.png"
                alt=""
                title=""
                style={{
                  height: "60px",
                }}
              />
            </Link>
          </div>

          <div className="right-col pull-right">
            <nav className="main-menu navbar-expand-md">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent1"
                aria-controls="navbarSupportedContent1"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>

              <div
                className="navbar-collapse collapse clearfix"
                id="navbarSupportedContent1"
              >
                <ul className="navigation clearfix">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About Us</Link>
                  </li>
                  <li className="dropdown">
                    <Link to="/services">Services</Link>
                    <ul>
                      <li>
                        <Link to="/services/company">Company Services</Link>
                      </li>
                      <li>
                        <Link to="/services/ipr">
                          Intellectual Property Rights
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/llp">
                          Limited Liability Partnership
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/taxation">Taxation Services</Link>
                      </li>
                      <li>
                        <Link to="/services/registration">
                          Registration Services
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/documentation">
                          Documentation Services
                        </Link>
                      </li>
                    </ul>
                  </li>
                  {/* <li className="dropdown">
                    <Link to="/">Portfolio</Link>
                    <ul>
                      <li>
                        <Link>Portfolio Two Column</Link>
                      </li>
                      <li>
                        <Link>Portfolio Three Column</Link>
                      </li>
                      <li>
                        <Link>Portfolio Four Column</Link>
                      </li>
                      <li>
                        <Link>Portfolio Masonry</Link>
                      </li>
                      <li>
                        <Link>Portfolio Single</Link>
                      </li>
                    </ul>
                  </li> */}
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact us</Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header2;
