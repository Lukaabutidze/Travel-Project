import React from "react";
import { BsFillAirplaneFill } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="max-w-[1140px] w-full py-8 m-auto border-t-4">
      <div className="flex items-center m-auto justify-center">
        <a href="#home">
          <BsFillAirplaneFill
            id="home"
            size={40}
            className="text-[var(--primary-dark)] mr-2 cursor-pointer"
          />
        </a>
        <a href="#home">
          <h1 className="text-4xl font-bold text-gray-700 cursor-pointer">
            TropicTrip
          </h1>
        </a>
      </div>
    </div>
  );
};

export default Footer;
