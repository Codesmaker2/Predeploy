import React from 'react'

import UserOrderDetails from "../components/UserOrderDetails";
import HeaderOrderdetails from './HeaderOrderdetails';
import CustomerDetails from './CustomerDetails';

const OrderDetailsPage = () => {
  return (
    <div className='bg-white'>
     <HeaderOrderdetails/>
        <UserOrderDetails />
        <CustomerDetails/>
    </div>
    
  )
}

export default OrderDetailsPage
