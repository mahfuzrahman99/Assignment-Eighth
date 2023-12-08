/* eslint-disable react/prop-types */
// import { useEffect, useRef, useState } from "react";
// import Cards from "../cards/Cards";


const Banner = ({handleSearch}) => {

  return (
    <>
      <div className="relative h-[50vh] md:h-[50vh] lg:h-[60vh]">
        <div className="absolute inset-0 text-black text-center mt-5 md:mt-10 space-y-4 p-8">
          <h1 className="text-xl md:text-4xl font-bold">I Grow By Helping People In Need</h1>
          <div className="md:flex justify-center">
          <div className="  btn-group">
          <input id="search-value"  type="text" placeholder="Search Here...." className="pl-3 text-sm md:text-base md:pl-7 rounded-tl-lg rounded-bl-lg  w-44 md:w-96" />
          <button onClick={handleSearch} className="md:bg-red-500 bg-red-500 md:btn btn-sm md:rounded-none rounded-tr-md rounded-br-md ">Search</button>
          </div>
          </div>
        </div>
    </div>
    </>
  );
};

export default Banner;
