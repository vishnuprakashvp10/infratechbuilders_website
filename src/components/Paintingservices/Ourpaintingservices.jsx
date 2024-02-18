import React from 'react';
import Img1 from "../../assets/Hero/extpaint.png";
import Img2 from "../../assets/Hero/intpaint.png";
import Img3 from "../../assets/Hero/painting.png";
import Img4 from "../../assets/Hero/fenchpainting.png";
import Img5 from "../../assets/Hero/painting.png";
import Img6 from "../../assets/Hero/wardrobepainting.png";
import Img7 from "../../assets/Hero/electropaint.png";
import Img8 from "../../assets/Hero/repainting.png";

const Ourpaintingservices = () => {
  const contact_info = [
    {
      img: Img1,
      text: "Exterior painting",
    },
    {
      img: Img2,
      text: "Interior painting",
    },
    {
      img: Img3,
      text: "Wall painting",
    },
    {
      img: Img4,
      text: "Fence painting",
    },
    {
      img: Img5,
      text: "Door painting",
    },
    {
      img: Img6,
      text: "Wardrobe painting",
    },
    {
      img: Img7,
      text: "Electrostatic painting",
    },
    {
      img: Img8,
      text: "Repainting",
    },
  ];

  return (
    <div className="container">
      <div className="flex items-center justify-center py-12 flex-col">
        <div className="text-center w-full max-w-[1200px]">
          <h1 className="text-3xl text-primary font-bold mb-4">
            Our Painting services
          </h1>
        </div>
      </div>

      <div className="flex flex-row justify-center gap-7 flex-wrap">
        {contact_info.map((contact, i) => (
          <div key={i} className="flex flex-col items-center text-center">
            <div className="flex items-center justify-center rounded-full border-2 border-primary">
              <img
                src={contact.img}
                alt=""
                className="object-cover rounded-full w-14 h-14 md:w-20 md:h-20 object-center"
              />
            </div>
            <p className="md:text-base text-sm break-words">
              {contact.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ourpaintingservices;
