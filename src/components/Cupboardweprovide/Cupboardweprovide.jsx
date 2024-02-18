import React, { useState } from 'react';
import Img1 from "../../assets/Hero/slidingcup.jpg";
import Img2 from "../../assets/Hero/hingecup.jpg";
import Img3 from "../../assets/Hero/Mezzcup.jpg";
import Img4 from "../../assets/Hero/walkcup.jpg";
import Img5 from "../../assets/Hero/lshapecup.jpg";
import Img6 from "../../assets/Hero/slopedcup.jpg";
import Img7 from "../../assets/Hero/freestandcup.jpg";
import Img8 from "../../assets/Hero/wallmountcup.jpg";
import Img9 from "../../assets/Hero/bedloft.jpg";

const ModularkitchenweprovideData = [
  {
    id: 1,
    img: Img1,
    name: "Sliding Door Wardrobe",
    text: "Adopt a sleek and contemporary style with our Sliding Door Wardrobe designs. These wardrobes boast sliding doors that glide effortlessly along tracks, optimizing space and providing a modern aesthetic to your room.",
  },
  {
    id: 2,
    name: "Hinge Door Wardrobe",
    text: "Indulge in a classic and timeless design with our Hinge Door Wardrobes. These wardrobes showcase hinged doors that open outward, offering convenient access to your belongings while infusing an elegant touch into your room.",
    img: Img2,
  },
  {
    id: 3,
    name: "Wardrobe with a Mezzanine Loft",
    text: "Enhance your storage solutions with our innovative Wardrobe with Mezzanine Loft designs. These intelligent creations seamlessly integrate wardrobe space with a lofted storage area, delivering additional storage without compromising valuable floor space.",
    img: Img3,
  },
  {
    id: 4,
    name: "Walk-in Wardrobe",
    text: "Luxuriate in opulence and organization with our Walk-in Wardrobe designs. These spacious and customizable wardrobes offer a dedicated dressing area, ample storage, and an elevated sense of luxury in your home.",
    img: Img4,
  },
  {
    id: 5,
    name: "L Shaped Wardrobe",
    text: "Optimize corner spaces with our L-shaped wardrobe designs. Seamlessly fitting into room corners, these wardrobes provide generous storage capacity while optimizing the overall layout for a functional and stylish solution.",
    img: Img5,
  },
  {
    id: 6,
    name: "Sloped Wardrobe",
    text: "Embrace distinctive architectural elements with our Sloped Wardrobe designs. These wardrobes feature sloped ceilings or walls, adding a unique touch to your space while offering ample storage for your belongings.",
    img: Img6,
  },
  {
    id: 7,
    img: Img7,
    name: "Freestanding Wardrobes",
    text: "Craft a versatile storage solution with our Freestanding Wardrobes. Available in various styles and sizes, these standalone wardrobes provide flexibility in placement and can be effortlessly moved or reconfigured to suit your needs.",
  },
  {
    id: 8,
    name: "Wall Mounted Wardrobes",
    text: "Maximize your room layout efficiency with our wall-mounted wardrobes. These sleek and space-saving designs attach directly to the wall, offering ample storage without occupying valuable floor space.",
    img: Img8,
  },
  {
    id: 9,
    name: "Wardrobes with Bed Lofts",
    text: "Achieve optimal space efficiency and functionality with our Wardrobes with Bed Lofts. These innovative designs seamlessly integrate wardrobe storage with a lofted bed, presenting a practical and stylish solution for compact living spaces.",
    img: Img9,
  },
];

const Cupboardweprovide = ({handleOrderPopup}) => {

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

export default Cupboardweprovide;
