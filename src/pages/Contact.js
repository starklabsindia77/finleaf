import React from "react";
import Footer2 from "../components/Footer2";
import Header2 from "../components/Header2";
import PageTitle from "../components/PageTitle";
import Iframe from "react-iframe";

function Contact() {
  return (
    <div className="page-wrapper">
      <Header2 pageName="Contact" />
      <PageTitle pageName="Contact" />

      <section className="contact-page-section">
        <div className="map-section">
          <div className="map-outer">
            <Iframe
              url=""
              className="map-canvas"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14003.52594941349!2d77.364507!3d28.663267!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x65c76ef99d9c99c1!2sFinleaf%20The%20Consultants%20(Company%20Secretaries)%20CA%20CS!5e0!3m2!1sen!2sin!4v1621662666156!5m2!1sen!2sin"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              width="100%"
            ></Iframe>
          </div>
        </div>
        <div className="auto-container">
          <div className="inner-container">
            <h2>
              Get In Touch With Us,
              <br /> Or Call Us Over For <span>A Cup Of Coffee </span>
            </h2>
            <div className="row clearfix">
              <div className="info-column col-lg-7 col-md-12 col-sm-12">
                <div className="inner-column">
                  <div className="text">
                    Please contact us using the information below. For
                    additional information on our management consulting
                    services, please visit the appropriate page on our site.
                  </div>
                  <ul className="list-style-five">
                    <li>
                      <span className="icon fa fa-building"></span>
                      12/626, Friends Society
                      <br />
                      Vasundhra Ghaziabad <br />
                      Uttar Pradesh
                    </li>
                    <li>
                      <span className="icon fa fa-fax"></span>+91 8766224590 /
                      +91 8505949827
                    </li>
                    <li>
                      <span className="icon fa fa-envelope-o"></span>
                      Thefinleaf@gmail.com
                    </li>
                  </ul>
                </div>
              </div>

              <div className="form-column col-lg-5 col-md-12 col-sm-12">
                <div className="inner-column">
                  <div className="contact-form">
                    <form
                      method="post"
                      action="https://html.themexriver.com/finano/sendemail.php"
                      id="contact-form"
                    >
                      <div className="form-group">
                        <input
                          type="text"
                          name="firstname"
                          defaultValue=""
                          placeholder="Full name"
                          required
                        />
                      </div>

                      <div className="form-group">
                        <input
                          type="text"
                          name="email"
                          defaultValue=""
                          placeholder="Email"
                          required
                        />
                      </div>

                      <div className="form-group">
                        <select className="custom-select-box">
                          <option>Select topic</option>
                          <option>Topic One</option>
                          <option>Topic Two</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <textarea
                          name="message"
                          placeholder="write.."
                        ></textarea>
                      </div>

                      <div className="form-group">
                        <button type="submit" className="theme-btn">
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="contact-info-section"
        style={{ backgroundImage: "url(assets/images/background/10.jpg)" }}
      >
        <div className="auto-container">
          <div className="row clearfix">
            <div className="column col-lg-4 col-md-6 col-sm-12">
              {/* <h4>United Kingdom</h4>
              <ul className="list-style-six">
                <li>
                  <span className="icon flaticon-map-1"></span> 49488 Avenida
                  Obregon, <br /> La Quinta, CA 92253
                </li>
                <li>
                  <span className="icon flaticon-phone-receiver"></span>{" "}
                  +1-(281)-813 926 <br /> +1-(281)-813 612
                </li>
                <li>
                  <span className="icon flaticon-e-mail-envelope"></span>
                  support@finance.com.uk
                </li>
              </ul> */}
            </div>
            <div className="column col-lg-4 col-md-6 col-sm-12">
              {/* <h4>Australia</h4>
              <ul className="list-style-six">
                <li>
                  <span className="icon flaticon-map-1"></span> 13/1 Dixon
                  Street, Sydney <br /> NSW 2000
                </li>
                <li>
                  <span className="icon flaticon-phone-receiver"></span>{" "}
                  +1-(281)-813 926 <br /> +1-(281)-813 612
                </li>
                <li>
                  <span className="icon flaticon-e-mail-envelope"></span>
                  support@finance.com.uk
                </li>
              </ul> */}
            </div>
            <div className="column col-lg-4 col-md-6 col-sm-12">
              {/*  <h4>Netherlands</h4>
              <ul className="list-style-six">
                <li>
                  <span className="icon flaticon-map-1"></span> Nieuwe
                  Leliestraat 27-HS <br /> 101J Amsterdam
                </li>
                <li>
                  <span className="icon flaticon-phone-receiver"></span>{" "}
                  +1-(281)-813 926 <br /> +1-(281)-813 612
                </li>
                <li>
                  <span className="icon flaticon-e-mail-envelope"></span>
                  support@finance.com.uk
                </li>
              </ul> */}
            </div>
          </div>
        </div>
      </section>

      <Footer2 />
    </div>
  );
}

export default Contact;
