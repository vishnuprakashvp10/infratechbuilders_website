import React, { useState } from 'react';

const Poojaroomweprovide = ({ reverse, img, title, description, handleOrderPopup }) => {
  return (
    <section>
      <main className="text-white">
        <section className="container flex flex-col items-center justify-center py-10 md:h-[500px] ">
          <div className="grid grid-cols-1  items-center gap-4 md:grid-cols-2">
            <div
              className={`flex flex-col items-start gap-4 text-left md:items-start md:p-8 md:text-left ${
                reverse ? "md:order-last" : ""
              } `}
            >
              <h1 className="md:text-5xl text-4xl mx-auto font-bold text-black">{title}</h1>
              <p className="=font-bold py-4 max-w-[600px] mx-auto text-black">
                {description}
              </p>
              <div>
              </div>
              <div className="mx-auto space-x-4">
              <button
              onClick={handleOrderPopup}
              className="bg-gradient-to-r  from-primary to-secondary hover:scale-110 duration-200 text-white py-4 px-4 md:py-6  md:px-8 rounded-full "
            >
              Call Now
            </button>
              </div>
            </div>
            <div
              className={reverse ? "order-1" : ""}
            >
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

export default Poojaroomweprovide
