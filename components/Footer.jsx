import React from "react";
import { IoCarSport } from "react-icons/io5";
const Footer = () => {
  return (
    <div className=" h-5/6 w-screen lg:flex bg-gray-900 text-white border-2 border-black rounded-md">
      <div className="items-center text-center md:px-3 lg:px-8">
        <IoCarSport className="lg:h-24 lg:w-14" />
      </div>
      <div className="px-3 flex justify-center items-center">
        <p className="md:px-3 lg:px-20 text-center">
          Rev up your dreams with our premier selection of quality cars. Explore
          our inventory, find your perfect ride, and hit the road with
          confidence. With a commitment to excellence and customer satisfaction,
          we're here to fuel your journey every step of the way. Drive into the
          future with us today!
        </p>
      </div>
    </div>
  );
};
export default Footer;
