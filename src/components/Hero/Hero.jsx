import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image1 from "../../assets/Hero/homeonefin.jpg";
import Image2 from "../../assets/Hero/herotext1.jpg";
import Image3 from "../../assets/Hero/slider-image2.jpg";
import Image4 from "../../assets/Hero/herotext2.jpg";
import Image5 from  "../../assets/Hero/paintingslider.jpg";
import Image6 from "../../assets/Hero/herotext3.jpg";
import Image7 from "../../assets/Hero/renoslider.jpg";
import Image8 from "../../assets/Hero/herotext4.jpg";
import Image9 from "../../assets/Hero/turfhomehero.jpg";
import Image10 from "../../assets/Hero/herotext5.jpg";

const ImageList = [
 {
    id: 1,
    img: Image1,
  }, 
 {
    id: 2,
    img: Image2,
  },
  
 {
    id: 3,
    img: Image3,
  }, 
  {
    id: 4,
    img: Image4,
  },
  {
    id: 5,
    img: Image5,
  },
  {
    id: 6,
    img: Image6,
  },
  {
    id: 7,
    img: Image7,
  },
  {
    id: 8,
    img: Image8,
  },
  {
    id: 9,
    img: Image9,
  },
  {
    id: 10,
    img: Image10,
  },
];  

const Hero = ({ handleOrderPopup }) => {
  const [slider, setSlider] = useState(null);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  const handlePrev = () => {
    slider.slickPrev();
  };

  const handleNext = () => {
    slider.slickNext();
  };

  return (
    <div className="relative overflow-hidden flex justify-center mb-10 items-center dark:text-white duration-200">
      <div className="h-full w-full bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z[8]"></div>
      <div className="container relative">
        <Slider ref={(s) => setSlider(s)} {...settings}>
          {ImageList.map((data) => (
            <div key={data.id}>
              <div className="flex items-center justify-center">
                <div className="mt-4 flex items-center justify-center">
                  <div className="md:h-full md:w-full h-[220px] w-[310px]">
                    <img
                      src={data.img}
                      alt=""
                      className="md:h-[600px] md:w-[1400px] h-[220px] w-[330px] object-cover object-center sm:object-contain lg:object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <button
          onClick={handlePrev}
          className="absolute left-12  top-1/2 bg-gray-300 text-black rounded-full px-2 py-1 sm:top-1/2 lg:left-20 sm:absolute lg:top-1/2"        >
          &lt;
        </button>
        <button
          onClick={handleNext}
          className="absolute right-12 lg:right-20 top-1/2 bg-gray-300 text-black rounded-full px-2 py-1 sm:top-1/2 lg:top-1/2"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Hero;