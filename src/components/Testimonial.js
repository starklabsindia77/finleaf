import React from "react";
import Carousel from "react-bootstrap/Carousel";

function Testimonial() {
  return (
    <section className="testimonial-section-three">
      <div className="auto-container">
        {/* <!-- Sec Title Two --> */}
        <div className="sec-title-two centered">
          <div className="title">Testimonial</div>
          <h2>
            Never silence your testimony.{" "}
            <span> It's meant for someone else; not you.</span>
          </h2>
        </div>

        <Carousel two-item-carousel fade>
          <Carousel.Item>
            <div className="testimonial-block-four">
              <div className="inner-box">
                <div className="quote-icon flaticon-double-quotes"></div>
                <div className="image-outer">
                  <div className="image">
                    <img src="assets/images/resource/author-6.jpg" alt="" />
                  </div>
                </div>
                <div className="text">
                  The argument in favor of using filler text goes something like
                  this: If you use real content in the design process, anytime
                  reach a review point you’ll end up reviewing and negotiating.
                </div>
                <h5>Amber Lee</h5>
                <div className="designation">Co-founder</div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="testimonial-block-four">
              <div className="inner-box">
                <div className="quote-icon flaticon-double-quotes"></div>
                <div className="image-outer">
                  <div className="image">
                    <img src="assets/images/resource/author-7.jpg" alt="" />
                  </div>
                </div>
                <div className="text">
                  The argument in favor of using filler text goes something like
                  this: If you use real content in the design process, anytime
                  reach a review point you’ll end up reviewing and negotiating.
                </div>
                <h5>Watson Fitter</h5>
                <div className="designation">Co-founder</div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="testimonial-block-four">
              <div className="inner-box">
                <div className="quote-icon flaticon-double-quotes"></div>
                <div className="image-outer">
                  <div className="image">
                    <img src="assets/images/resource/author-6.jpg" alt="" />
                  </div>
                </div>
                <div className="text">
                  The argument in favor of using filler text goes something like
                  this: If you use real content in the design process, anytime
                  reach a review point you’ll end up reviewing and negotiating.
                </div>
                <h5>Micheal Bush</h5>
                <div className="designation">Co-founder</div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="testimonial-block-four">
              <div className="inner-box">
                <div className="quote-icon flaticon-double-quotes"></div>
                <div className="image-outer">
                  <div className="image">
                    <img src="assets/images/resource/author-7.jpg" alt="" />
                  </div>
                </div>
                <div className="text">
                  The argument in favor of using filler text goes something like
                  this: If you use real content in the design process, anytime
                  reach a review point you’ll end up reviewing and negotiating.
                </div>
                <h5>Erbil Hook</h5>
                <div className="designation">Co-founder</div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>

        {/* <div className="two-item-carousel owl-carousel owl-theme">
         
          <div className="testimonial-block-four">
            <div className="inner-box">
              <div className="quote-icon flaticon-double-quotes"></div>
              <div className="image-outer">
                <div className="image">
                  <img src="assets/images/resource/author-6.jpg" alt="" />
                </div>
              </div>
              <div className="text">
                The argument in favor of using filler text goes something like
                this: If you use real content in the design process, anytime
                reach a review point you’ll end up reviewing and negotiating.
              </div>
              <h5>Amber Lee</h5>
              <div className="designation">Co-founder</div>
            </div>
          </div>

          
          <div className="testimonial-block-four">
            <div className="inner-box">
              <div className="quote-icon flaticon-double-quotes"></div>
              <div className="image-outer">
                <div className="image">
                  <img src="assets/images/resource/author-7.jpg" alt="" />
                </div>
              </div>
              <div className="text">
                The argument in favor of using filler text goes something like
                this: If you use real content in the design process, anytime
                reach a review point you’ll end up reviewing and negotiating.
              </div>
              <h5>Watson Fitter</h5>
              <div className="designation">Co-founder</div>
            </div>
          </div>

         
          <div className="testimonial-block-four">
            <div className="inner-box">
              <div className="quote-icon flaticon-double-quotes"></div>
              <div className="image-outer">
                <div className="image">
                  <img src="assets/images/resource/author-6.jpg" alt="" />
                </div>
              </div>
              <div className="text">
                The argument in favor of using filler text goes something like
                this: If you use real content in the design process, anytime
                reach a review point you’ll end up reviewing and negotiating.
              </div>
              <h5>Micheal Bush</h5>
              <div className="designation">Co-founder</div>
            </div>
          </div>

          
          <div className="testimonial-block-four">
            <div className="inner-box">
              <div className="quote-icon flaticon-double-quotes"></div>
              <div className="image-outer">
                <div className="image">
                  <img src="assets/images/resource/author-7.jpg" alt="" />
                </div>
              </div>
              <div className="text">
                The argument in favor of using filler text goes something like
                this: If you use real content in the design process, anytime
                reach a review point you’ll end up reviewing and negotiating.
              </div>
              <h5>Erbil Hook</h5>
              <div className="designation">Co-founder</div>
            </div>
          </div>

          
          <div className="testimonial-block-four">
            <div className="inner-box">
              <div className="quote-icon flaticon-double-quotes"></div>
              <div className="image-outer">
                <div className="image">
                  <img src="assets/images/resource/author-6.jpg" alt="" />
                </div>
              </div>
              <div className="text">
                The argument in favor of using filler text goes something like
                this: If you use real content in the design process, anytime
                reach a review point you’ll end up reviewing and negotiating.
              </div>
              <h5>Alex Anderson</h5>
              <div className="designation">Co-founder</div>
            </div>
          </div>

          
          <div className="testimonial-block-four">
            <div className="inner-box">
              <div className="quote-icon flaticon-double-quotes"></div>
              <div className="image-outer">
                <div className="image">
                  <img src="assets/images/resource/author-7.jpg" alt="" />
                </div>
              </div>
              <div className="text">
                The argument in favor of using filler text goes something like
                this: If you use real content in the design process, anytime
                reach a review point you’ll end up reviewing and negotiating.
              </div>
              <h5>Micheal George</h5>
              <div className="designation">Co-founder</div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default Testimonial;
