import React from "react";
import Cart from "../assets/card1.jpg";
import Cart1 from "../assets/card.jpg";

const Card = () => {
  return (
    <section className="lg:py-20 py-5 px-2 lg:px-0">
      <div className="container mx-auto">
        <h2 className="text-[35px] font-pops capitalize flex justify-center font-semibold pb-10">
          Our Service
        </h2>
        <div className="lg:flex justify-between">
          <div className="lg:w-[32%] border-2 border-[#ccc] py-5 px-5 mb-5 lg:mb-0  lg:hover:scale-110 duration-700 ease-in-out">
            <img className="w-full" src={Cart1} alt="" />
            <h3 className="lg:text-[25px] text-[20px] font-pops font-semibold text-center py-2">
              Daily pickup, no limits
            </h3>
            <p className="lg:text-[18px] text-[14px] font-pops font-normal text-center">
              Steadfast Courier gives you the opportunity of unlimited pickup.
            </p>
          </div>
          <div className="lg:w-[32%] border-2 border-[#ccc] py-5 px-5 mb-5 lg:mb-0  lg:hover:scale-110 duration-700 ease-in-out">
            <img src={Cart} alt="" />
            <h3 className="lg:text-[25px] text-[20px] font-pops font-semibold text-center py-2">
              Cash on Delivery
            </h3>
            <p className="lg:text-[18px] text-[14px] font-pops font-normal text-center">
              Steadfast Courier gives you the opportunity of unlimited pickup.
            </p>
          </div>
          <div className="lg:w-[32%] border-2 border-[#ccc] py-5 px-5 mb-5 lg:mb-0  lg:hover:scale-110 duration-700 ease-in-out">
            <img className="w-full" src={Cart1} alt="" />
            <h3 className="lg:text-[25px] text-[20px] font-pops font-semibold text-center py-2">
              Online Management
            </h3>
            <p className="lg:text-[18px] text-[14px] font-pops font-normal text-center">
              Steadfast Courier gives you the opportunity of unlimited pickup.
            </p>
          </div>
        </div>
        <div className="lg:flex justify-between pt-20">
          <div className="lg:w-[32%] border-2 border-[#ccc] py-5 px-5 mb-5 lg:mb-0  lg:hover:scale-110 duration-700 ease-in-out">
            <img className="w-full" src={Cart1} alt="" />
            <h3 className="lg:text-[25px] text-[20px] font-pops font-semibold text-center py-2">
              Online Management
            </h3>
            <p className="lg:text-[18px] text-[14px] font-pops font-normal text-center">
              Steadfast Courier gives you the opportunity of unlimited pickup.
            </p>
          </div>
          <div className="lg:w-[32%] border-2 border-[#ccc] py-5 px-5 mb-5 lg:mb-0  lg:hover:scale-110 duration-700 ease-in-out">
            <img className="w-full" src={Cart} alt="" />
            <h3 className="lg:text-[25px] text-[20px] font-pops font-semibold text-center py-2">
              Real-Time Tracking
            </h3>
            <p className="lg:text-[18px] text-[14px] font-pops font-normal text-center">
              Steadfast Courier gives you the opportunity of unlimited pickup.
            </p>
          </div>
          <div className="lg:w-[32%] border-2 border-[#ccc] py-5 px-5 mb-5 lg:mb-0  lg:hover:scale-110 duration-700 ease-in-out">
            <img className="w-full" src={Cart1} alt="" />
            <h3 className="lg:text-[25px] text-[20px] font-pops font-semibold text-center py-2">
              24/7 Customer Service
            </h3>
            <p className="lg:text-[18px] text-[14px] font-pops font-normal text-center">
              Steadfast Courier gives you the opportunity of unlimited pickup.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
