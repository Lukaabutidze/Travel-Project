import React from "react";

const Booking = () => {
  return (
    <div id="deals" className="max-w-[1150px] m-auto w-full p-4">
      <form className="lg:flex lg:justifiy-between w-full items-center">
        <div className="flex flex-col my-2 py-2">
          <label className="font-bold">Destinations</label>
          <select className="lg:w-[750px] md:w-full border rounded-md p-2 cursor-pointer ">
            <optgroup label="Destinations">
              <option>Grande Antigua</option>
              <option>Key West</option>
              <option>Maldives</option>
              <option>Cozumel</option>
              <option>Tulum</option>
              <option>Bora Bora</option>
              <option>Barbados</option>
              <option>Aruba</option>
            </optgroup>
          </select>
        </div>
        <div className="flex w-full">
          <div className="flex flex-col w-full lg:max-w-[250px] my-2 p-2">
            <label className="font-bold">Check-In</label>
            <input className="border rounded-md p-2" type="date" />
          </div>
          <div className="flex flex-col w-full lg:max-w-[250px] my-2 p-2">
            <label className="font-bold">Check-Out</label>
            <input className="border rounded-md p-2" type="date" />
          </div>
        </div>
        <div className="flex flex-col my-2 p-2 w-full">
          <label className="font-bold">Search</label>
          <button className="w-full font-bold">Rates & Availabilities</button>
        </div>
      </form>
    </div>
  );
};

export default Booking;
