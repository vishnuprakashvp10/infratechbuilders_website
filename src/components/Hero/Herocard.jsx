import React, { useState } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import OrderPopup from "../../Popup";

const ProductsData = [
  {
    id: 1,
    title: "Construction",
    text1: "Private home ",
    text2: "Duplex home ",
    text3: "Residential building",
    text4: "Commercial Building",
    text5: "Fencing",
    link: "/construction",
  },
  {
    id: 2,
    title: "Interior Designing",
    text1: "Country house design",
    text2: "Dining room",
    text3: "Modern kitchen",
    text4: "Contemporary home interior",
    text5: "Modern mansion ",
    link: "/overview-home-interiors",
  },
  {
    id: 3,
    title: "Turf Construction",
    text1: "Multi-sport turf construction ",
    text2: "Cricket turf construction",
    text3: "Football turf ",
    text4: "Badminton turf",
    text5: "Volleyball turf",
    link: "/multi-turf-construction",
  },
  {
    id: 4,
    title: "Renovation Services",
    text1: "House Remodeling",
    text2: "Leakage Repair",
    text3: "Wall dampness treatment",
    text4: "Ceiling/Roof leakage fix",
    text5: "Wet wall treatment",
    link: "/renovation-services",
  },
  {
    id: 5,
    title: "Painting services",
    text1: "Exterior house painting",
    text2: "Interior painting",
    text3: "Wall painting",
    text4: "Furniture painting",
    text5: "Residential house painting",
    link: "/painting-services",
  },
];

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="h-3 w-3"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  );
}

const Herocard = () => {
  const [showOrderPopup, setShowOrderPopup] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleOrderPopup = () => {
    setShowOrderPopup(true);
  };

  const handleCardClick = (productId) => {
    setSelectedProduct(productId);
  };

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
    centerMode: true,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
        <div className="flex items-center justify-center mb-8">
          <div className="py-4 max-w-[1200px] mx-auto">
            <h1 className="text-center text-3xl text-primary font-bold">
              INFRATECH BUILDERS
            </h1>
            <p className="text-center text-bold py-4 text-black">
              We provide a range of tailored services for infratech builders,
              interior designers, and renovators. From collaborative design
              consultations to seamless project management, our expertise
              extends to architectural design, construction, interior design,
              smart home integration, energy-efficient solutions, and more. With
              a focus on innovation and quality, we bring visions to life,
              creating spaces that inspire.
            </p>
          </div>
        </div>
      </div>
      <div className="">
        <Slider {...settings}>
          {ProductsData.map((product) => (
            <div key={product.id} className={`my-6 mx-10`}>
              <Link to={product.link}>
                <Card
                  color="gray"
                  variant="gradient"
                  className="w-full max-w-[15rem] p-8 bg-gradient-to-r from-primary to-secondary flex flex-col h-[470px]  md:w-max ml-20 sm:w-[10rem] ml-7 xl:ml-0 transition-transform duration-300 ease-in-out hover:scale-105"
                  onClick={() => handleCardClick(product.id)}
                >
                  <CardHeader
                    floated={false}
                    shadow={false}
                    color="transparent"
                    className="m-0 mb-5 rounded-none border-b border-white/10 pb-8 text-center"
                  >
                    <Typography
                      variant="h1"
                      color="white"
                      className="flex justify-center gap-1 font-normal"
                    >
                      <span className="text-2xl">{product.title}</span>
                    </Typography>
                  </CardHeader>
                  <CardBody className="p-0 flex-grow">
                    <ul className="flex flex-col gap-4">
                      {[product.text1, product.text2, product.text3, product.text4, product.text5].map((text, index) => (
                        <li key={index} className="flex items-center gap-4">
                          <span className="rounded-full border border-white/20 bg-white/20 p-1">
                            <CheckIcon />
                          </span>
                          <Typography className="font-normal text-white">{text}</Typography>
                        </li>
                      ))}
                    </ul>
                  </CardBody>
                  <CardFooter className="mt-3 p-0">
                    <Button
                      size="lg"
                      color="white"
                      className="w-full h-[40px] hover:scale-[1.02] focus:scale-[1.02] active:scale-100 text-primary py-3 px-8 rounded-full "
                      ripple={false}
                      fullWidth={true}
                      onClick={handleOrderPopup}
                    >
                      Click to View
                    </Button>
                  </CardFooter>
                </Card>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
            {/* Centered button */}
            <div className="flex justify-center mt-6">
        <button
          onClick={handleOrderPopup}
          className="bg-gradient-to-r from-primary to-secondary hover:scale-110 duration-200 text-white py-4 px-4 mt-4 md:py-6 md:px-8 rounded-full"
        >
          Call Now
        </button>
      </div>
      <OrderPopup orderPopup={showOrderPopup} setOrderPopup={setShowOrderPopup} type={"Services We Provide Card"} />
    </div>
  );
};

export default Herocard;
