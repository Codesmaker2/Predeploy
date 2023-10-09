import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { server } from "../server";
import { BiSad } from "react-icons/bi";
import { RiHandHeartLine } from "react-icons/ri";

const ActivationPage = () => {
  const { activation_token } = useParams();
  const [error, setError] = useState(false);

  useEffect(() => {
    if (activation_token) {
      const sendRequest = async () => {
        await axios
          .post(`${server}/user/activation`, {
            activation_token,
          })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            setError(true);
          });
      };
      sendRequest();
    }
  }, [activation_token]);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {error ? (
        <div className="flex items-end bg-gray-200 p-6 rounded-md border border-orange-400 m-2">
        <div className="flex flex-col items-start">
          <span className="font-medium text-lg text-orange-900"><span className="font-semibold">Sorry!!</span>Your Token was Expired!</span>
          <p className="text-base mt-2">Please try again to register account. Thank you!.</p>
          
          <Link to={"/"}>
          <button className="flex justify-center items-center bg-orange-700 hover:bg-orange-800 pl-4 pr-4 pt-1.5 pb-1.5 mt-4 rounded-md text-white font-medium">
            <span className="mr-2">Go to App</span>
            <svg className="w-6 h-6" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" stroke-linejoin="round" stroke-linecap="round"></path>
            </svg>
          </button>
          
          </Link>
        </div>
        <div className="ml-10 text-orange-900">
          <BiSad size={40} className=""/>
        </div>
      </div>
        
      ) : (
        <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
          <img src="https://img.freepik.com/premium-vector/congratulations-banner-template-with-balloons-confetti_619130-1027.jpg" alt="" />
        </div>
        <div className="p-6">
          <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
           Congratulation!<RiHandHeartLine/>
          </h5>
          <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
          You have successfully register account! 
          </p>
          <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
          Your token automatically expired after 5 minutes or Refresh Link.
          </p>
        </div>
        <div className="p-6 pt-0">
         <Link to={'/login'}>
         <button data-ripple-light="true" type="button" className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
            Login
          </button>
         </Link>
        </div>
      </div>
      )}
    </div>
  );
};

export default ActivationPage;
