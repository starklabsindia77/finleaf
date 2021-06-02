import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const handleDragStart = (e) => e.preventDefault();

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 4 },
};

const items = [
  <img
    src="assets/images/finleafclient/1.jpeg"
    alt=""
    style={{ height: "100px" }}
    onDragStart={handleDragStart}
  />,
  <img
    src="assets/images/finleafclient/2.jpeg"
    style={{ height: "100px", marginLeft: "100px" }}
    alt=""
    onDragStart={handleDragStart}
  />,
  <img
    src="assets/images/finleafclient/3.jpeg"
    alt=""
    style={{ height: "100px", marginLeft: "100px" }}
    onDragStart={handleDragStart}
  />,
  <img
    src="assets/images/finleafclient/4.jpeg"
    alt=""
    style={{ height: "100px", marginLeft: "100px" }}
    onDragStart={handleDragStart}
  />,
  <img
    src="assets/images/finleafclient/5.jpeg"
    alt=""
    style={{ height: "100px", marginLeft: "100px" }}
    onDragStart={handleDragStart}
  />,
  <img
    src="assets/images/finleafclient/6.jpeg"
    alt=""
    style={{ height: "100px" }}
    onDragStart={handleDragStart}
  />,
  <img
    src="assets/images/finleafclient/7.jpeg"
    alt=""
    style={{ height: "100px" }}
    onDragStart={handleDragStart}
  />,
  <img
    src="assets/images/finleafclient/8.png"
    alt=""
    style={{ height: "100px", marginLeft: "100px" }}
    onDragStart={handleDragStart}
  />,
  <img
    src="assets/images/finleafclient/9.png"
    alt=""
    style={{ height: "100px" }}
    onDragStart={handleDragStart}
  />,
  <img
    src="assets/images/finleafclient/10.png"
    alt=""
    style={{ height: "100px" }}
    onDragStart={handleDragStart}
  />,
  <img
    src="assets/images/finleafclient/11.png"
    alt=""
    style={{ height: "100px" }}
    onDragStart={handleDragStart}
  />,
  <img
    src="assets/images/finleafclient/12.png"
    alt=""
    style={{ height: "100px" }}
    onDragStart={handleDragStart}
  />,
  <img
    src="assets/images/finleafclient/13.jpg"
    alt=""
    style={{ height: "100px", marginLeft: "100px" }}
    onDragStart={handleDragStart}
  />,
  <img
    src="assets/images/finleafclient/14.png"
    alt=""
    style={{ height: "100px" }}
    onDragStart={handleDragStart}
  />,
  <img
    src="assets/images/finleafclient/15.png"
    alt=""
    style={{ height: "100px" }}
    onDragStart={handleDragStart}
  />,
  <img
    src="assets/images/finleafclient/16.png"
    alt=""
    style={{ height: "100px", marginLeft: "100px" }}
    onDragStart={handleDragStart}
  />,
];

function ClientBrandSection() {
  return (
    <section className="sponsors-section">
      <div className="auto-container">
        <div className="carousel-outer">
          {/* <!--Sponsors Slider--> */}
          {/* <ul className="sponsors-carousel owl-carousel owl-theme"></ul> */}
          <AliceCarousel
            mouseTracking
            items={items}
            responsive={responsive}
            controlsStrategy="alternate"
          />
        </div>
      </div>
    </section>
  );
}

export default ClientBrandSection;
