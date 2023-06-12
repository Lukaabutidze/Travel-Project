import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="max-w-[1140px] m-auto w-dull p-4 py-16 ">
      <h2 className="text-center text-gray-700 text-3xl">Send Us A Message</h2>
      <p className="text-center text-gray-700 py-2 text-xl">
        We are standing by!
      </p>
      <div className="grid md:grid-cols-2">
        <img
          className="w-full md:h-full object-cover p-2 max-h-[500px] h-[200px]"
          src="https://images.unsplash.com/photo-1512757776214-26d36777b513?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt="/"
        />
        <form>
          <div className="grid grid-cols-2">
            <input
              className="border m-2 p-2"
              type="text"
              placeholder="First Name"
            />
            <input
              className="border m-2 p-2"
              type="text"
              placeholder="Last Name"
            />
            <input
              className="border m-2 p-2"
              type="email"
              placeholder="Email Address"
            />
            <input
              className="border m-2 p-2"
              type="tel"
              placeholder="Phone Number"
            />
            <input
              className="border col-span-2 p-2 m-2"
              type="text"
              placeholder="Address"
            />
            <textarea
              placeholder="Message..."
              className="border col-span-2 m-2 p-2"
              cols="30"
              rows="10"
            ></textarea>
            <button className="col-span-2 m-2 ">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
