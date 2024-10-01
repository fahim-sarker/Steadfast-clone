import React from "react";
import { BsBookmarkCheckFill } from "react-icons/bs";



const Pricing = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto">
        <h2 className="text-[30px] font-pops font-semibold">
          Price Calculator
        </h2>
        <h3 className="text-[25px] font-pops font-semibold text-center py-5">
          Calculate Your Delivery Charge
        </h3>
        <h4 className="text-[20px] font-pops font-normal text-gray-500 text-center">
          You can easily calculate your delivery charge here
        </h4>
        <form action="">
          <p className="text-[20px] font-pops font-normal pt-20">From</p>
          <select
            className="font-pops text-[20px] font-bold text-[#000] capitalize border-2 border-bg-[#000] w-full px-2 py-5 rounded-lg"
            name=""
            id=""
          >
            <option
              className="font-joss text-[16px] text-[#767676] font-semi-bold"
              value=""
            >
              Dhaka City
            </option>
            <option
              className="font-sans text-[16px] text-[#767676] font-medium capitalize"
              value=""
            >
              Chattogram
            </option>
          </select>
          <p className="text-[20px] font-pops font-normal pt-10">Destination</p>
          <select
            className="font-pops text-[20px] font-bold text-[#000] capitalize border-2 border-bg-[#000] w-full px-2 py-5 rounded-lg"
            name=""
            id=""
          >
            <option
              className="font-joss text-[16px] text-[#767676] font-semi-bold"
              value=""
            >
              Dhaka City
            </option>
            <option
              className="font-sans text-[16px] text-[#767676] font-medium capitalize"
              value=""
            >
              Chattogram
            </option>
          </select>
          <p className="text-[20px] font-pops font-normal pt-10">Category</p>
          <select
            className="font-pops text-[20px] font-bold text-[#000] capitalize border-2 border-bg-[#000] w-full px-2 py-5 rounded-lg"
            name=""
            id=""
          >
            <option
              className="font-joss text-[16px] text-[#767676] font-semi-bold"
              value=""
            >
              Regular
            </option>
            <option
              className="font-sans text-[16px] text-[#767676] font-medium capitalize"
              value=""
            >
              Document
            </option>
          </select>
          <p className="text-[20px] font-pops font-normal pt-10">
            Service Type
          </p>
          <select
            className="font-pops text-[20px] font-bold text-[#000] capitalize border-2 border-bg-[#000] w-full px-2 py-5 rounded-lg"
            name=""
            id=""
          >
            <option
              className="font-joss text-[16px] text-[#767676] font-semi-bold"
              value=""
            >
              Regular
            </option>
            <option
              className="font-sans text-[16px] text-[#767676] font-medium capitalize"
              value=""
            >
              Same Day
            </option>
          </select>
          <p className="text-[20px] font-pops font-normal pt-10">
            Service Type
          </p>
          <input
            type="text"
            placeholder="kg"
            className="font-pops text-[20px] font-bold text-[#000] capitalize border-2 border-bg-[#000] w-full px-2 py-5 rounded-lg outline-none"
          />
          <div className="pt-20">
            <input
              type="text"
              placeholder="Taka"
              className="font-pops text-[20px] font-bold text-[#000] capitalize border-2 border-bg-[#000] w-full px-2 py-5 rounded-lg outline-none"
            />
          </div>
        </form>
        <div className="pt-20 pl-10">
            <ul>
                <li className="flex gap-x-5 items-center"><BsBookmarkCheckFill className="text-[30px] text-[#00b795]"/><span className="text-[20px] font-pops font-normal">১% ক্যাশ অন ডেলিভারি ও রিস্ক ম্যানেজমেন্ট চার্জ প্রযোজ্য</span></li>
                <li className="flex gap-x-5 items-center py-5"><BsBookmarkCheckFill className="text-[30px] text-[#00b795]"/><span className="text-[20px] font-pops font-normal">পার্সেল সাইজের কারণে ডেলিভারি মাশুল পরিবর্তিত হতে পারে</span></li>
                <li className="flex gap-x-5 items-center"><BsBookmarkCheckFill className="text-[30px] text-[#00b795]"/><span className="text-[20px] font-pops font-normal">উক্ত চার্জসমূহ ভ্যাট ও ট্যাক্স ব্যাতিত</span></li>
                <li className="flex gap-x-5 items-center py-5"><BsBookmarkCheckFill className="text-[30px] text-[#00b795]"/><span className="text-[20px] font-pops font-normal">অনাকাঙ্ক্ষিত কারণবশত ডেলিভারি সময়ের পরিবর্তন হতে পারে</span></li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
