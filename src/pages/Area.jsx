import React from "react";
import { FaSearch } from "react-icons/fa";


const Area = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto">
        <h2 className="text-[35px] font-semibold text-center font-pops">
          We are available in 64 districts
        </h2>
        <h3 className="text-[30px] font-semibold text-center font-pops pt-10">
          Search Your Area
        </h3>
        <p className="text-[20px] font-pops font-medium text-gray-500 pt-2 text-center">
          Now you can easily search your area here
        </p>
        <div className="flex justify-center pt-10 items-center relative">
          <input
            type="text"
            placeholder="search here....."
            name=""
            id=""
            className="font-pops text-[20px] text-[#000] capitalize border-2 border-bg-[#000] px-2 py-5 rounded-lg outline-none w-[700px]"
          />
          <i className=" absolute top-[50%] translate-y-[50%] right-[28%] font-pops text-[20px] text-[#000]"><FaSearch/></i>
        </div>
        <div className="pt-20">
          <p className="text-[20px] font-pops font-medium pb-2">We deliver almost all over Bangladesh</p>
          <iframe className="w-full h-[700px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.397692002133!2d90.38119147455971!3d23.73319367868207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b84e57dd8b19%3A0xd66f294182e721e8!2sDhaka%20New%20Market!5e0!3m2!1sen!2sbd!4v1727777341568!5m2!1sen!2sbd"></iframe>
        </div>
      </div>
    </div>
  );
};

export default Area;
