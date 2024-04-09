import React from "react";
import { AiFillPhone, AiOutlineClockCircle } from "react-icons/ai";
import { BsFillAirplaneFill } from "react-icons/bs";

const TopBar = () => {
  return (
    <div id="home" className="flex justify-between items-center px-4 py-2">
      <div className="flex items-center">
        <BsFillAirplaneFill
          size={50}
          className="text-[var(--primary-dark)] mr-2"
        />
        <span className="text-2xl font-bold bg-cyan-200 py-1 px-2 rounded-lg ">
          Tropic
        </span>
        <span className="text-2xl hidden sm:inline font-bold">Trip</span>
      </div>
      <div className="flex">
        <div className="hidden md:flex items-center px-6">
          <AiOutlineClockCircle
            size={30}
            className="mr-2 text-[var(--primary-dark)]"
          />
          <p className="text-xl font-bold text-gray-700">10AM - 6AM</p>
        </div>
        <div className="hidden md:flex items-center px-6">
          <AiFillPhone size={30} className="mr-2 text-[var(--primary-dark)]" />
          <p className="text-xl text-gray-700 font-bold">955-555-7775</p>
        </div>
        <button className="text-xl">Get a Free Quote!</button>
      </div>
    </div>
  );
};

export default TopBar;
