import React, { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrdersOfUser } from "../redux/actions/order";
import { server } from "../server";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import axios from "axios";
import { toast } from "react-toastify";
import { RxCross1 } from "react-icons/rx";


const UserOrderDetails = () => {
  const { orders } = useSelector((state) => state.order);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [comment, setComment] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [rating, setRating] = useState(1);

  const { id } = useParams();

  useEffect(() => {
    dispatch(getAllOrdersOfUser(user._id));
  }, [dispatch,user._id]);

  const data = orders && orders.find((item) => item._id === id);

  const reviewHandler = async (e) => {
    await axios
      .put(
        `${server}/product/create-new-review`,
        {
          user,
          rating,
          comment,
          productId: selectedItem?._id,
          orderId: id,
        },
        { withCredentials: true }
      )
      .then((res) => {
        toast.success(res.data.message);
        dispatch(getAllOrdersOfUser(user._id));
        setComment("");
        setRating(null);
        setOpen(false);
      })
      .catch((error) => {
        toast.error(error);
      });
  };
  
 

  return (
    <div className=" w-full px-4 !overflow-scroll h-[55vh]">
     
   
      

      <div className="w-full flex items-center justify-center pt-6">
        <h5 className="text-[#1129e084] max-400px:text-[12px] max-500px:text-[13px] max640px:text-[18px] max-768px:text-[20px] ">
          Order ID: <span className="mr-2">#{data?._id?.slice(0, 8)}</span><span className="mr-2">|</span>
        </h5>
        <h5 className="text-[#00000084] max-400px:text-[12px] max-500px:text-[17px] max640px:text-[18px] max-768px:text-[20px]">
          Ordered on: <span>{data?.createdAt?.slice(0, 10)}</span>
        </h5>
      </div>
      <hr />

      {/* order items */}
     <br />
      {data &&
        data?.cart.map((item, index) => {
          return(
          <div className="w-full flex items-start mb-5">
            <img
              src={`${item.images[0]?.url}`}
              alt=""
              className="w-[70px] h-[60px]"
            />
            
            <div className="w-full">
              <h5 className="pl-3 text-[20px] max-400px:text-[12px]">{item.name}</h5>
              <h5 className="pl-3 text-[20px] text-[#00000091] max-400px:text-[13px]">
                P{item.discountPrice} x {item.qty}
              </h5>
              <hr />
            </div>
            
            {!item.isReviewed && data?.status === "Delivered" ?  <div
                className="w-[150px]  border h-[50px] my-3 flex items-center shadow-md justify-center rounded-xl cursor-pointer text-orange-600 max-400px:h-[30px] 320px:h-[30px]"
                onClick={() => setOpen(true) || setSelectedItem(item)}
              >
               <h4 className=" max-400px:text-[10px] max-500px:text-[11px] max-640px:text-[12px] max-768px:text-[13px]">Write a review</h4> 
              </div> : (
             null
            )}
          </div>
          
          )
         })}

      {/* review popup */}
      {open && (
        <div className="w-full fixed top-0 left-0 h-screen bg-[#0005] z-50 flex items-center justify-center">
          <div className="w-[50%] h-min bg-[#fff] shadow rounded-md p-3 max-400px:w-[90%]  max-500px:w-[90%]  max-640px:w-[90%]  max-768px:w-[90%]">
            <div className="w-full flex justify-end p-3">
              <RxCross1
                size={20}
                onClick={() => setOpen(false)}
                className="cursor-pointer"
              />
            </div>
            <h2 className="text-[30px] font-[500] font-Poppins text-center max-400px:text-[15px] max-500px:text-[15px] max-640px:text-[20px] max-768px:text-[25px]">
              Hi ! {data?.user?.name} <br />Please Give me a Review🌟
            </h2>
            <br />
            <div className="w-full flex">
              <img
                src={`${selectedItem?.images[0]?.url}`}
                alt=""
                className="w-[80px] h-[80px]"
              />
              <div>
                <div className="pl-3 max-400px:text-[14px] max-500px:text-[14px] max-640px:text-[15px] max-768px:text-[18px]">{selectedItem?.name}</div>
                <h4 className="pl-3 max-400px:text-[15px] max-500px:text-[15px] max-640px:text-[16px] max-768px:text-[19px] text-gray-500">
                  P{selectedItem?.discountPrice} x {selectedItem?.qty}
                </h4>
              </div>
            </div>

            <br />
            {/* ratings */}
            <h5 className="pl-3 max-400px:text-[16px] max-500px:text-[17px] max-640px:text-[18px] max-768px:text-[20px] font-[500]">
              Give a Rating <span className="text-red-500">*</span>
            </h5>
            <div className="flex w-full ml-2 pt-1">
              {[1, 2, 3, 4, 5].map((i) =>
                rating >= i ? (
                  <AiFillStar
                    key={i}
                    className="mr-1 cursor-pointer"
                    color="rgb(246,186,0)"
                    size={20}
                    onClick={() => setRating(i)}
                  />
                ) : (
                  <AiOutlineStar
                    key={i}
                    className="mr-1 cursor-pointer"
                    color="rgb(246,186,0)"
                    size={20}
                    onClick={() => setRating(i)}
                  />
                )
              )}
            </div>
            <br />
           
            <div className="w-full ml-3">
              <label className="block text-[20px] font-[500] max-400px:text-[15px] max-500px:text-[15px] max-640px:text-[16px] max-768px:text-[19px]">
                Write a comment
                <span className="ml-1 font-[400] max-400px:text-[15px] max-500px:text-[15px] max-640px:text-[16px] max-768px:text-[19px] text-[#00000052]">
                  (optional)
                </span>
              </label>
              <textarea
                name="comment"
                id=""
                cols="20"
                rows="5"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="🥰 How was your product? write your expresion about it!"
                className="mt-2 w-[95%] border p-2 outline-none"
              ></textarea>
            </div>
            <div
              className="w-[100px] bg-blue-500 h-[35px] my-1 flex items-center text-white justify-center rounded-xl cursor-pointer ml-2"
              onClick={rating > 1 ? reviewHandler : null}
            >
              🤩Submit
            </div>
          </div>
        </div>
      )}

      <div className="border-t w-full text-right">
        <h5 className="pt-3 text-[18px]">
          Total Price: <strong>P{data?.totalPrice}</strong>
        </h5>
      </div>
    
      
      
    
     
    </div>
  );
};

export default UserOrderDetails;
