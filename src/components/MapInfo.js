import React from "react";
import Iframe from "react-iframe";

function MapInfo({ pageName }) {
  return (
    <section className="map-info-section alternate">
      <div className="outer-container">
        <div className="clearfix">
          {/* <!--Left Column--> */}
          <div className="left-column">
            {/* <!--Map Outer--> */}
            <div className="map-outer">
              {/* <!--Map Canvas--> */}
              {/* <div
                className="map-canvas"
                data-zoom="12"
                data-lat="-37.817085"
                data-lng="144.955631"
                data-type="roadmap"
                data-hue="#ffc400"
                data-title="Envato"
                data-icon-path="assets/images/icons/map-marker-1.png"
                data-content="Melbourne VIC 3000, Australia<Link to='mailto:info@youremail.com'>info@youremail.com</Link>"
              ></div> */}
              <Iframe
                url=""
                className="map-canvas"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14003.52594941349!2d77.364507!3d28.663267!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x65c76ef99d9c99c1!2sFinleaf%20The%20Consultants%20(Company%20Secretaries)%20CA%20CS!5e0!3m2!1sen!2sin!4v1621662666156!5m2!1sen!2sin"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
              ></Iframe>
            </div>
          </div>
          {/* <!--Right Column--> */}
          <div
            className="right-column"
            style={{
              backgroundImage: "url(assets/images/resource/image-1.jpg)",
            }}
          >
            <div className="content">
              <div className="title-box">
                {pageName ? (
                  <h2>
                    Request for <span style={{ color: "#3241ff" }}>quote</span>
                  </h2>
                ) : (
                  <h2>
                    Request for <span>quote</span>
                  </h2>
                )}
                {/* <h2>
                  Request for <span>quote</span>
                </h2> */}
              </div>
              <div className="text">
                The argument in favor of using filler text goes something like
                this: If you use real content in the design process.
              </div>
              <div className="consult">I would like to consult:</div>
              {/* <!-- Quote Form --> */}
              <div className="quote-form">
                {/* <!--Contact Form--> */}
                <form
                  method="post"
                  action="https://html.themexriver.com/finano/contact.html"
                >
                  <div className="row clearfix">
                    <div className="form-group col-lg-6 col-md-6 col-sm-12">
                      <input
                        type="text"
                        name="username"
                        placeholder="How to assist you:*"
                        required
                      />
                    </div>

                    <div className="form-group col-lg-6 col-md-6 col-sm-12">
                      <input
                        type="text"
                        name="phone"
                        placeholder="Phone number:*"
                        required
                      />
                    </div>

                    <div className="form-group col-lg-6 col-md-6 col-sm-12">
                      <input
                        type="text"
                        name="text"
                        placeholder="Your name:*"
                        required
                      />
                    </div>

                    <div className="form-group col-lg-6 col-md-6 col-sm-12">
                      {pageName ? (
                        <button
                          type="submit"
                          className="theme-btn btn-style-eleven"
                          style={{
                            background: "#3241ff",
                            border: "2px solid #3241ff",
                          }}
                        >
                          Submit request{" "}
                          <span
                            className="icon flaticon-share-option"
                            style={{ backgroundColor: "#3241ff" }}
                          ></span>
                        </button>
                      ) : (
                        <button
                          type="submit"
                          className="theme-btn btn-style-eleven"
                        >
                          Submit request{" "}
                          <span className="icon flaticon-share-option"></span>
                        </button>
                      )}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MapInfo;
