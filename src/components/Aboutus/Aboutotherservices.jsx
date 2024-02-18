import React from "react";
import Img1 from "../../assets/Hero/conshero.jpg";
import Img2 from "../../assets/Hero/renovheronew.jpg";
import Img3 from "../../assets/Hero/paintingnewhero.jpg";
import Img4 from "../../assets/Hero/turfhero.jpg";
import Img5 from "../../assets/Hero/homeinthero.jpg";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Construction",
    description: "Embark on the journey of building your dream home.",
    link: "/construction",
  },
  {
    id: 2,
    img: Img5,
    title: "Home Interior",
    description: "We excel in designing interiors for your homes.",
    link: "/overview-home-interiors",
  },
  {
    id: 3,
    img: Img2,
    title: "Renovation Services",
    description: "Elevate your living spaces with our skilled experts.",
    link: "/renovation-services",
  },
  {
    id: 4,
    img: Img3,
    title: "Painting Services",
    description: "Your go-to choice for top-notch painting services.",
    link: "/painting-services",
  },
  {
    id: 5,
    img: Img4,
    title: "Turf Construction",
    description: "Transforming the Landscape of Athletic Facilities.",
    link: "/multi-turf-construction",
  },
];

const Aboutotherservices = ({handleOrderPopup}) => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/* header section */}
        <div className="text-center py-4 mx-auto">
          <h1 className="text-3xl text-primary font-bold">
            Time to ditch the "Someday" house and design your "Right Now" haven. Let's go!
          </h1>
          <p className="text-bold py-2 text-black">
            From breathtaking designs to flawless construction and artistic finishes, we're your one-stop shop for home transformation.
          </p>
          <p className="font-bold text-md md:text-2xl text-black">Check out our other services! </p>
        </div>

        <div>
          <Slider {...settings}>
            {ProductsData.map((data) => (
              <div key={data.id} className="my-6">
                <Link to={data.link} className="card-link">
                  <div className="flex flex-col gap-4 shadow-md transition-all duration-500 hover:scale-105 bg-primary/50 py-8 px-6 mx-4 rounded-xl relative">
                    <div className="mb-4">
                      <img
                        src={data.img}
                        alt=""
                        className="md:h-[220px] md:w-[300px] w-[350px] object-cover rounded-md"
                      />
                    </div>
                    <div className="flex flex-col items-center gap-4">
                      <div className="space-y-3">
                        <h1 className="text-xl text-center font-bold text-black/80">
                          {data.title}
                        </h1>
                        <p className="text-xs text-center text-black">{data.description}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </Slider>
        </div>

        {/* Centered "Call Now" button */}
        <div className="flex justify-center">
          <button
            onClick={handleOrderPopup}
            className="bg-gradient-to-r  from-primary to-secondary hover:scale-110 duration-200 text-white py-2 px-4 md:py-4 md:px-6 rounded-full mt-8"
          >
            Call Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Aboutotherservices;
