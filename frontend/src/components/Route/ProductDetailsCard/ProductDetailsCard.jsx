import React, { useEffect, useState } from "react";
import {
  
  
 
  AiOutlineShoppingCart,
  
} from "react-icons/ai";
import { RxCross1} from "react-icons/rx";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addTocart } from "../../../redux/actions/cart";
// import {
//   addToWishlist,
//   removeFromWishlist,
// } from "../../../redux/actions/wishlist";
import { BsShopWindow } from "react-icons/bs";


const ProductDetailsCard = ({ setOpen, data }) => {
  const { cart } = useSelector((state) => state.cart);
  const { wishlist } = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const [, setClick] = useState(false);
  //   const [select, setSelect] = useState(false);

 // const handleMessageSubmit = () => {};

  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const incrementCount = () => {
    setCount(count + 1);
  };

  const addToCartHandler = (id) => {
    const isItemExists = cart && cart.find((i) => i._id === id);
    if (isItemExists) {
      toast.error("Item already in cart!");
    } else {
      if (data.stock < count) {
        toast.error("Product stock limited!");
      } else {
        const cartData = { ...data, qty: count };
        dispatch(addTocart(cartData));
        toast.success("Item added to cart 🛒");
      }
    }
  };

  useEffect(() => {
    if (wishlist && wishlist.find((i) => i._id === data._id)) {
      setClick(true);
    } else {
      setClick(false);
    }
  }, [wishlist,data._id]);

  // const removeFromWishlistHandler = (data) => {
  //   setClick(!click);
  //   dispatch(removeFromWishlist(data));
  // };

  // const addToWishlistHandler = (data) => {
  //   setClick(!click);
  //   dispatch(addToWishlist(data));
  // };

  return (
    <div className="bg-[#fff]">
      {data ? (
        <div className="fixed w-full h-screen top-0 left-0 bg-[#00000030] z-40 flex items-center justify-center">
          <div className="w-[90%] 800px:w-[60%] h-[90vh] overflow-y-scroll 800px:h-[45vh] max-400px:h-[65vh]  bg-white rounded-md shadow-sm relative p-4">
            <RxCross1
              size={20}
              className="absolute right-3 top-3 z-50 text-blue-500"
              onClick={() => setOpen(false)}
            />

            <div className="block w-[full] 800px:flex">
              <div className="w-full 800px:w-[50%] ">
                <img src={`${data.images && data.images[0]?.url}`} className="max-400px:w-[100px] max-400px:h-[100px]" alt="" />
               
                {/* <div
                  className={`${styles.button} bg-[#000] mt-4 rounded-[4px] h-11 cursor-pointer`}
                  onClick={handleMessageSubmit}
                >
                  <span className="text-[#fff] flex items-center cursor-pointer">
                    Send Message <AiOutlineMessage className="ml-1" />
                  </span>
                </div> */}
                {/* <h5 className="text-[16px] text-[red] mt-5">(50) Sold out</h5> */}
              </div>
      


              <div className="w-full 800px:w-[50%]  pl-[5px] pr-[5px]">
                <h1 className={`${styles.productTitle} text-[12px]`}>
                  {data.name}
                </h1>
                <hr />
                <p className="text-[11px]">{data.description}</p>
                          
        {/* color type */}
       <div className=" flex items-center justify-start">
          <h5 className={"text-[12px] text-gray-500 pt-0 pb-0.5 text-shadow flex"}><h4 className="text-orange-500 flex pr-2">Colortype:</h4> {data.color}</h5>
          </div>

                <div className="flex pt-3">
                  <h4 className={`${styles.productDiscountPrice}`}>
                    P{data.discountPrice}
                  </h4>
                  <h3 className={`${styles.price}`}>
                    {data.originalPrice ? "P" + data.originalPrice  : null}
                  </h3>
                </div>
                <div className="flex items-center  justify-end pr-3">
                  <div>
                    <button
                      className="bg-gradient-to-r from-blue-400 to-blue-500 text-white font-bold rounded px-4 py-1 shadow-lg hover:opacity-75 transition duration-300 ease-in-out"
                      onClick={decrementCount}
                    >
                      -
                    </button>
                    <span className="border text-gray-800 font-medium px-4 py-1">
                      {count}
                    </span>
                    <button
                      className="bg-gradient-to-r from-blue-400 to-blue-500 text-white font-bold rounded px-4 py-1 shadow-lg hover:opacity-75 transition duration-300 ease-in-out"
                      onClick={incrementCount}
                    >
                      +
                    </button>
                  </div>
                  <div>
                    {/* {click ? (
                      <AiFillHeart
                        size={30}
                        className="cursor-pointer"
                        onClick={() => removeFromWishlistHandler(data)}
                        color={click ? "red" : "#333"}
                        title="Remove from wishlist"
                      />
                    ) : (
                      <AiOutlineHeart
                        size={30}
                        className="cursor-pointer"
                        onClick={() => addToWishlistHandler(data)}
                        title="Add to wishlist"
                      />
                    )} */}
                  </div>
                </div>
                <div
                  className="w-[100px] bg-blue-500 h-[40px] my-3 flex items-center justify-center rounded-xl cursor-pointer"
                  onClick={() => addToCartHandler(data._id)}
                >
                  <span className="text-[#fff] flex items-center text-[12px]">
                    Add to cart <AiOutlineShoppingCart className="ml-1" />
                  </span>
                  
                </div>
                <div className="flex  items-center max-400px:justify-start border">
                  <Link to={`/shop/preview/${data.shop._id}`} className="flex">
                    <img
                      src={`${data.images && data.images[0]?.url}`}
                      alt=""
                      className="w-[50px] h-[50px] rounded-full mr-2"
                    />
                    <div>
                      <h3 className={`${styles.shop_name}`}>
                        {data.shop.name}
                      </h3>
                      <h5 className="pb-3 text-[15px]">{data?.ratings} Ratings</h5>
                    </div>
                  </Link>
                  <div className="flex items-center justify-end"><BsShopWindow size={30} className="max-400px:ml-[120px] 800px:ml-[350px] text-blue-500"/></div>
                </div>
              </div>
              
              
            </div>
            
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ProductDetailsCard;
