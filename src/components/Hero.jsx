import React from "react";
import { GiPalmTree } from "react-icons/gi";
const Hero = () => {
  return (
    <div className="w-full h-[90vh]">
      <img
        src="https://images.unsplash.com/photo-1535262412227-85541e910204?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80"
        alt="/"
        className="w-full h-full object-cover"
      />
      <div className="max-w-[1140px] m-auto">
        <div className="absolute top-[45%] w-full md:-[50%] max-w-[750px] h-full flex flex-col text-white p-4">
          <h1 className="font-bold text-4xl">Adventure is Worthwhile</h1>
          <h2 className="text-4xl py-2 italic flex m-1 p-0">
            With <span className="text-black px-4"> TropicTrip</span>
            <GiPalmTree size={37} className="text-black" />
          </h2>

          <p className="text-2xl italic text-justify text-black">
            Welcome to our tourism agency! We are excited to offer you a wide
            range of travel packages that will cater to all your travel needs.
            Our goal is to provide you with a hassle-free and memorable travel
            experience that will leave you feeling rejuvenated and refreshed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
