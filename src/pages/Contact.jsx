import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoHeadsetSharp } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { MdAddIcCall } from "react-icons/md";
import { FaSearch } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto">
        <h2 className="text-[35px] font-semibold text-center font-pops">
          Get in Touch with Us
        </h2>
        <div className="flex justify-between pt-24">
          <div className="w-[40%]">
            <div className="flex justify-between">
              <div className="w-[45%] bg-[#fff] text-center rounded-lg border-2 border-gray-400 py-5">
                <FaLocationDot className="text-[40px] border-2 border-white text-[#00b795] mx-auto" />
                <div className="">
                  <p className="text-[30px] font-pops font-semibold text-black">
                    Address
                  </p>
                  <p className="text-[20px] font-pops font-normal text-gray-300">
                    17/2, Dhanmondi 3/A, Dhaka-1209
                  </p>
                </div>
              </div>
              <div className="w-[45%] bg-[#fff] py-5 text-center rounded-lg border-2 border-gray-400">
                <IoHeadsetSharp className="text-[40px] border-2 border-white text-[#00b795] mx-auto" />
                <div className="">
                  <p className="text-[30px] font-pops font-semibold text-black">
                    Call Us
                  </p>
                  <p className="text-[20px] font-pops font-normal text-gray-300">
                    09678-045045
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-between py-10">
              <div className="w-[45%] bg-[#fff] py-10 text-center rounded-lg border-2 border-gray-400">
                <IoMdMail className="text-[40px] text-[#00b795] mx-auto" />
                <div className="">
                  <p className="text-[30px] font-pops font-semibold text-black">
                    Mail
                  </p>
                  <p className="text-[20px] font-pops font-normal text-gray-300">
                    info@steadfast.com.bd
                  </p>
                </div>
              </div>
              <div className="w-[45%] bg-[#fff] py-10 text-center rounded-lg border-2 border-gray-400">
                <MdAddIcCall className="text-[40px] border-2 border-white text-[#00b795] mx-auto" />
                <div className="">
                  <p className="text-[30px] font-pops font-semibold text-black">
                    Seller
                  </p>
                  <p className="text-[20px] font-pops font-normal text-gray-300">
                    01315565037
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[55%]">
            <form action="">
              <input
                type="text"
                name=""
                id=""
                placeholder="Full Name"
                className="w-full py-3 pl-3 outline-none border-2 border-gray-400 text-[20px] font-pops font-normal rounded-lg"
              />
              <input
                type="text"
                name=""
                id=""
                placeholder="Phone Number"
                className="w-full py-3 pl-3 outline-none border-2 border-gray-400 my-2 text-[20px] font-pops font-normal rounded-lg"
              />
              <input
                type="text"
                name=""
                id=""
                placeholder="Full Address"
                className="w-full py-3 pl-3 outline-none border-2 border-gray-400 text-[20px] font-pops font-normal rounded-lg"
              />
              <input
                type="text"
                name=""
                id=""
                placeholder="Mail Address"
                className="w-full py-3 pl-3 outline-none border-2 border-gray-400 my-2 text-[20px] font-pops font-normal rounded-lg"
              />
              <textarea
                name=""
                placeholder="Message"
                id=""
                className="w-full py-2 pl-3 outline-none border-2 border-gray-400 my-2 text-[20px] font-pops font-normal rounded-lg"
              ></textarea>
            </form>
            <a
              className=" text-[20px] font-pops font-normal bg-[#00b795] w-full py-4 rounded-lg flex justify-center items-center text-white"
              href="#"
            >
              Send Message
            </a>
          </div>
        </div>
        <div className="pt-16">
          <h3 className="text-[30px] font-semibold text-center font-pops pt-10">
            Search Hub
          </h3>
          <p className="text-[20px] font-pops font-medium text-gray-500 pt-2 text-center">
            Now you can easily search your hub
          </p>
          <div className="flex justify-center pt-10 items-center relative">
            <input
              type="text"
              placeholder="search here....."
              name=""
              id=""
              className="font-pops text-[20px] text-[#000] capitalize border-2 border-bg-[#000] px-2 py-5 rounded-lg outline-none w-[700px]"
            />
            <i className=" absolute top-[50%] translate-y-[50%] right-[28%] font-pops text-[20px] text-[#000]">
              <FaSearch />
            </i>
          </div>
          <div className="flex justify-between pt-10">
            <div className="w-[23%] bg-[#fff] py-10 px-2 text-center rounded-lg border-2 border-gray-400">
                <h3 className="text-white text-[20px] font-pops font-medium bg-[#00b795] w-[250px] mx-auto h-14 flex items-center justify-center rounded-lg ">Dhanmondi Hub</h3>
                <p className="text-[18px] font-pops font-normal text-black py-5">
                Manager : Mizanur Rahman
                </p>
                <p className="text-[18px] font-pops font-normal text-gray-300">
                House:17/2, Road: 3/A, Dhanmondi, Dhaka-1209
                </p>
                <p className="text-[18px] font-pops font-normal text-gray-300 py-2">8801315565037</p>
            </div>
            <div className="w-[23%] bg-[#fff] py-10 px-2 text-center rounded-lg border-2 border-gray-400">
                <h3 className="text-white text-[20px] font-pops font-medium bg-[#00b795] w-[250px] mx-auto h-14 flex items-center justify-center rounded-lg ">Dhanmondi Hub</h3>
                <p className="text-[18px] font-pops font-normal text-black py-5">
                Manager : Mizanur Rahman
                </p>
                <p className="text-[18px] font-pops font-normal text-gray-300">
                House:17/2, Road: 3/A, Dhanmondi, Dhaka-1209
                </p>
                <p className="text-[18px] font-pops font-normal text-gray-300 py-2">8801315565037</p>
            </div>
            <div className="w-[23%] bg-[#fff] py-10 px-2 text-center rounded-lg border-2 border-gray-400">
                <h3 className="text-white text-[20px] font-pops font-medium bg-[#00b795] w-[250px] mx-auto h-14 flex items-center justify-center rounded-lg ">Dhanmondi Hub</h3>
                <p className="text-[18px] font-pops font-normal text-black py-5">
                Manager : Mizanur Rahman
                </p>
                <p className="text-[18px] font-pops font-normal text-gray-300">
                House:17/2, Road: 3/A, Dhanmondi, Dhaka-1209
                </p>
                <p className="text-[18px] font-pops font-normal text-gray-300 py-2">8801315565037</p>
            </div>
            <div className="w-[23%] bg-[#fff] py-10 px-2 text-center rounded-lg border-2 border-gray-400">
                <h3 className="text-white text-[20px] font-pops font-medium bg-[#00b795] w-[250px] mx-auto h-14 flex items-center justify-center rounded-lg ">Dhanmondi Hub</h3>
                <p className="text-[18px] font-pops font-normal text-black py-5">
                Manager : Mizanur Rahman
                </p>
                <p className="text-[18px] font-pops font-normal text-gray-300">
                House:17/2, Road: 3/A, Dhanmondi, Dhaka-1209
                </p>
                <p className="text-[18px] font-pops font-normal text-gray-300 py-2">8801315565037</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
