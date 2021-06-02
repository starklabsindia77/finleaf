import React from "react";
import { Link } from "react-router-dom";
import Footer2 from "../components/Footer2";
import Header2 from "../components/Header2";
import MapInfo from "../components/MapInfo";
import PageTitle from "../components/PageTitle";
function AboutUs() {
  return (
    <div className="page-wrapper">
      {/*<!-- Preloader -->*/}
      {/* <div className="preloader"></div> */}

      {/*<!-- Main Header-->*/}
      <Header2 pageName="About" />
      {/*<!--End Main Header -->*/}

      {/*<!--Page Title-->*/}
      <PageTitle pageName="About" />
      {/*<!--End Page Title-->*/}

      {/*<!-- Services Section Three-->*/}
      <section className="services-section-three">
        <div className="auto-container">
          <div className="row clearfix">
            {/*<!-- Services Block -->*/}
            <div className="services-block-three style-two col-lg-4 col-md-6 col-sm-12">
              <div
                className="inner-box wow fadeIn"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="icon-box">
                  <span className="icon flaticon-bar-chart"></span>
                </div>
                <h6>
                  <Link href="#">Our Responsibility</Link>
                </h6>
                <div className="text" style={{ textAlign: "initial" }}>
                  A good professional plays an important role in assisting the
                  Business Organisation. We as a professional performs the role
                  of advisor for management on principles and methods for
                  effective delegation and planning of work. We provide best
                  services in Legal, Taxation, Auditing and Company Secretarial
                  services.
                </div>
              </div>
            </div>

            {/*<!-- Services Block -->*/}
            <div className="services-block-three style-two col-lg-4 col-md-6 col-sm-12">
              <div
                className="inner-box wow fadeIn"
                data-wow-delay="300ms"
                data-wow-duration="1500ms"
              >
                <div className="icon-box">
                  <span className="icon flaticon-board"></span>
                </div>
                <h6>
                  <Link href="#">Our Approach</Link>
                </h6>
                <div className="text" style={{ textAlign: "initial" }}>
                  We help our clients solve complex business and use our
                  experience and business understanding to create values to
                  them. We invest time in understanding our clients and their
                  businesses in order to provide them Quality Service. We assure
                  to provide Best Legal Advisory services and Corporate Services
                  to our clients and performs best in Delhi/ NCR.
                </div>
              </div>
            </div>

            {/*<!-- Services Block -->*/}
            <div className="services-block-three style-two col-lg-4 col-md-12 col-sm-12">
              <div
                className="inner-box wow fadeIn"
                data-wow-delay="600ms"
                data-wow-duration="1500ms"
              >
                <div className="icon-box">
                  <span className="icon flaticon-student"></span>
                </div>
                <h6>
                  <Link href="#">Our Mission</Link>
                </h6>
                <div className="text" style={{ textAlign: "initial" }}>
                  We are committed to integrity and fairness in our approach
                  while interacting our dealing with the clients and their work.
                  We strive for the excellence and follow best industry practice
                  in our services. We believe in giving best to our prestigious
                  clients and aim to become Best consultancy firm in CA and CS
                  services.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*<!-- About Section Four -->*/}
      <section className="about-section-four">
        <div className="auto-container">
          <div className="sec-title centered">
            <div className="title">about us</div>
            <h2>
              ROAD TO SUCCESS IS NEVER EASY....
              <br />
              BUT WITH TINY STEPS CAN DEFINITELY BE ACHIEVED....
            </h2>
          </div>

          <div className="row clearfix">
            <div className="image-column col-lg-5 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="image-1">
                  <img src="assets/images/resource/about-2.jpg" alt="" />
                </div>
                <div className="image-2">
                  <img src="assets/images/resource/about-3.jpg" alt="" />
                </div>
              </div>
            </div>

            <div className="skills-column col-lg-7 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="text">
                  <p>
                    First and the foremost important question that must be
                    rising in your mind is who are we? Well, a simple answer is
                    we are FINLEAF, the Consultants. We are a consultancy
                    service providing firm which offers all types of Legal,
                    Secretarial, Financial, Taxation services to our clients. We
                    believe that what a mind can perceive, it can receive. A
                    dream can turn into reality when given wings. We primarily
                    focus on what you want to achieve for your business and what
                    are the best efforts we can make to achieve the same.
                  </p>
                  <p>
                    With proper strategy and dedicated efforts, miles can be
                    easily achieved. Our expert team will provide you with the
                    best possible solution that will help your organization to
                    minimize risk and maximize returns. We help our clients with
                    proper financial planning decisions and investment options.
                  </p>
                  <p>
                    We believe in building relationships, not just business. We
                    aim to build a strong trust with our clients. We also
                    provide various services to Startups and new companies and
                    help them to flourish in markets. So, what are you waiting
                    for? Just call or text us and here we are to help you with
                    your issues. Let us make it TODAY because TOMORROW never
                    comes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*<!-- End About Section Four -->*/}

      {/*<!-- Video Section -->*/}
      <section
        className="video-section"
        style={{ backgroundImage: "url(assets/images/background/9.jpg)" }}
      >
        <div className="auto-container">
          <div className="title">Video</div>
          <h2>
            We deliver 100% and <span>provide instant response</span> to help
            them succeed in constantly changing and challenging business world.
          </h2>
          <Link
            to=""
            class="theme-btn btn-style-one"
            style={{ textAlign: "center" }}
          >
            View Portfolio{" "}
          </Link>
          {/* <Link
            href="https://www.youtube.com/watch?v=Fvae8nxzVz4"
            className="play-now"
            data-fancybox="gallery"
            data-caption=""
          >
            <i className="icon flaticon-play-button" aria-hidden="true"></i>
            <span className="ripple"></span>
          </Link> */}
        </div>
      </section>
      {/*<!-- End Video Section -->*/}

      {/*<!-- Feature Section -->*/}
      {/* <section className="feature-section">
        <div className="auto-container">
          <div className="sec-title">
            <div className="clearfix">
              <div className="pull-left">
                <div className="title">Why choose us</div>
                <h2>
                  There are many companies <br /> but why <span>choose us</span>
                </h2>
              </div>
              <div className="pull-right">
                <div className="text">
                  The argument in favor of using filler text goes something like
                  this: If you use real content in the design process, anytime
                  you reach a review point you’ll end up reviewing and
                  negotiating the content itself and not the design.
                </div>
              </div>
            </div>
          </div>

          <div className="feature-tabs tabs-box style-two">
            <div className="row clearfix">
              <div className="col-lg-5 col-md-12 col-sm-12">
                <ul className="tab-btns tab-buttons clearfix">
                  <li data-tab="#feature-expert" className="tab-btn">
                    Expert team{" "}
                    <span>
                      The argument in favorite of using filler to text goes some
                      thing like this top
                    </span>
                  </li>
                  <li data-tab="#feature-brand" className="tab-btn active-btn">
                    Best Finance Brand{" "}
                    <span>
                      The argument in favorite of using filler to text goes some
                      thing like this top
                    </span>
                  </li>
                  <li data-tab="#feature-ideas" className="tab-btn">
                    Best Leadership Ideas
                    <span>
                      The argument in favorite of using filler to text goes some
                      thing like this top
                    </span>
                  </li>
                </ul>
              </div>
              <div className="col-lg-7 col-md-12 col-sm-12">
                
                <div className="tabs-content">
                
                  <div className="tab" id="feature-expert">
                    <div className="content">
                      <div className="image">
                        <img src="assets/images/resource/feature.jpg" alt="" />
                      </div>
                    </div>
                  </div>

                  
                  <div className="tab active-tab" id="feature-brand">
                    <div className="content">
                      <div className="image">
                        <img
                          src="assets/images/resource/feature-1.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>

                  
                  <div className="tab" id="feature-ideas">
                    <div className="content">
                      <div className="image">
                        <img
                          src="assets/images/resource/feature-2.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/*<!-- End Feature Section -->*/}

      <MapInfo pageName="About" />
      <Footer2 />
    </div>
  );
}

export default AboutUs;
