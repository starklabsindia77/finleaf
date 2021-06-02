import React from "react";
import { Link } from "react-router-dom";
import Footer2 from "../components/Footer2";
import Header2 from "../components/Header2";
import PageTitle from "../components/PageTitle";
import servicesData from "../../src/data/Services";
import MapInfo from "../components/MapInfo";

function Services() {
  //console.log(servicesData);
  return (
    <div className="page-wrapper">
      <Header2 pageName="Services" />

      <PageTitle pageName="Services" />

      {/*  Services Section Ten */}
      <section className="services-section-ten style-two">
        <div className="auto-container">
          {/*  Sec Title */}
          <div className="sec-title centered">
            <div className="title">Service</div>
            <h2>
              We are here to manage your <br /> finance with{" "}
              <span>experience</span>
            </h2>
          </div>
          <div className="row clearfix">
            {servicesData.map((value, index) => {
              return (
                <div className="services-block-fourteen style-two col-lg-4 col-md-6 col-sm-12">
                  <div
                    className="inner-box wow fadeInUp"
                    data-wow-delay="0ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="icon-box">
                      <span className={`icon ${value.icon}`}></span>
                    </div>
                    <h6>
                      <Link to={`/services/${value.slug}`}>{value.title}</Link>
                    </h6>
                    <div className="text line-clamp-2">{value.text}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/*  End Services Section Ten */}

      {/*  Services Section Four*/}
      <section className="services-section-four">
        <div className="auto-container">
          {/*  Sec Title */}
          <div className="sec-title">
            <div className="clearfix">
              <div className="pull-left">
                <h2>
                  We surve as the best <br /> services
                </h2>
              </div>
              <div className="pull-right">
                <div className="text">
                  We believe in building relationships, not just business. We
                  aim to build a strong trust with our clients. We also provide
                  various services to Startups and new companies and help them
                  to flourish in markets. So, what are you waiting for? Just
                  call or text us and here we are to help you with your issues.
                  Let us make it TODAY because TOMORROW never comes
                </div>
              </div>
            </div>
          </div>
          <div className="row clearfix">
            <div className="services-block-four style-two col-lg-4 col-md-6 col-sm-12">
              <div className="inner-box">
                <div className="image">
                  <img src="assets/images/resource/service-3.jpg" alt="" />
                  <div className="overlay-box">
                    <div className="content">
                      <div className="icon-box">
                        <span className="icon flaticon-statistics-1"></span>
                      </div>
                      <h6>One Person Company</h6>
                    </div>
                  </div>

                  <div className="overlay-box-two">
                    <div className="overlay-inner-two">
                      <div className="content">
                        <div className="icon-box">
                          <span className="icon flaticon-statistics-1"></span>
                        </div>
                        <h6>
                          <Link>One Person Company</Link>
                        </h6>
                        <div className="text line-clamp-2">
                          One of the advantages of One Person Company is that it
                          has more opportunities, limited liability since the
                          liability of the OPC is limited to the extent of the
                          value of the share you hold, the individual could take
                          more risk in business without affecting or suffering
                          the loss of personal assets. It is the encouragement
                          to new, young and innovative start-ups.
                        </div>
                        <Link className="read-more">
                          Let’s start{" "}
                          <span className="fa fa-angle-double-right"></span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*  Services Block Four */}
            <div className="services-block-four style-two col-lg-4 col-md-6 col-sm-12">
              <div className="inner-box">
                <div className="image">
                  <img src="assets/images/resource/service-4.jpg" alt="" />
                  <div className="overlay-box">
                    <div className="content">
                      <div className="icon-box">
                        <span className="icon flaticon-target-1"></span>
                      </div>
                      <h6>Founders' Agreement</h6>
                    </div>
                  </div>

                  <div className="overlay-box-two">
                    <div className="overlay-inner-two">
                      <div className="content">
                        <div className="icon-box">
                          <span className="icon flaticon-target-1"></span>
                        </div>
                        <h6>
                          <Link>Founders' Agreement</Link>
                        </h6>
                        <div className="text line-clamp-2">
                          A founders agreement is usually referred to as
                          shareholders agreement, is a written document that
                          deals in cases such as relative split of the equity
                          among the founders of the firm, also the fact that how
                          long the founders will have to remain with the firm
                          for their shares to fully vest.
                        </div>
                        <Link className="read-more">
                          Let’s start{" "}
                          <span className="fa fa-angle-double-right"></span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*  Services Block Four */}
            <div className="services-block-four style-two col-lg-4 col-md-6 col-sm-12">
              <div className="inner-box">
                <div className="image">
                  <img src="assets/images/resource/service-3.jpg" alt="" />
                  <div className="overlay-box">
                    <div className="content">
                      <div className="icon-box">
                        <span className="icon flaticon-bank-building"></span>
                      </div>
                      <h6>Accounting and Book Keeping</h6>
                    </div>
                  </div>

                  <div className="overlay-box-two">
                    <div className="overlay-inner-two">
                      <div className="content">
                        <div className="icon-box">
                          <span className="icon flaticon-bank-building"></span>
                        </div>
                        <h6>
                          <Link>Accounting and Book Keeping</Link>
                        </h6>
                        <div className="text line-clamp-2">
                          Book keeping is an indispensable subset of accounting.
                          Boo kkeeping refers to the process of accumulating,
                          organizing, storing, and accessing the financial
                          information base of an entity,
                        </div>
                        <Link className="read-more">
                          Let’s start{" "}
                          <span className="fa fa-angle-double-right"></span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  End Services Section Four*/}

      <MapInfo pageName="About" />

      {/* Main Footer*/}
      <Footer2 />
    </div>
  );
}

export default Services;
