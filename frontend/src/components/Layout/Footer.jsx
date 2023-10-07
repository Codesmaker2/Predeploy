import React from "react";
import {
 
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";

import { IoLogoFacebook } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="bg-blue-800 text-white max-768px:hidden max-500px:hidden max-400px:hidden 800px:hidden ">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-blue-600 py-7">
        {/* <h1 className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5">
          <span className="text-blue-500">Subscribe</span> us for get news{" "}
          <br />
          events and offers
        </h1> */}
        {/* <div>
          <input
            type="text"
            required
            placeholder="Enter your email..."
            className="text-gray-800
                sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
          />
          <button className="bg-[#56d879] hover:bg-teal-500 duration-300 px-5 py-2.5 rounded-md text-whie md:w-auto w-full">
            Submit
          </button>
        </div> */}
      </div>
      <div className="grid grid-cols-1 sm:gird-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16 sm:text-center">
        <ul className="px-5 text-center sm:text-start flex sm:block flex-col items-center">
          {/* <img
            src="https://see.fontimg.com/api/renderfont4/ow59x/eyJyIjoiZnMiLCJoIjozMywidyI6MTAwMCwiZnMiOjMzLCJmZ2MiOiIjMUE1N0IwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/TVdSU01T/airtravelerspersonaluse-bdit.png"
            alt=""
            style={{ filter: "brightness(0) invert(1)" }}
          /> */}
          {/* <br /> */}
          {/* <p>The home and elements needeed to create beatiful products.</p>
          <div className="flex items-center mt-[15px]">
            <AiFillFacebook size={25} className="cursor-pointer" />
            <AiOutlineTwitter
              size={25}
              style={{ marginLeft: "15px", cursor: "pointer" }}
            />
            <AiFillInstagram
              size={25}
              style={{ marginLeft: "15px", cursor: "pointer" }}
            />
            <AiFillYoutube
              size={25}
              style={{ marginLeft: "15px", cursor: "pointer" }}
            />
          </div> */}
        </ul>

        {/* <ul className=" text-center sm:text-start">
          <h1 className="mb-1 font-semibold ">Company</h1>
          {footerProductLinks.map((link,index) => (
            <li key={index}>
              <Link
                className="text-gray-400 hover:text-blue-500 duration-300
                   text-sm cursor-pointer leading-6"
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold">Shop</h1>
          {footercompanyLinks.map((link,index) => (
            <li key={index}>
              <Link
                className="text-gray-400 hover:text-blue-500 duration-300
                   text-sm cursor-pointer leading-6"
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold">Support</h1>
          {footerSupportLinks.map((link,index) => (
            <li key={index}>
              <Link
                className="text-gray-400 hover:text-teal-400 duration-300
                   text-sm cursor-pointer leading-6"
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul> */}
      </div>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
         text-center pt-2 text-gray-400 text-sm pb-8"
      >
        <div className="flex items-center justify-center" >Terms · Privacy Policy</div>
        <div className="flex items-center justify-center">© 2023 MWRSMS. All rights reserved.</div>
        
        <span><div className="flex items-center justify-center ">
            <IoLogoFacebook className="hover:text-blue-600"
            size={25} style={{ marginLeft: "15px", cursor: "pointer" }} />

            <AiOutlineTwitter  className="hover:text-blue-400"
              size={25}
              style={{ marginLeft: "15px", cursor: "pointer" }}
            />
            <AiFillInstagram className="hover:text-orange-500 "
              size={25}
              style={{ marginLeft: "15px", cursor: "pointer" }}
            />
            <AiFillYoutube className="hover:text-red-500"
              size={25}
              style={{ marginLeft: "15px", cursor: "pointer" }}
            />
          </div></span>
        {/* <div className="sm:block flex items-center justify-center w-full">
          <img
            src="https://hamart-shop.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooter-payment.a37c49ac.png&w=640&q=75"
            alt=""
          />
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
