import React, { useState } from "react";
import Slider from 'react-slick';
import { Link } from "react-router-dom";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Img1 from "../../assets/Hero/modularhero.jpg";
import Img2 from "../../assets/Hero/livhero.jpg";
import Img3 from "../../assets/Hero/falsehero.jpg";
import Img4 from "../../assets/Hero/cupboardhero.jpg";
import Img5 from "../../assets/Hero/dininghero.jpg";
import Img6 from "../../assets/Hero/toilethero.jpg";
import Img7 from "../../assets/Hero/tvhero.jpg";
import Img8 from "../../assets/Hero/studyhero.jpg";
import Img9 from "../../assets/Hero/poojahero.jpg";
import Img10 from "../../assets/Hero/bedhero.jpg";
import OrderPopup from "../../Popup";


const Exploredesignscard = [
  {
    id: 1,
    img: Img1,
    name: "Modular Kitchen",
    text: "Elevate your kitchen with modular interior design, incorporating creative ideas for small apartments.",
    link: "/modular-kitchen",
  },
  {
    id: 2,
    img: Img2,
    name: "Living Room Hall",
    text: "We specialize in designing spaces that seamlessly  blend style and comfort, from minimalist to eclectic.",
    link: "/living-room-hall",
  },
  {
    id: 3,
    img: Img3,
    name: "False ceiling",
    text: "Transform your interior into a stylish haven, adding a touch of sophistication and charm to your living areas.",
    link: "/false-ceiling",
  },
  {
    id: 4,
    img: Img4,
    name: "Cupboards/Wardrobes",
    text: "Our catalog inspires functional and stylish wardrobe interior designs, perfect for loft spaces.",
    link: "/cupboard-Wardrobes",
  },
  {
    id: 5,
    img: Img5,
    name: "Dining room",
    text: "Discover imaginative dining room wall decor ideas that elegantly redefine style within your home.",
    link: "/dining-room",
  },
  {
    id: 6,
    img: Img6,
    name: "Toilet/Bathroom",
    text: "Our designs seamlessly integrate stylish bathroom decorations that  blends luxury and utility.",
    link: "/toilet-bathroom",
  },
  {
    id: 7,
    img: Img7,
    name: "TV Show Case",
    text: " Explore interior design websites for inspiration on creating an elegant and functional centerpiece in your living space.",
    link: "/tv-show-case",
  },
  {
    id: 8,
    img: Img8,
    name: "Study Room",
    text: "Transform your study space with our specialized interior design. We create a conducive and stylish environment.",
    link: "/study-room",
  },
  {
    id: 9,
    img: Img9,
    name: "Pooja Room",
    text: "Minimalist elegance for spaces, including Pooja rooms, reflect your unique style with sophistication.",
    link: "/pooja-room",
  },
  {
    id: 10,
    img: Img10,
    name: "Bedroom",
    text: "Elevate your bedrooms with imaginative decor concepts, inspiring ideas for bunk bed decoration.",
    link: "/bed-room",
  },
];

const Exploredesigns = () => {
  const [showOrderPopup, setShowOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setShowOrderPopup(!showOrderPopup);
  };
  
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 200,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
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
          slidesToShow: 3,
          slidesToScroll: 3,
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
        <div className="flex items-center justify-center mb-8 ">
          <div className="text-center w-[1200px] ">
            <h1 className="text-3xl text-primary font-bold">
              Explore Designs By Room
            </h1>
            <p className="text-bold py-4 text-black">
              Explore meticulously curated designs for Chennai homes, tailored to each room with unique style. From inviting bedrooms to efficient kitchens and chic living spaces, discover inspirations that suit every preference and lifestyle. Elevate your abode with our collections, seamlessly blending style and practicality for a personalized ambiance reflecting the rhythm of your life.
            </p>
          </div>
        </div>
        <div>
          <Slider {...settings}>
            {Exploredesignscard.map((data) => (
              <div key={data.id} className={`my-6`}>
                <Link to={data.link} className="card-link">
                  <div className={`flex flex-col transition-all shadow-md hover:scale-105 gap-4 pb-2 mx-4 bg-primary/10 relative`}>
                    <div className="mb-4">
                      <img
                        src={data.img}
                        alt=""
                        className="md:h-[200px] md:w-[300px] h-[250px]  object-cover object-center"
                      />
                    </div>
                    <div className="flex flex-col items-center gap-4">
                      <div className="space-y-3">
                        <h1 className="text-xl text-center font-bold text-black/80 dark:text-light">
                          {data.name}
                        </h1>
                        <p className="text-xs text-center text-gray-500 p-2">{data.text}</p>
                      </div>

                    </div>
                  </div>
                  
                </Link>
              </div>
            ))}
          </Slider>
          
        </div>
        
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
      <OrderPopup orderPopup={showOrderPopup} setOrderPopup={setShowOrderPopup} type={"Explore Designs"} />

    </div>
  );
};

export default Exploredesigns;
