import React from 'react'
import Log from "../assets/logo.svg"

const Login = () => {
  return (
    <div className='bg-[#535383] py-20'>
      <div className="container mx-auto">
        <div className="flex justify-between">
          <div className="w-[45%] bg-hero h-[600px] rounded-l-xl ">
              <h3 className='text-center text-white text-[40px] font-semibold font-pops pt-14'>Become a Merchant</h3>
              <p  className='text-center text-white text-[20px] font-semibold font-pops pt-5'>Please use your credentials to login.</p>
          </div>
          <div className="w-[55%] bg-[#FFF] py-16 pl-14 rounded-r-xl">
              <img src={Log} alt="" />
              <p  className='text-black text-[20px] font-semibold font-pops pt-20 pb-5 capitalize'>login</p>
              <form action="">
              <input
                type="text"
                name=""
                id=""
                placeholder="E-Mail"
                className="py-3 pl-3 outline-none border-2 border-gray-400 my-2 text-[18px] font-pops font-normal rounded-l-lg w-[600px] mb-5"
              />
               <input
                type="text"
                name=""
                id=""
                placeholder="Password"
                className="py-3 pl-3 outline-none border-2 border-gray-400 my-2 text-[18px] font-pops font-normal rounded-l-lg w-[600px]"
              />
              </form>
              <div className="flex justify-between pt-20 items-center">
                <p className='text-center text-b lack text-[16px] font-normal font-pops'>I have no account.</p>
                <a href="#" className="text-white text-[20px] font-pops font-medium bg-[#000080] w-[150px] mx-auto h-14 flex items-center justify-center rounded-lg ">Login</a>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
