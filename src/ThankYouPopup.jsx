import React from "react";
import { IoCloseOutline } from "react-icons/io5";

const ThankYouPopup = ({ setShowThankYouPopup }) => {
  return (
    <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm grid md:grid-cols-2 items-center">
      <div className="flex-1 p-7 shadow-md mx-auto justify-center item-center space-x-4 absolute bottom-[280px] md:bottom-[280px] left-1/2 transform -translate-x-1/2 bg-white duration-200 w-[300px] md:w-[380px] item-center">
        <div className="flex items-center justify-center relative">
          <h1 className="text-xl text-center font-semibold text-black/70">Thank you!</h1>
          <IoCloseOutline
            className="text-2xl cursor-pointer absolute right-0 top-0"
            onClick={() => setShowThankYouPopup(false)}
          />
        </div>
        <div className="mt-2">
          <p className="text-gray-600 text-center">
            Thank you for getting in touch. We will be in contact with you at our earliest convenience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPopup;
