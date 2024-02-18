import React from 'react';
import { RxDotFilled } from 'react-icons/rx';
import Image1 from "../../assets/Hero/conhero1.jpg";

const ImageList = [
  {
    id: 1,
    img: Image1,
  },
];

const Constructionhero = ({ handleOrderPopup }) => {
  return (
    <div className='md:max-w-[1400px] md:h-[780px] max-w-[1300px] h-[465px] w-full m-auto py-24 px-4 relative group '>
      <div
        className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'
        style={{ backgroundImage: `url(${ImageList[0].img})` }}
      >
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white w-[300px] md:w-[600px]'>
          <div className="mx-auto justify-center item-center space-x-4 absolute top-20 md:top-40 left-1/2 transform -translate-x-1/2">
            <button
              onClick={handleOrderPopup}
              className="bg-gradient-to-r  from-primary to-secondary hover:scale-110 duration-200 text-white py-2 px-4 md:py-4 md:px-6 rounded-full"
            >
              Call Now
            </button>
          </div>
        </div>
      </div>
      <div className='flex top-10 justify-center py-2'>
        {ImageList.map((slide, slideIndex) => (
          <div
            className='text-2xl cursor-pointer'
            key={slideIndex}
          >
            <RxDotFilled style={{ color: 'white' }} />
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center">
        <div className="text-center w-[900px]">
          <h1 className="text-3xl text-primary font-bold">
            OUR CONSTRUCTION SERVICES
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Constructionhero;
