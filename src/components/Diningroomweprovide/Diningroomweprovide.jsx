import React, { useState } from 'react';
import Img1 from "../../assets/Hero/nightdin.jpg";
import Img2 from "../../assets/Hero/beachydin.jpg";
import Img3 from "../../assets/Hero/rootedin.jpg";
import Img4 from "../../assets/Hero/farmdin.jpg";
import Img5 from "../../assets/Hero/asiandin.jpg";
import Img6 from "../../assets/Hero/cottagedin.jpg";

const ModularkitchenweprovideData = [
  {
    id: 1,
    img: Img1,
    name: "Nightlife Vibe / Pub Style in Your Dining Room",
    text: "Immerse yourself in the dynamic ambiance of our Nightlife/Pub Style Dining Room designs. Infusing bold colors, contemporary furnishings, and an exhilarating atmosphere, we craft a dining space that mirrors the vibe of a trendy urban hotspot.",
  },
  {
    id: 2,
    name: "Design Your Beachy Dining Paradise",
    text: "Bring the coastal vibes into your dining area with our Beach or Coastal Style Dining Room designs. Inspired by the seaside, we incorporate breezy colors, nautical elements, and a relaxed atmosphere, creating a dining space that evokes the serenity of the beach.",
    img: Img2,
  },
  {
    id: 3,
    name: "Dining Room Rooted in Nature's Beauty",
    text: "Embrace the beauty of nature with our Natural/Rustic Style Dining Room designs. Using organic materials, earthy tones, and natural textures, we craft a dining space that exudes warmth and authenticity, perfect for enjoying meals in a relaxed and inviting setting.",
    img: Img3,
  },
  {
    id: 4,
    name: "Farmhouse Style Dining Room",
    text: "Immerse yourself in the charm of a farmhouse with our Farmhouse Style Dining Room designs. We seamlessly blend rustic elements, vintage accents, and a touch of modernity to craft a warm and welcoming atmosphere, perfect for gathering and savoring delicious meals.",
    img: Img4,
  },
  {
    id: 5,
    name: "Design an Asian-Inspired Dining Room",
    text: "Immerse yourself in the beauty and serenity of Asian culture with our Asian Style Dining Room designs. Drawing inspiration from the elegance and harmony of traditional Asian interiors, we craft a tranquil and inviting space where you can enjoy meals with family and friends.",
    img: Img5,
  },
  {
    id: 6,
    name: "Cottage Style Dining Room",
    text: "Infuse your dining area with charm and coziness through our Cottage Style Dining Room designs. By seamlessly incorporating rustic elements, soft colors, and natural textures, we transport the warmth and simplicity of a countryside cottage into your home.",
    img: Img6,
  },
];

const Diningroomweprovide = ({handleOrderPopup}) => {

  return (
    <div className="py-14 mb-10">
      <div className="container">

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 md:gap-5 place-items-center">
          {ModularkitchenweprovideData.map((service, index) => (
            <div
              key={service.id}
              className={`rounded-2xl mt-20 bg-white/100 hover:bg-primary relative shadow-xl duration-high group max-w-[300px] h-[500px] `}
            >
              <div className="h-[150px]">
                <img
                  src={service.img}
                  alt=""
                  className="max-w-[250px] block mx-auto transform -translate-y-14 group-hover:scale-105  duration-300 shadow-md"
                />
              </div>
              <div className="p-4 text-center">
                <h1 className="text-xl font-bold">{service.name}</h1>
                <p className="text-gray-500 group-hover:text-white duration-high text-sm ">
                  {service.text}
                </p>
                <button
                  className="bg-primary hover:scale-105 duration-300 text-white py-3 px-8 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                  onClick={handleOrderPopup}
                >
                  Call Us
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Diningroomweprovide;