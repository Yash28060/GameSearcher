import React, { useEffect } from "react";

function Banner({ gameBanner }) {
  

  return (
    <>
      <div className="relative">
        <div className="absolute p-5 bottom-0 bg-gradient-to-t from-slate-900 to-transparent w-full">
          <h2 className=" text-[24px] text-white font-bold">
            {gameBanner.name}
          </h2>
          <button className=" bg-blue-700 text-white px-2 p-1 rounded-xl hover:scale-95 ">
            Get Now
          </button>
        </div>
        <img
          src={gameBanner.background_image}
          className="md:h-[320px] w-full object-center  rounded-xl "
        />
      </div>
    </>
  );
}

export default Banner;
