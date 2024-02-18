import React from "react";
import Banner from "../../assets/Hero/contactusheroblock.jpg";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Contactushero = () => {
  return (
    <div
      className="mb-20 bg-gray-100 text-black "
      style={BannerImg}
    >
      <div className="container backdrop-blur-sm py-10">
        <div className="space-y-6  mx-auto">

          <h1 className="text-xl mt-20 !text-center text-white sm:text-left sm:text-4xl font-bold">
            CONTACT US
          </h1>

        </div>
      </div>
    </div>
  );
};

export default Contactushero;

  