import React from "react";
import { GiCheckMark } from "react-icons/gi";
import Team from "../assets/about.svg";
import { TbTargetArrow } from "react-icons/tb";
import { FaHouseFlag } from "react-icons/fa6";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FcBusinessman } from "react-icons/fc";
import { IoMdBicycle, IoIosHome } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const About = () => {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className="py-20">
      <div className="container mx-auto">
        <h2 className="text-[35px] font-semibold text-center font-pops">
          Grow with SteadFast
        </h2>
        <p className="text-[20px] font-pops font-normal text-gray-500 pt-20">
          About Us
        </p>
        <div className="flex justify-between">
          <div className="w-[30%]">
            <h2 className="text-[45px] font-semibold font-pops">
              We Provide The Best Quality Courier Services
            </h2>
            <p className="text-[18px] font-pops font-normal text-gray-400 pt-10">
              Steadfast courier is a leading courier service company in
              Bangladesh dedicated to delivering reliable and efficient e-
              commerce logistics solutions in time.
            </p>
            <ul className="pt-10">
              <li className="flex gap-x-3 items-center">
                <GiCheckMark className="text-[30px] text-[#facc15]" />
                <span className="text-[20px] font-pops font-normal text-black">
                  Daily pickups, no limitations
                </span>
              </li>
              <li className="flex gap-x-3 items-center py-5">
                <GiCheckMark className="text-[30px] text-[#facc15]" />
                <span className="text-[20px] font-pops font-normal text-black">
                  Faster Payment Service
                </span>
              </li>
              <li className="flex gap-x-3 items-center">
                <GiCheckMark className="text-[30px] text-[#facc15]" />
                <span className="text-[20px] font-pops font-normal text-black">
                  Cash on Delivery
                </span>
              </li>
            </ul>
          </div>
          <div className="w-[65%]">
            <img className="w-full" src={Team} alt="" />
          </div>
        </div>
        <div className="py-20 flex justify-between">
          <div className="w-[45%]">
            <i className="text-[50px] text-[#facc15]">
              <TbTargetArrow />
            </i>
            <h3 className="text-[25px] font-pops font-semibold py-5">
              Our Mission
            </h3>
            <p className="text-[20px] font-pops font-normal">
              To put a smile on your face by providing fast, secure, and
              hassle-free deliveries. We're here to connect people and
              e-commerce businesses worldwide with fast, secure, and top-notch
              service.
            </p>
          </div>
          <div className="w-[45%]">
            <i className="text-[50px] text-[#00b795]">
              <FaHouseFlag />
            </i>
            <h3 className="text-[25px] font-pops font-semibold py-5">
              Our Vision
            </h3>
            <p className="text-[20px] font-pops font-normal">
              Redefine the future of e-commerce logistics in Bangladesh through
              innovative solutions powered by modern technologies.
            </p>
          </div>
        </div>
        <div className="py-20">
          <h3 className="text-[25px] font-pops font-semibold py-5 text-center">
            Our Vision
          </h3>
          <h3 className="text-[35px] font-pops font-semibold text-center">
            Md.Rahmat ullah
          </h3>
          <p className="text-[20px] font-pops font-normal w-[750px] mx-auto py-5 text-gray-400">
            Our journey began with a simple idea: to make deliveries easy,
            reliable, and delightful for e-commerce-based Entrepreneurs. With a
            passion for innovation and customer satisfaction, we've built a team
            dedicated to using modern technology to redefine the delivery
            experience.
          </p>
          <p className="text-[20px] font-pops font-normal w-[750px] mx-auto py-5 text-gray-400 pt-10">
            Thank you for trusting us on this exciting journey of delivering
            smiles and exceeding expectations
          </p>
          <ul className="pt-10 flex gap-x-10 items-center justify-center">
            <li className="text-[30px] font-pops font-medium text-gray-400 border-2 border-gray-500 py-2 px-2 rounded-full">
              <FaFacebookF />
            </li>
            <li className="text-[30px] font-pops font-medium text-gray-400 border-2 border-gray-500 py-2 px-2 rounded-full">
              <FaLinkedinIn />
            </li>
            <li className="text-[30px] font-pops font-medium text-gray-400 border-2 border-gray-500 py-2 px-2 rounded-full">
              <FaInstagram />
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-gray-200 py-20">
        <div className="container mx-auto">
          <div className="flex justify-between">
            <div className="w-[22%] bg-[#fff] py-5 text-center rounded-lg border-2 border-gray-400">
              <FcBusinessman className="text-[60px] border-2 border-white text-[#00b795] mx-auto" />
              <div className="">
                <p className="text-[35px] font-pops font-semibold text-black">
                  70k+
                </p>
                <p className="text-[20px] font-pops font-normal text-gray-300">
                  Registered Merchant
                </p>
              </div>
            </div>
            <div className="w-[22%] bg-[#fff] py-5 text-center rounded-lg border-2 border-gray-400">
              <IoMdBicycle className="text-[60px] border-2 border-white text-[#00b795] mx-auto" />
              <div className="">
                <p className="text-[35px] font-pops font-semibold text-black">
                  5k+
                </p>
                <p className="text-[20px] font-pops font-normal text-gray-300">
                  Delivery Man
                </p>
              </div>
            </div>
            <div className="w-[22%] bg-[#fff] py-5 text-center rounded-lg border-2 border-gray-400">
              <IoIosHome className="text-[60px] border-2 border-white text-[#00b795] mx-auto" />
              <div className="">
                <p className="text-[35px] font-pops font-semibold text-black">
                  1k+
                </p>
                <p className="text-[20px] font-pops font-normal text-gray-300">
                  Delivery Point
                </p>
              </div>
            </div>
            <div className="w-[22%] bg-[#fff] py-5 text-center rounded-lg border-2 border-gray-400">
              <IoIosHome className="text-[60px] border-2 border-white text-[#00b795] mx-auto" />
              <div className="">
                <p className="text-[35px] font-pops font-semibold text-black">
                  5700k+
                </p>
                <p className="text-[20px] font-pops font-normal text-gray-300">
                  Parcels Delivered
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-amber-50 mt-24 py-20">
        <div className="container mx-auto">
          <h2 className="text-[35px] font-semibold text-center font-pops pb-10">
            Customers Feedback
          </h2>
          <Slider {...settings}>
            <div className="!w-[93%] bg-[#F6F7FB] py-10 px-5 rounded-lg">
              <img src={Team} alt="" />
                <p className="text-[#000] text-[20px] font-pops font-normal capitalize py-3">
                  Rahmat ullah
                </p>
                <p className="text-[#000] text-[18px] font-pops font-normal">
                স্টেডফাস্ট কুরিয়ার থেকে সবসময়ই ভালো সার্ভিস পেয়েছি, তাই আপনাদের থেকে প্রত্যাশা একটু বেশিই থাকে । স্টেডফাস্টের জন্য শুভকামনা। তাফরীন রিহা
                </p>
            </div>
            <div className="!w-[93%] bg-[#F6F7FB] py-10 px-5 rounded-lg">
              <img src={Team} alt="" />
                <p className="text-[#000] text-[20px] font-pops font-normal capitalize py-3">
                  Rahmat ullah
                </p>
                <p className="text-[#000] text-[18px] font-pops font-normal">
                স্টেডফাস্ট কুরিয়ার থেকে সবসময়ই ভালো সার্ভিস পেয়েছি, তাই আপনাদের থেকে প্রত্যাশা একটু বেশিই থাকে । স্টেডফাস্টের জন্য শুভকামনা। তাফরীন রিহা
                </p>
            </div>
            <div className="!w-[93%] bg-[#F6F7FB] py-10 px-5 rounded-lg">
              <img src={Team} alt="" />
                <p className="text-[#000] text-[20px] font-pops font-normal capitalize py-3">
                  Rahmat ullah
                </p>
                <p className="text-[#000] text-[18px] font-pops font-normal">
                স্টেডফাস্ট কুরিয়ার থেকে সবসময়ই ভালো সার্ভিস পেয়েছি, তাই আপনাদের থেকে প্রত্যাশা একটু বেশিই থাকে । স্টেডফাস্টের জন্য শুভকামনা। তাফরীন রিহা
                </p>
            </div>
            <div className="!w-[93%] bg-[#F6F7FB] py-10 px-5 rounded-lg">
              <img src={Team} alt="" />
                <p className="text-[#000] text-[20px] font-pops font-normal capitalize py-3">
                  Rahmat ullah
                </p>
                <p className="text-[#000] text-[18px] font-pops font-normal">
                স্টেডফাস্ট কুরিয়ার থেকে সবসময়ই ভালো সার্ভিস পেয়েছি, তাই আপনাদের থেকে প্রত্যাশা একটু বেশিই থাকে । স্টেডফাস্টের জন্য শুভকামনা। তাফরীন রিহা
                </p>
            </div>
            <div className="!w-[93%] bg-[#F6F7FB] py-10 px-5 rounded-lg">
              <img src={Team} alt="" />
                <p className="text-[#000] text-[20px] font-pops font-normal capitalize py-3">
                  Rahmat ullah
                </p>
                <p className="text-[#000] text-[18px] font-pops font-normal">
                স্টেডফাস্ট কুরিয়ার থেকে সবসময়ই ভালো সার্ভিস পেয়েছি, তাই আপনাদের থেকে প্রত্যাশা একটু বেশিই থাকে । স্টেডফাস্টের জন্য শুভকামনা। তাফরীন রিহা
                </p>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default About;
