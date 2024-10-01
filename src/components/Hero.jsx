import React from "react";
import { FcBusinessman } from "react-icons/fc";
import { IoMdBicycle, IoIosHome } from "react-icons/io";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section>
      <div className="lg:py-36 py-10 bg-hero bg-center bg-cover lg:px-0 px-5 relative after:absolute after:top-0 after:left-0 after:content-[''] after:bg-black after:h-full after:w-full after:opacity-50">
        <div className="container mx-auto z-40 relative">
          <div className="flex justify-between">
            <div className="w-[75%]">
              <h2 className="lg:text-[60px] text-[14px] pb-10 font-pops font-semibold w-[500px] text-white">
                We Deliver Parcel on Time with no Hassle.
              </h2>
              <p className="lg:text-[20px] text-[12px] font-pops font-normal text-white w-[500px] pb-14">
                Easy Tracking, fast Payment, and safe Delivery across country.
              </p>
              <a
                className="text-[20px] font-pops font-normal bg-[#00b795] px-10 py-6 rounded-md text-white capitalize"
                href="#"
              >
                <Link to="/signup">become a merchant</Link>
              </a>
            </div>
            <div className="w-[25%] pt-20">
              <div className="flex gap-10 items-center pr-10 pb-5">
                <FcBusinessman className="text-[60px] border-2 border-white text-[#00b795]"/>
                <div className="">
                  <p className="text-[35px] font-pops font-semibold text-black">300k+</p>
                  <p className="text-[20px] font-pops font-normal text-gray-300">Registered Merchant</p>
                </div>
              </div>
              <div className="flex gap-10 items-center pr-10 pb-5">
                <IoMdBicycle className="text-[60px] border-2 border-white text-[#00b795]"/>
                <div className="">
                  <p className="text-[35px] font-pops font-semibold text-black">10k+</p>
                  <p className="text-[20px] font-pops font-normal text-gray-300">Delivery Man</p>
                </div>
              </div>
              <div className="flex gap-10 items-center pr-10 pb-5">
                <IoIosHome className="text-[60px] border-2 border-white text-[#00b795]"/>
                <div className="">
                  <p className="text-[35px] font-pops font-semibold text-black">500k+</p>
                  <p className="text-[20px] font-pops font-normal text-gray-300">Delivery Point</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
