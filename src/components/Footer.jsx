import React from "react";
import Logo from "../assets/logo.svg";
import { FaFacebookF,FaLinkedinIn,FaInstagram  } from "react-icons/fa";


const Footer = () => {
  return (
    <div className="py-24">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <div className="w-[25%]">
            <img src={Logo} alt="" />
            <ul className="pt-10">
              <li className="text-[20px] font-pops font-medium text-black">
                House# 44, Rd No. 2/A, Dhanmondi, Dhaka 1209
              </li>
              <li className="text-[20px] font-pops font-medium text-black py-3">
                E-mail: info@steadfast.com.bd
              </li>
              <li className="text-[20px] font-pops font-medium text-black">
                Hotline: 09678-045045
              </li>
            </ul>
          </div>
          <div className="w-[22%]">
            <h3 className="text-[30px] font-pops font-semibold text-black">
              Company
            </h3>
            <ul className="pt-10">
              <li className="text-[20px] font-pops font-medium text-black">
                Contact Us
              </li>
              <li className="text-[20px] font-pops font-medium text-black py-3">
                Return Policy
              </li>
              <li className="text-[20px] font-pops font-medium text-black">
                Terms and Conditions
              </li>
            </ul>
          </div>
          <div className="w-[22%]">
            <h3 className="text-[30px] font-pops font-semibold text-black">
              Sister Concern
            </h3>
            <ul className="pt-10">
              <li className="text-[20px] font-pops font-medium text-black">
                Pixelax
              </li>
              <li className="text-[20px] font-pops font-medium text-black py-3">
                Biggapon
              </li>
            </ul>
          </div>
          <div className="w-[22%]">
            <h3 className="text-[30px] font-pops font-semibold text-black">
              Follow Us
            </h3>
            <ul className="pt-10 flex gap-x-10 items-center">
              <li className="text-[30px] font-pops font-medium text-gray-400 border-2 border-gray-500 py-2 px-2 rounded-full">
                <FaFacebookF/>
              </li>
              <li className="text-[30px] font-pops font-medium text-gray-400 border-2 border-gray-500 py-2 px-2 rounded-full">
                <FaLinkedinIn/>
              </li>
              <li className="text-[30px] font-pops font-medium text-gray-400 border-2 border-gray-500 py-2 px-2 rounded-full">
                <FaInstagram/>
              </li>
            </ul>
          </div>
        </div>
        <h4 className="pt-10 font-pops text-[20px] flex justify-center">© 2016 - 2024 SteadFast Courier Ltd. All rights reserved.</h4>
      </div>
    </div>
  );
};

export default Footer;
