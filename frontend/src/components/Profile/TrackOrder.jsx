import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllOrdersOfUser } from "../../redux/actions/order";


const TrackOrder = ({active}) => {
  const { orders } = useSelector((state) => state.order);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(getAllOrdersOfUser(user._id));
  }, [dispatch,user._id]);

  const data = orders && orders.find((item) => item._id === id);

  return (
   
    
    <div className="w-full h-[80vh] flex justify-center items-center">

    
     
      <>
        {data && data?.status === "Processing" ? (
          <h1 className="text-[20px] text-center">
             <div className="flex mx-4 -mt-6 h-40  overflow-hidden items-center justify-center rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
          <img src="https://img.freepik.com/free-photo/takeaway-food-groceries-delivery-covid19-contactless-orders-concept-cheerful-smiling-bearded-courier-red-uniform-cap-bring-bottled-water-office-house-look-away-joyful_1258-108120.jpg?size=626&ext=jpg&ga=GA1.1.49302222.1698163098&semt=ais"
           alt=""
          />
        </div>
            Your Order is processing in shop.</h1>
        ) : data?.status === "Transferred to delivery partner" ? (
          <h1 className="text-[20px] text-center">
             <div className="flex mx-4 -mt-6 h-40  overflow-hidden items-center justify-center rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
          <img src="https://img.freepik.com/free-photo/takeaway-food-groceries-delivery-covid19-contactless-orders-concept-cheerful-smiling-bearded-courier-red-uniform-cap-bring-bottled-water-office-house-look-away-joyful_1258-108120.jpg?size=626&ext=jpg&ga=GA1.1.49302222.1698163098&semt=ais"
           alt=""
          />
        </div>
            Your Order is on the way for delivery partner.
          </h1>
        ) : data?.status === "Shipping" ? (
          <h1 className="text-[20px] text-center">
             <div className="flex mx-4 -mt-6 h-40  overflow-hidden items-center justify-center rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
          <img src="https://img.freepik.com/free-photo/takeaway-food-groceries-delivery-covid19-contactless-orders-concept-cheerful-smiling-bearded-courier-red-uniform-cap-bring-bottled-water-office-house-look-away-joyful_1258-108120.jpg?size=626&ext=jpg&ga=GA1.1.49302222.1698163098&semt=ais"
           alt=""
          />
        </div>
            Your Order is on the way with our delivery partner.
          </h1>
        ) : data?.status === "Received" ? (
          <h1 className="text-[20px]">
            Your Order is in your city. Our Delivery man will deliver it.
          </h1>
        ) : data?.status === "On the way" ? (
          <h1 className="text-[20px]">
            Our Delivery man is going to deliver your order.
          </h1>
        ) : data?.status === "Delivered" ? (
          <h1 className="text-[20px] text-center">
        <div className="flex mx-4 -mt-6 h-40  overflow-hidden items-center justify-center rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
          <img src="https://img.freepik.com/free-photo/takeaway-food-groceries-delivery-covid19-contactless-orders-concept-cheerful-smiling-bearded-courier-red-uniform-cap-bring-bottled-water-office-house-look-away-joyful_1258-108120.jpg?size=626&ext=jpg&ga=GA1.1.49302222.1698163098&semt=ais"
           alt=""
          />
        </div>
            Your order is delivered!</h1>
        ) : data?.status === "Processing refund" ? (
          <h1 className="text-[20px]">Your refund is processing!</h1>
        ) : data?.status === "Refund Success" ? (
          <h1 className="text-[20px]">Your Refund is success!</h1>
        ) : null}
      </>
    </div>
  
  );
};

export default TrackOrder;
