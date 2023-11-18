import React from 'react'
import CheckoutSteps from "../components/Checkout/CheckoutSteps";
import Checkout from "../components/Checkout/Checkout";
import Footer from '../components/Layout/Footer';
import { Link } from 'react-router-dom';
import { RxPinLeft } from 'react-icons/rx';

const CheckoutPage = () => {
  return (
   <div className='!overflow-scroll h-[100vh]'>
      <div className='w-full bg-blue-500 h-10 max-400px:hidden'></div>
      <Link to={"/dashboard-walkin-order-product"}>
        <RxPinLeft size={30} className='m-5 hover:text-blue-500 max-400px:hidden'/>
      </Link>
   
        <CheckoutSteps active={1} />
        <Checkout />
        <div className='800px:hidden'> <Footer /></div>
       
    </div>
  )
}

export default CheckoutPage
