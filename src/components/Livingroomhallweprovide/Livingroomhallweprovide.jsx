import React, { useState } from 'react';
import Img1 from "../../assets/Hero/livingfalse.jpg";
import Img2 from "../../assets/Hero/tvunit.jpg";
import Img3 from "../../assets/Hero/modernstyle.jpg";
import Img4 from "../../assets/Hero/minimal.jpg";
import Img5 from "../../assets/Hero/contem.jpg";
import Img6 from "../../assets/Hero/Eclectic.jpg";
import Img7 from "../../assets/Hero/traditional.jpg";
import Img8 from "../../assets/Hero/vintage.jpg";
import Img9 from "../../assets/Hero/retro.jpg";
import Img10 from "../../assets/Hero/rustic.jpg";
import Img11 from "../../assets/Hero/classic.jpg";
import Img12 from "../../assets/Hero/countrydream.jpg";

const LivingroomhallweprovideData = [
  {
    id: 1,
    img: Img1,
    name: "Living Room False Ceiling",
    text: "Imagine cascading cove lighting bathing your room in a warm glow, geometric shapes adding drama, or hidden compartments revealing playful surprises. False ceilings transform ordinary spaces into captivating havens, enhancing acoustics, concealing distractions, and boosting visual appeal.",
  },
  {
    id: 2,
    name: "TV Showcase Entertainment Units",
    text: "Ditch the bulky stand!  Transform your living room into a modern marvel with our bespoke TV showcase units. These aren't just cabinets, they're sculpted centerpieces that seamlessly blend function and form (think sleek lines and hidden cable magic ). Your media gets a stylish stage, while your space gains instant sophistication.",
    img: Img2,
  },
  {
    id: 3,
    name: "Modern Style Living Rooms",
    text: "Crave a living room that's as sharp as your style. We craft modern havens with sleek lines, bold pops, and lighting that sets the mood. Ditch the ordinary, embrace the chic, the streamlined, the utterly now. Let Infratech Builders design your modern masterpiece.",
    img: Img3,
  },
  {
    id: 4,
    name: "Minimalist Aesthetic Living Rooms",
    text: "Less is more meets modern marvel. We craft calm sanctuaries with sleek lines, hushed tones, and light that dance in. Ditch the clutter, embrace the clean, the functional, the utterly serene—Infratech Builders: designing your minimalist masterpiece. ",
    img: Img4,
  },
  {
    id: 5,
    name: "Contemporary Style Living Rooms",
    text: "Explore our interior design services for contemporary living rooms, highlighting clean lines, minimalism, and a chic aesthetic. Our team integrates modern furniture, neutral color palettes, and innovative design elements to craft a sophisticated, stylish living space that embraces current trends.s",
    img: Img5,
  },
  {
    id: 6,
    name: "Eclectic Living Rooms",
    text: "Celebrate individuality and creative expression with our interior design services for eclectic living rooms. Our expertise lies in artfully mixing various styles, patterns, and colors, creating a vibrant and visually captivating living space that reflects your unique personality and tastes.",
    img: Img6,
  },
  {
    id: 7,
    img: Img7,
    name: "Traditional Living Room Sanctuary",
    text: "Specializing in traditional-style living rooms, we honor classic design principles. Our interior design services meticulously craft a harmonious balance between timeless furniture, rich colors, and intricate detailing, resulting in an elegant and welcoming atmosphere within your living space.",
  },
  {
    id: 8,
    name: "Vintage Living Room",
    text: "Embracing the charm and character of bygone eras, our interior design services for vintage-style living rooms curate antique and vintage furniture pieces. We incorporate vintage-inspired decor and employ soft, muted color palettes to create a romantic and timeless ambiance in your living area.",
    img: Img8,
  },
  {
    id: 9,
    name: "Dream Retro Living Room",
    text: "Explore our interior design services for retro-style living rooms, celebrating the bold and vibrant designs of the past. Our team skillfully blends vintage furniture, funky patterns, and pops of bright colors to create a playful and nostalgic atmosphere in your living space.",
    img: Img9,
  },
  {
    id: 10,
    name: "Rustic Living Room Retreat",
    text: "Discover the beauty of natural materials and textures with our interior design services for rustic-style living rooms. We craft cozy and inviting spaces by incorporating elements like exposed wood beams, stone accents, and earthy color schemes, creating a warm and welcoming ambiance in your living area.",
    img: Img10,
  },
  {
    id: 11,
    name: "Classic Living Room",
    text: "We specialize in classic-style living rooms and excel in designing spaces that exude elegance and sophistication. Our interior design services prioritize incorporating timeless furniture pieces, refined color palettes, and intricate details to create a luxurious and refined atmosphere in your living space.",
    img: Img11,
  },
  {
    id: 12,
    name: "Dream Country Living Room",
    text: "Experience the warmth and charm of country-style living rooms with our interior design services. We craft inviting spaces that embrace rustic charm and natural elements, incorporating cozy furniture, earthy colors, and traditional patterns to evoke a sense of comfort and relaxation in your living area.",
    img: Img12,
  },
];

const Livingroomhallweprovide = ({ handleOrderPopup }) => {
  return (
    <div className="py-14 mb-10">
      <div className="container">

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 md:gap-5 place-items-center">
          {LivingroomhallweprovideData.map((service, index) => (
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

export default Livingroomhallweprovide;  
