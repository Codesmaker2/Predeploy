import React from "react";
// import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import Lottie from "react-lottie";
import animationData from "../Assests/animations/animation_llnqvst1.json";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const OrderSuccessPage = () => {
  return (
    <div>
      <div className="400px:hidden max-400px:hidden">
      <Header /> 
      </div>
      <Success />
      {/* <Footer /> */}
    </div>
  );
};

const Success = () => {
  const { user } = useSelector((state) => state.user);
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="mt-10">
      <Lottie options={defaultOptions} width={220} height={90} />
      <h5 className="text-center mb-5 text-[22px] text-[#000000a1]">
        Hi, {user?.name}
        <br />
        Your order is successful ✔️
      </h5>
     <Link to={"/"}>
     <div className="flex items-center justify-center">
        <button
          type="Continues Order"
          className="bg-blue-500 h-10 w-[50%] text-white border hover:bg-white hover:text-blue-500 hover:border-blue-500  mb-4 rounded-lg"
        >
          Continues Order
        </button>
      </div>
     
     </Link>
      <div className="relative mx-4 800px:hidden  h-80 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
        <img
          src="https://img.freepik.com/free-vector/order-confirmed-concept-illustration_114360-1486.jpg?size=626&ext=jpg&ga=GA1.1.1737282160.1690642300&semt=ais"
          alt=""
        />
      </div>
    </div>
  );
};

export default OrderSuccessPage;
