import React from "react";
import styles from "../../styles/styles";
import CountDown from "./CountDown";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addTocart } from "../../redux/actions/cart";
import { toast } from "react-toastify";
import { IoIosCart} from "react-icons/io";

const EventCard = ({ active, data }) => {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const addToCartHandler = (data) => {
    const isItemExists = cart && cart.find((i) => i._id === data._id);
    if (isItemExists) {
      toast.error("Item already in cart!");
    } else {
      if (data.stock < 1) {
        toast.error("Product stock limited!");
      } else {
        const cartData = { ...data, qty: 1 };
        dispatch(addTocart(cartData));
        toast.success("Item added to cart🛒");
      }
    }
  }
  return (
    <div
      className={`w-full block bg-white rounded-lg ${
        active ? "unset" : "mb-5"
      } lg:flex p-4 `}
    >
      {/* <div className="flex"><IoMdRibbon color="red" size={40}/></div> */}
      <div className="w-full lg:-w[50%] max-400px:w-full max-500px:w-full max-640px:w-full max-768px:w-full max-400px:flex max-500px:flex max-640px:flex max-768px:flex 
       max-400px:items-center max-400px:justify-center m-auto">
      <CountDown data={data} />
        <img src={`${data.images[0]?.url}`} alt="" className="max-400px:h-[110px] max-400px:w-[130px] max-500px:h-[110px] max-500px:w-[130px] max-640px:h-[110px] max-640px:w-[130px] max-768px:h-[110px] max-768px:w-[130px]" />
      </div>
      <div className="w-full lg:[w-50%] flex flex-col justify-center  ">
      <div className=" flex items-center justify-start">
          <h5 className={"text-[15px] max-400px:text-[12px] max-500px:text-[13px] max-640px:text-[13px] max-768px:text-[15px] text-gray-500 pt-0 pb-0.5 text-shadow flex"}><h4 className="text-orange-500 flex pr-2">Colortype:</h4> {data.color}</h5>
          </div>
        <h2 className={`${styles.productTitle} max-400px:text-[13px] max-500px:text-[15px] max-640px:text-[15px] max-768px:text-[15px]`}>{data.name}</h2>
        <hr />
        <p className="max-400px:hidden">{data.description}</p>
          {/* color type */}
    
        <div className="flex py-2 justify-between">
        <div className="flex">
        <Link to={`/shop/preview/${data?.shop._id}`}>
      <img
              src={`${data?.shop.avatar?.url}`}
              alt=""
              className=" flex w-[55px] h-[55px] max-400px:w-[50px] border rounded-full p-1  max-400px:h-[50px] max-500px:w-[50px] max-500px:h-[50px] max-640px:w-[50px] max-640px:h-[50px]  rounded-full cursor-pointer mr-1"
            />
        </Link> 
        
        </div> 
          <div className="flex mt-5">
            <h5 className="font-[500] text-[18px] text-red-500 pr-3 line-through">
            ₱{data.originalPrice}
            </h5>
            <h5 className="font-bold text-[20px] text-[#333] font-Roboto">
            P{data.discountPrice}
            </h5>
          
          </div>
          <hr />
          <div className="flex items-center justify-center">
          
          <div className="text-[#000]  w-[100px] bg-transparent h-[40px] shadow-md flex items-center justify-center bg-blue-500  border-[2px] rounded-xl cursor-pointer" onClick={() => addToCartHandler(data)}><IoIosCart color="orange" size={20} className="pr-1" /> 
          <h2 className="text-[12px] text-blue-500">Add to cart</h2></div>
        </div>
        </div>
        <hr />
   
        
      </div>
    </div>
  );
};

export default EventCard;
