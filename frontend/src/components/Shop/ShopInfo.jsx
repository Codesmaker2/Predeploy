import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { server } from "../../server";
// import styles from "../../styles/styles";
import Loader from "../Layout/Loader";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsShop } from "../../redux/actions/product";
import { AiFillEdit } from "react-icons/ai";
import {  BiArrowToLeft, BiLogOut } from "react-icons/bi";
import { RxCaretLeft } from "react-icons/rx";



const ShopInfo = ({ isOwner }) => {
  const [data,setData] = useState({});
  const {products} = useSelector((state) => state.products);
  const [isLoading,setIsLoading] = useState(false);
  const {id} = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProductsShop(id));
    setIsLoading(true);
    axios.get(`${server}/shop/get-shop-info/${id}`).then((res) => {
     setData(res.data.shop);
     setIsLoading(false);
    }).catch((error) => {
      console.log(error);
      setIsLoading(false);
    })
  }, [dispatch,id])
  

  const logoutHandler = async () => {
    axios.get(`${server}/shop/logout`,{
      withCredentials: true,
    });
    window.location.reload();
  };

  const totalReviewsLength =
    products &&
    products.reduce((acc, product) => acc + product.reviews.length, 0);

  const totalRatings = products && products.reduce((acc,product) => acc + product.reviews.reduce((sum,review) => sum + review.rating, 0),0);

  const averageRating = totalRatings / totalReviewsLength || 0;

  return (
   <>
   {
    isLoading  ? (
      <Loader />
    ) : (
      <div>
      <div className="w-full p-2 ">
       <Link to={"/"}><RxCaretLeft size={30} className="text-blue-500  500px:hidden 800px:hidden"/></Link>
        <div className="w-full flex item-center justify-center">
          <img
            src={`${data.avatar?.url}`}
            alt=""
            className=" 800px:w-[130px] 800px:h-[130px]  w-[90px] h-[90px] object-cover border rounded-full"
          />
        </div>
        <h3 className="text-center py-2 text-[15px]">{data.name}</h3>
        <hr />
        <p className="text-[12px] text-[#000000a6]  flex items-center">
          {data.description}
        </p>
      </div>
      <div className="p-2">
        <h5 className="font-[600] text-[14px] ">Address</h5>
        <h4 className="text-[#000000a6] text-[12px]">{data.address}</h4>
      </div>
      <div className="p-2">
        <h5 className="font-[600] text-[14px]">Phone Number</h5>
        <h4 className="text-[#000000a6] text-[12px]">{data.phoneNumber}</h4>
      </div>
      <div className="p-2">
        <h5 className="font-[600] text-[14px]">Total Post Products</h5>
        <h4 className="text-[#000000a6] text-[12px]">{products && products.length}</h4>
      </div>
      <div className="p-2">
        <h5 className="font-[600] text-[14px]">Shop Ratings</h5>
        <h4 className="text-[#000000b0] text-[12px]">{averageRating}/5</h4>
      </div>
      <div className="p-2">
        <h5 className="font-[600] text-[14px]">Shop was Created On</h5>
        <h4 className="text-[#000000b0] text-[12px]">Date : {data?.createdAt?.slice(0, 10)}</h4>
      </div>
      <hr />
      
      {isOwner && (
        <div className="mt-[100px] py-3 px-4">
           <Link to="/settings">
           <div className={"w-full flex items-center justify-center border border-blue-700 !h-[42px] !rounded-[5px] hover:bg-blue-500 "}>
            <span className="text-blue-500 hover:text-white"> <div className="flex"><AiFillEdit size={20} />Edit Shop</div> </span>
          </div>
           </Link>
           <br />
          <div className={"w-full flex items-center justify-center border border-gray-500  !h-[42px] !rounded-[5px] hover:bg-gray-500"}
          onClick={logoutHandler}
          >
            <span className="text-gray-500 hover:text-white "><div className="flex"><BiLogOut size={20} />Log Out</div></span>
          </div>
        </div>
        
      )}
    </div>
    
    )
   }
   </>
  );
};

export default ShopInfo;
