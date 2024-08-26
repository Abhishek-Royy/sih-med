import React from "react";
import Slider from "react-slick";

import opd1 from "/opd-1.jpg";
import opd4 from "/opd4.webp";
import opd3 from "/opd3.jpg";
import opd2 from "/opd2.jpeg";

function OpdSlider() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <>
      <div className="slider-container bg-red-500 w-full h-[40vh]">
        <Slider {...settings}>
          <div className="w-full h-full">
            <img src={opd1} alt="" />
          </div>
          <div>
            <img src={opd2} alt="" />
          </div>
          <div>
            <img src={opd3} alt="" />
          </div>
          <div>
            <img src={opd4} alt="" />
          </div>
        </Slider>
      </div>
    </>
  );
}

export default OpdSlider;
