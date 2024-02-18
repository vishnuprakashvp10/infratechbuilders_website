import React from "react";
import Img1 from "../../assets/Hero/lshape.jpg";
import Img2 from "../../assets/Hero/linear.jpg";
import Img3 from "../../assets/Hero/ushape.jpg";
import Img4 from "../../assets/Hero/para.jpg";
import Img5 from "../../assets/Hero/island.jpg";
import Img6 from "../../assets/Hero/gshape.jpg";

const ModularkitchenweprovideData = [
  {
    id: 1,
    img: Img1,
    name: "L-Shaped Modular Kitchen",
    text: "Our expertise lies in crafting L-shaped modular kitchens, utilizing adjoining walls to provide extensive countertop space and storage solutions. Through our interior design services, we achieve a seamless and efficient kitchen layout, striking the perfect balance between functionality and aesthetics to cater to your culinary needs.",
  },
  {
    id: 2,
    name: "Linear or Straight Modular Kitchen",
    text: "Our interior design services for straight modular kitchens are customized to enhance space and efficiency within a linear layout. We meticulously craft a streamlined and organized kitchen design, seamlessly integrating storage, appliances, and work surfaces for a sleek and practical cooking area.",
    img: Img2,
  },
  {
    id: 3,
    name: "U-Shaped Modular Kitchen",
    text: "Crafting U-shaped modular kitchens, our designs prioritize functionality and ergonomics. With countertops and cabinets along three sides, our interior design services optimize storage, workspace, and traffic flow, resulting in a well-organized and efficient kitchen tailored to your needs.",
    img: Img3,
  },
  {
    id: 4,
    name: "Parallel or Galley-Shaped Modular Kitchen",
    text: "Discover unparalleled efficiency with our Parallel or Galley-Shaped Modular Kitchen designs. Featuring twin countertops along facing walls, our interiors seamlessly blend style and functionality. Meticulously crafted for compact spaces, we optimize storage and create a streamlined workflow, transforming your kitchen into a stylish and practical culinary haven.",
    img: Img4,
  },
  {
    id: 5,
    name: "Island Modular Kitchen",
    text: "Embark on a culinary journey with our Island Modular Kitchen Interior Design. This innovative layout introduces a central island, elevating both style and functionality. Our designs prioritize spaciousness, providing a hub for cooking, dining, and socializing. Immerse yourself in a kitchen experience that seamlessly combines aesthetic appeal and practicality.",
    img: Img5,
  },
  {
    id: 6,
    name: "G-Shaped or Peninsula Modular Kitchen",
    text: "Experience culinary luxury with our G-Shaped or Peninsula Modular Kitchen designs. The layout, featuring an extended countertop or peninsula, enhances both functionality and aesthetics. Our interiors prioritize seamless workflow, ample storage, and a sophisticated design, creating a kitchen space that marries style with practicality for an elevated cooking experience.",
    img: Img6,
  },
];

const Modularkitchenweprovide = ({ handleOrderPopup }) => {
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

export default Modularkitchenweprovide;
