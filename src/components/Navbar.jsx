import React, { useEffect, useRef, useState } from "react";
import Logo from "../assets/logo.svg";
import { AiOutlineAim } from "react-icons/ai";
import { FaBars } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";

const Navbar = () => {
  let [show, setShow] = useState(false);
  let showRef = useRef();

  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (showRef.current.contains(e.target)) {
        setShow(!show);
      } else {
        setShow(false);
      }
    });
  }, [show]);

  return (
    <section className="lg:py-5 py-2 lg:px-0 px-5">
      <div className="container mx-auto">
        <div className="flex justify-between w-full">
          <div className="lg:w-1/5 flex items-center">
          <Link to="/"><img src={Logo} alt="Logo" /></Link>
          </div>
          <div className="w-4/5 flex justify-end items-center">
            <ul
              className={`flex lg:static lg:flex-row flex-col lg:gap-x-8 gap-3  lg:justify-end items-center ${
                show == true
                  ? "bg-[#000] pt-10 text-[#fff]  w-[250px] pl-[5%] h-full  absolute top-0 left-0 duration-700 ease-in-out z-50"
                  : "h-full absolute top-0 left-[-200px] duration-700 ease-in-out z-[1]"
              }`}
            >
              <ImCross className='text-[20px] justify-end absolute top-3 right-3 lg:hidden cursor-pointer'/>
              <li className="text-[20px] hover:text-[#00b795] duration-300 ease-in-out cursor-pointer font-pops font-normal">
                <Link to="/price">Pricing</Link>
              </li>
              <li className="text-[20px] hover:text-[#00b795] duration-300 ease-in-out cursor-pointer font-pops font-normal">
                <Link to="/area">                Coverage</Link>
              </li>
              <li className="text-[20px] hover:text-[#00b795] duration-300 ease-in-out cursor-pointer font-pops font-normal">
                <Link to="/about">About Us</Link>
              </li>
              <li className="text-[20px] hover:text-[#00b795] duration-300 ease-in-out cursor-pointer font-pops font-normal">
                <Link to="/contact">Contact</Link>
              </li>
              <Link to="/track"><li className=" flex items-center lg:ms-40 text-[20px] hover:text-[#00b795] duration-300 ease-in-out cursor-pointer font-pops font-normal gap-x-3 text-[#00b795]">
                <AiOutlineAim /> <span>Track Parcel</span>
              </li></Link>
              <li className="text-[20px] hover:text-[#00b795] duration-300 ease-in-out cursor-pointer font-pops font-normal">
                <a href="#"><Link to="/login">Login</Link></a>
              </li>
              <li className="text-[20px] font-pops font-normal bg-[#00b795] px-10 py-5 rounded-md text-white">
                <a href="#"><Link to="/signup">Sign up</Link></a>
              </li>
            </ul>
          </div>

          <div ref={showRef} className=" lg:hidden block cursor-pointer">
            <FaBars className="text-[22px] border-2 border-teal-300 rounded-sm"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
