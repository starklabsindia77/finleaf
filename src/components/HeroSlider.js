import React from "react";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
function HeroSlider() {
  return (
    <div className="main-slider style-three">
      <Carousel fade>
        <Carousel.Item
          className="slide"
          style={{
            backgroundImage: "url(/assets/images/myimages/s1.png)",
            height: "800px",
            position: "relative",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right top",
          }}
        >
          <div className="auto-container">
            <div className="content alternate">
              <div className="title">We honor your opinion</div>
              <h1 className="style-two">
                An investment in knowledge <br />
                <span className="brown_color">pays the best interest.</span>
              </h1>
              {/* <div className="text alternate">
                We're the first digital wealth manager with a 6 year performance
                track record in the UK.
              </div> */}
              <div className="btn-box">
                <Link to="" className="theme-btn btn-style-nine">
                  Let’s start now{" "}
                  <span className="icon flaticon-direction"></span>
                </Link>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item
          className="slide"
          style={{
            backgroundImage: "url(/assets/images/myimages/s1.png)",
            height: "800px",
            position: "relative",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right top",
          }}
        >
          <div className="auto-container">
            <div className="content alternate">
              <div className="title">We honor your opinion</div>
              <h1 className="style-two">
                Innovation distinguishes between <br />
                <span className="brown_color">a leader and a follower</span>
              </h1>
              {/* <div className="text alternate">
                We're the first digital wealth manager with a 6 year performance
                track record in the UK.
              </div> */}
              <div className="btn-box">
                <Link to="" className="theme-btn btn-style-nine">
                  Let’s start now{" "}
                  <span className="icon flaticon-direction"></span>
                </Link>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default HeroSlider;
