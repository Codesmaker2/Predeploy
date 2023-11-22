import React, { useState } from "react";
import { RxCross1, RxCross2 } from "react-icons/rx";
import { IoBagHandle} from "react-icons/io5";
import { HiOutlineMinus, HiPlus } from "react-icons/hi";
import styles from "../../styles/styles";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addTocart, removeFromCart } from "../../redux/actions/cart";
import { toast } from "react-toastify";
import { BsCartXFill } from "react-icons/bs";
import { RiInkBottleFill, RiMedicineBottleLine } from "react-icons/ri";

const Cart = ({ setOpenCart }) => {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeFromCartHandler = (data) => {
    dispatch(removeFromCart(data));
  };

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.qty * item.discountPrice,
    0
  );

  const quantityChangeHandler = (data) => {
    dispatch(addTocart(data));
  };

  return (
    <div className="fixed !overflow-scroll top-0 left-0 w-full inset-0  bg-[#0000004b] z-10">
    
      <div className="fixed top-0 right-0 h-full max-400px:w-[80%] max-500px:w-[80%] max-640px:w-[80%] max-768px:w-[80%] 800px:w-[25%] bg-white flex flex-col overflow-y-scroll justify-between shadow-sm ">
        {cart && cart.length === 0 ? (
          <div className="w-full h-screen flex items-center justify-center" onClick={() => setOpenCart(false)}>
         <BsCartXFill size={40} color="gray" className=" animate-pulse"/>
       
    
            <h5 className="text-gray-500 animate-pulse">Empty Cart!</h5>
            
          </div>
        ) : (
          <>
            <div>
              <div className="flex w-full justify-between pt-5 pr-5 shadow-lg items-center rounded-b-[20px] text-[15px]">
              <div className={`${styles.noramlFlex}items-center justify-between text-[15px]`}><h1 className="text-[17px] pl-2 font-semibold">🛒 Cart List</h1></div>
              
              </div>
              {/* Item length */}
              <div className={`${styles.noramlFlex} p-0 pt-10 items-center justify-center`}>
                <IoBagHandle size={25} className="text-blue-600" />
                <h5 className="flex items-center justify-end pl-2 text-[17px] font-[500] ">
                  ({cart && cart.length}) Cart Items List <RxCross2
                  size={25}
                  className="cursor-pointer text-blue-600 ml-20 justify-end"
                  onClick={() => setOpenCart(false)}
                />
                  
                </h5>
                
              </div>
             

              {/* cart Single Items */}
              <br />
              <div className="w-full border-t">
                {cart &&
                  cart.map((i, index) => (
                    <CartSingle
                      key={index}
                      data={i}
                      quantityChangeHandler={quantityChangeHandler}
                      removeFromCartHandler={removeFromCartHandler}
                    />
                  ))}
              </div>
            </div>

            <div className="px-5 mb-3">
              {/* checkout buttons */}
              <Link to="/checkout">
                <div
                  className={`h-[45px] flex items-center justify-center w-[100%] bg-blue-500 rounded-full`}
                >
                  <h1 className="text-[#fff] text-[18px] font-[600]">
                    Checkout Now (₱{totalPrice})
                  </h1>
                </div>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const CartSingle = ({ data, quantityChangeHandler, removeFromCartHandler }) => {
  const [value, setValue] = useState(data.qty);
  const totalPrice = data.discountPrice * value;
  

  const increment = (data) => {
    if (data.stock <= value) {
      toast.error("Product stock limited!");
    } else {
      setValue(value + 1);
      const updateCartData = { ...data, qty: value + 1 };
      quantityChangeHandler(updateCartData);
    }
  };

  const decrement = (data) => {
    setValue(value === 1 ? 1 : value - 1);
    const updateCartData = { ...data, qty: value === 1 ? 1 : value - 1 };
    quantityChangeHandler(updateCartData);
  };

  return (
    <div className="border-b p-4">
       {/* color type */}
       <div className=" flex items-center justify-start">
                    <h5 className={"text-[15px] text-gray-500 pt-0 pb-0.5 text-shadow flex"}><h4 className="text-orange-500 flex pr-2">Colortype:</h4> {data.color}</h5>
                  </div>
      <div className="w-full flex items-center">
        
        <div>
          <div
            className={`bg-blue-500 border border-blue-700 rounded-full w-[25px] h-[25px] ${styles.noramlFlex} justify-center cursor-pointer`}
            onClick={() => increment(data)}
          >
            <HiPlus size={18} color="#fff" />
          </div>
          <span className="pl-[10px]">{data.qty}</span>
          <div
            className="bg-blue-400 rounded-full w-[25px] h-[25px] flex items-center justify-center cursor-pointer"
            onClick={() => decrement(data)}
          >
            <HiOutlineMinus size={16} color="white" />
          </div>
        </div>
        <img
          src={`${data?.images[0]?.url}`}
          alt=""
          className="w-[130px] max-400px:w-[80px] max-500px:w-[80px] max-640px:w-[80px] max-768px:w-[80px]  h-min ml-2 mr-2 rounded-[5px]"
        />
        <div className="pl-[5px]">
          <h1 className="max-400px:text-[13px] max-500px:text-[13px] max-640px:text-[13px]">{data.name}</h1>
          <h4 className="font-[400] text-[15px] text-[#00000082]">
            P{data.discountPrice} x {value}
          </h4>
          <h4 className="font-[600] text-[17px] pt-[3px] text-[#000000] font-Roboto">
          ₱{totalPrice}
          </h4>
        </div>
        <RxCross1
        size={20}
          className="cursor-pointer"
          onClick={() => removeFromCartHandler(data)}
        />
      </div>
    </div>
  );
};

export default Cart;
