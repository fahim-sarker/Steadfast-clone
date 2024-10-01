import React from "react";
import { CiDeliveryTruck } from "react-icons/ci";

const Signup = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto">
        <i className="flex justify-center mx-auto text-[40px] bg-[#00b795] h-[70px] w-[70px] items-center rounded-full text-white">
          <CiDeliveryTruck />
        </i>
        <h3 className="text-center text-black text-[40px] font-semibold font-pops py-5">
          Become a Merchant
        </h3>
        <div className="w-[600px] mx-auto">
          <form action="">
            <input
              type="text"
              name=""
              id=""
              placeholder="Your Business Name"
              className="py-3 pl-3 outline-none border-2 border-gray-400 my-2 text-[18px] font-pops font-normal rounded-lg w-[600px] text-center bg-gray-100"
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="Your Name"
              className="py-3 pl-3 outline-none border-2 border-gray-400 my-2 text-[18px] font-pops font-normal rounded-lg w-[600px] text-center bg-gray-100"
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="Address of your pickup Location"
              className="py-3 pl-3 outline-none border-2 border-gray-400 my-2 text-[18px] font-pops font-normal rounded-lg w-[600px] text-center bg-gray-100"
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="Phone Number"
              className="py-3 pl-3 outline-none border-2 border-gray-400 my-2 text-[18px] font-pops font-normal rounded-lg w-[600px] text-center bg-gray-100"
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="E-Mail"
              className="py-3 pl-3 outline-none border-2 border-gray-400 my-2 text-[18px] font-pops font-normal rounded-lg w-[600px] text-center  bg-gray-100"
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="Password"
              className="py-3 pl-3 outline-none border-2 border-gray-400 my-2 text-[18px] font-pops font-normal rounded-lg w-[300px] text-center  bg-gray-100"
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="Confirm Password"
              className="py-3 pl-3 outline-none border-2 border-gray-400 my-2 text-[18px] font-pops font-normal rounded-lg w-[300px] text-center  bg-gray-100"
            />
          </form>
          <a
              className=" text-[20px] font-pops font-normal bg-[#00b795] w-full py-4 rounded-lg flex justify-center items-center text-white mt-5"
              href="#"
            >
              Signup
            </a>
            <div className="flex gap-x-2 pt-10 items-center justify-center">
                <p className='text-center text-b lack text-[18px] font-normal font-pops'>Already have an account?</p>
                <a href="#" className="text-black text-[20px] font-pops font-medium">Login.</a>
              </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
