import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { server } from '../server';
import { getAllOrdersOfUser } from '../redux/actions/order';

const CustomerDetails = () => {
    const { orders } = useSelector((state) => state.order);

    const { user } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(getAllOrdersOfUser(user._id));
      }, [dispatch,user._id]);

    const refundHandler = async () => {
        await axios.put(`${server}/order/order-refund/${id}`,{
          status: "Processing refund"
        }).then((res) => {
           toast.success(res.data.message);
        dispatch(getAllOrdersOfUser(user._id));
        }).catch((error) => {
          toast.error(error.response.data.message);
        })
      };

      const data = orders && orders.find((item) => item._id === id);

  return (
    <div className="w-full 800px:flex items-center border border-gray-400  p-2 bg-white px-5">
        <div className="w-full 800px:w-[60%]">
        <h4 className="pt-1 max-400px:text-[16px] max-500px:text-[16px]  max-640px:text-[18px] max-768px:text-[20px] font-[600]">ℹ️ Customer Info:</h4>
        <div className="flex ">
          <h1 className="max-400px:text-[14px] max-500px:text-[14px] max-640px:text-[16px] max-768px:text-[18px] mr-1 pt-2 ">Customer Name: </h1><h4 className="max-400px:text-[14px] max-500px:text-[14px] max-640px:text-[14px] max-768px:text-[15px] text-gray-500 pt-2"> {data?.user?.name}</h4></div>
          <div className="flex "><h1 className="max-400px:text-[14px] max-500px:text-[14px] max-640px:text-[16px] max-768px:text-[18px] mr-1">Contact Number : </h1><h4 className="max-400px:text-[14px] max-500px:text-[14px] max-640px:text-[14px] max-768px:text-[15px] text-gray-500  ">#{data?.user?.phoneNumber}</h4></div>
          <div className="flex "><h1 className="max-400px:text-[14px] max-500px:text-[14px] max-640px:text-[16px] max-768px:text-[18px] mr-1">Other Name : </h1><h4 className="max-400px:text-[14px] max-500px:text-[14px] max-640px:text-[14px] max-768px:text-[15px] text-gray-500  ">{data?.shippingAddress.penname}</h4></div>
          
                  
        </div>
        
        <div className="w-full 800px:w-[60%]">
          <h4 className="pt-3 max-400px:text-[15px] max-500px:text-[15px] max-640px:text-[18px] font-[600] max-768px:text-[20px]">📌Delivery Address:</h4>
          <h4 className="pt-2 800px:text-[15px]   max-400px:text-[14px] max-500px:text-[14px] max-640px:text-[16px] max-768px:text-[18px]">
            {data?.shippingAddress.address +
              ", " +
              data?.shippingAddress.landmark}
          </h4>
          {/* <h4 className=" text-[20px] 800px:text-[15px]">{data?.shippingAddress.country}</h4>
          <h4 className=" text-[20px] 800px:text-[15px]">{data?.shippingAddress.city}</h4> */}
         
        </div>
        <br />
        <hr />
        <div className="w-full flex 800px:w-[40%]">
        {
            data?.status === "Delivered" && (
              <div className="w-[100px] border h-[25px] mt-2 flex shadow-md items-center justify-center rounded-xl cursor-pointer text-gray-500 max-400px:text-[13px]"
              onClick={refundHandler}
              >Give a Refund</div>
            )
           }
          <div className="flex pt-2 text-[20px] max-400px:text-[17px] items-center max-400px:justify-end">
          <h4 className="shadow-sm">
          💳Payment Status:{" "}
            {data?.paymentInfo?.status ? data?.paymentInfo?.status : "Not Paid"}
          </h4>
          </div>
         
           
           
        </div>
      </div>
  )
}

export default CustomerDetails
