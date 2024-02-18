// Servicesoffer.jsx
import React from "react";
import { LuPhoneCall } from "react-icons/lu";
import { Link } from "react-router-dom";

const Servicesoffer = ({ reverse, img, title, description, description2, handleOrderPopup }) => {
  return (
    <section>
      <main className="text-white">
        <section className="container flex flex-col items-center justify-center mt-8 md:mt-12 lg:mt-16">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
            <div
              className={`flex flex-col items-start gap-8 ${
                reverse ? "md:order-last" : ""
              } `}
            >
              <h1 className="md:text-5xl text-3xl mx-auto font-bold text-black mt-2">{title}</h1>
              <p className="py-4 max-w-[600px] text-black">
                {description}
                <span className="text-primary">{description2}</span>
              </p>
              <div>
              </div>
              <div className="mx-auto space-x-4">
                <button
                  onClick={() => handleOrderPopup()}
                  className="flex hover:scale-105 bg-gradient-to-r from-primary to-secondary font-bold text-white py-4 px-4 md:py-6 md:px-8 rounded-full gap-3 group md:text-sm"
                >
                  <LuPhoneCall className="text-xl font-bold text-white drop-shadow-sm cursor-pointer" />
                  <span>Call Now</span>
                </button>
              </div>
            </div>
            <div className={reverse ? "order-1" : ""}>
              <img
                src={img}
                alt="No image"
                className="md:w-[500px] md:h-[450px] h-[300px] mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"
              />
            </div>
          </div>
        </section>
      </main>
    </section>
  );
};

export default Servicesoffer;
