import React from "react";
import { Link } from "react-router-dom";

function Footer2() {
  return (
    <footer className="main-footer">
      <div className="auto-container">
        {/*<!--Widgets Section-->*/}
        <div className="widgets-section">
          <div className="row clearfix">
            {/*<!--Column-->*/}
            <div className="big-column col-lg-6 col-md-12 col-sm-12">
              <div className="row clearfix">
                {/*<!--Footer Column-->*/}
                <div className="footer-column col-lg-7 col-md-6 col-sm-12">
                  <div className="footer-widget logo-widget">
                    <div className="logo">
                      <Link href="/">
                        <img
                          src="/assets/images/myimages/finleaf_logo.png"
                          alt=""
                          style={{ height: "100px", marginLeft: "-15px" }}
                        />
                      </Link>
                    </div>
                    {/* <div className="text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt.
                    </div> */}
                    <ul className="list-style-two">
                      <li>
                        <span className="icon fa fa-phone"></span> +91
                        8766224590
                      </li>
                      <li>
                        <span className="icon fa fa-envelope"></span>{" "}
                        Thefinleaf@gmail.com
                      </li>
                      <li>
                        <span className="icon fa fa-home"></span>12/626, Friends
                        Society Vasundhra <br /> Ghaziabad Uttar Pradesh
                      </li>
                    </ul>
                  </div>
                </div>

                {/*<!--Footer Column-->*/}
                <div className="footer-column col-lg-5 col-md-6 col-sm-12">
                  <div className="footer-widget links-widget">
                    {/* <h4>Links</h4>
                    <ul className="list-link">
                      <li>
                        <Link href="#">Home</Link>
                      </li>
                      <li>
                        <Link href="#">Services</Link>
                      </li>
                      <li>
                        <Link href="#">About us</Link>
                      </li>
                      <li>
                        <Link href="#">Testimonials</Link>
                      </li>
                      <li>
                        <Link href="#">News</Link>
                      </li>
                      <li>
                        <Link href="#">Contact</Link>
                      </li>
                    </ul> */}
                  </div>
                </div>
              </div>
            </div>

            {/*<!--Column-->*/}
            <div className="big-column col-lg-6 col-md-12 col-sm-12">
              <div className="row clearfix">
                {/*<!--Footer Column-->*/}
                <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                  <div className="footer-widget links-widget">
                    {/* <h4>Support</h4>
                    <ul className="list-link">
                      <li>
                        <Link href="#">Contact Us</Link>
                      </li>
                      <li>
                        <Link href="#">Submit a Ticket</Link>
                      </li>
                      <li>
                        <Link href="#">Visit Knowledge Base</Link>
                      </li>
                      <li>
                        <Link href="#">Support System</Link>
                      </li>
                      <li>
                        <Link href="#">Refund Policy</Link>
                      </li>
                      <li>
                        <Link href="#">Professional Services</Link>
                      </li>
                    </ul> */}
                  </div>
                </div>

                {/*<!--Footer Column-->*/}
                <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                  <div className="footer-widget gallery-widget">
                    <h4>Gallery</h4>
                    <div className="widget-content">
                      <div className="images-outer clearfix">
                        {/*<!--Image Box-->*/}
                        <figure className="image-box">
                          <Link
                            href="assets/images/gallery/1.jpg"
                            className="lightbox-image"
                            data-fancybox="footer-gallery"
                            title="Image Title Here"
                            data-fancybox-group="footer-gallery"
                          >
                            <img
                              src="assets/images/gallery/footer-gallery-thumb-1.jpg"
                              alt=""
                            />
                          </Link>
                        </figure>
                        {/*<!--Image Box-->*/}
                        <figure className="image-box">
                          <Link
                            href="assets/images/gallery/2.jpg"
                            className="lightbox-image"
                            data-fancybox="footer-gallery"
                            title="Image Title Here"
                            data-fancybox-group="footer-gallery"
                          >
                            <img
                              src="assets/images/gallery/footer-gallery-thumb-2.jpg"
                              alt=""
                            />
                          </Link>
                        </figure>
                        {/*<!--Image Box-->*/}
                        <figure className="image-box">
                          <Link
                            href="assets/images/gallery/3.jpg"
                            className="lightbox-image"
                            data-fancybox="footer-gallery"
                            title="Image Title Here"
                            data-fancybox-group="footer-gallery"
                          >
                            <img
                              src="assets/images/gallery/footer-gallery-thumb-3.jpg"
                              alt=""
                            />
                          </Link>
                        </figure>
                        {/*<!--Image Box-->*/}
                        <figure className="image-box">
                          <Link
                            href="assets/images/gallery/4.jpg"
                            className="lightbox-image"
                            data-fancybox="footer-gallery"
                            title="Image Title Here"
                            data-fancybox-group="footer-gallery"
                          >
                            <img
                              src="assets/images/gallery/footer-gallery-thumb-4.jpg"
                              alt=""
                            />
                          </Link>
                        </figure>
                        {/*<!--Image Box-->*/}
                        <figure className="image-box">
                          <Link
                            href="assets/images/gallery/5.jpg"
                            className="lightbox-image"
                            data-fancybox="footer-gallery"
                            title="Image Title Here"
                            data-fancybox-group="footer-gallery"
                          >
                            <img
                              src="assets/images/gallery/footer-gallery-thumb-5.jpg"
                              alt=""
                            />
                          </Link>
                        </figure>
                        {/*<!--Image Box-->*/}
                        <figure className="image-box">
                          <Link
                            href="assets/images/gallery/6.jpg"
                            className="lightbox-image"
                            data-fancybox="footer-gallery"
                            title="Image Title Here"
                            data-fancybox-group="footer-gallery"
                          >
                            <img
                              src="assets/images/gallery/footer-gallery-thumb-6.jpg"
                              alt=""
                            />
                          </Link>
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*<!-- Footer Bottom -->*/}
      <div className="footer-bottom">
        <div className="auto-container">
          <div className="row clearfix">
            <div className="copyright-column col-lg-6 col-md-6 col-sm-12">
              <div className="copyright">
                2019 &copy; All rights reserved by{" "}
                <Link href="#">Starklabs</Link>
              </div>
            </div>

            <div className="social-column col-lg-6 col-md-6 col-sm-12">
              <ul>
                <li className="follow">Follow us: </li>
                <li>
                  <Link href="#">
                    <span className="fa fa-facebook-square"></span>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <span className="fa fa-twitter-square"></span>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <span className="fa fa-linkedin-square"></span>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <span className="fa fa-google-plus-square"></span>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <span className="fa fa-rss-square"></span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer2;
