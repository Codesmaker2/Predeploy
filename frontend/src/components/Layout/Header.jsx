import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../../styles/styles";
import { categoriesData} from "../../static/data";
import {
 
  AiFillHeart,
  AiOutlineInstagram,
  AiOutlineProfile,
  AiOutlineSearch,
  
} from "react-icons/ai";
import { IoIosArrowDown,  IoLogoYoutube } from "react-icons/io";
import { BiCart,  BiMenuAltRight,  } from "react-icons/bi";
import {  CgProfile} from "react-icons/cg";
import DropDown from "./DropDown";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import Cart from "../cart/Cart";
import Wishlist from "../Wishlist/Wishlist";
import { RxCaretDown, RxCaretUp, RxCross1, RxHamburgerMenu} from "react-icons/rx";
import {  MdFacebook } from "react-icons/md";
import {  BsDropletFill } from "react-icons/bs";
import { HiQuestionMarkCircle } from "react-icons/hi";
import { RiFacebookCircleFill, RiShutDownLine, RiYoutubeFill } from "react-icons/ri";
import axios from "axios";
import { toast } from "react-toastify";
import { server } from "../../server";


const Header = ({ activeHeading }) => {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  //const { isSeller } = useSelector((state) => state.seller);
  const { wishlist } = useSelector((state) => state.wishlist);
  const { cart } = useSelector((state) => state.cart);
  const { allProducts } = useSelector((state) => state.products);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState(null);
  const [active, setActive] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [openWishlist, setOpenWishlist] = useState(false);
  const [open, setOpen] = useState(false);
  const [isSubItemsOpen, setSubItemsOpen] = useState(false);
  const [isItemsOpen, setItemsOpen] = useState(false);
  const navigate = useNavigate();



  const refreshPage = () => {
    window.location.reload();
  };

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const filteredProducts =
      allProducts &&
      allProducts.filter((product) =>
        product.name.toLowerCase().includes(term.toLowerCase())
      );
    setSearchData(filteredProducts);
    if (searchData && searchData.length === 0){
      setSearchData(!allProducts)
    } 
    
    
  };

  window.addEventListener("scroll", () => {
    if (window.scrollY > 70) {
      setActive(true);
    } else {
      setActive(false);
    }
  });

  const toggleSubItems = () => {
    setSubItemsOpen(!isSubItemsOpen);
  
  }
  
  const toggleItems = () => {
    setItemsOpen(!isItemsOpen);
  
  }
  
  const logoutHandler = () => {
    
    axios
      .get(`${server}/user/logout`, { withCredentials: true })
      .then((res) => {
        toast.success(res.data.message);
        window.location.reload(true);
        navigate("/login");
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  };

  return (
    <>
    <div className="bg-blue-500 800px:w-[100%] h-1 max-400px:hidden max-500px:hidden max-640px:hidden  max-768px:hidden" ></div>
   
    
      <div className={`${styles.section}`}>
        <div className="hidden 800px:h-[50px] 1024px:my-[20px]  items-center justify-between 800px:hidden">
          <div>
            <Link to="/">
              <img
                src="https://see.fontimg.com/api/renderfont4/ow59x/eyJyIjoiZnMiLCJoIjozMywidyI6MTAwMCwiZnMiOjMzLCJmZ2MiOiIjMUE1N0IwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/TVdSU01T/airtravelerspersonaluse-bdit.png"
                alt=""
                className="mr-5"
                
              />
            </Link>
          </div>
          <div className="relative flex overflow-x-hidden">
  <div className="py-12 animate-marquee whitespace-nowrap">
    <span className="text-2xl mx-4">(02)-888888 / 09123456789 | OPEN 9am-10pm (Mon-Sun)</span>
    <span className="text-2xl mx-4">9123456789</span>
    <span className="text-2xl mx-4">|</span>
    <span className="text-2xl mx-4">OPEN 9am-10pm</span>
    <span className="text-2xl mx-4">(Mon-Sun)</span>
  </div>

  <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
  <span className="text-2xl mx-4">(02)-888888 / 09123456789 | OPEN 9am-10pm (Mon-Sun)</span>
    <span className="text-2xl mx-4">9123456789</span>
    <span className="text-2xl mx-4">|</span>
    <span className="text-2xl mx-4">OPEN 9am-10pm</span>
    <span className="text-2xl mx-4">(Mon-Sun)</span>
  </div>
</div>

          
          <div> <h4 className="font-Roboto text-[15px] max-400px:hidden ml-5 ">Hi👋 Welcome,<div className="flex"><CgProfile color="blue" size={20} className="mr-1"/> {user?.name}</div></h4></div>
          
          <div className="flex items-center ">
            <MdFacebook size={30} color="blue" className="mr-2 "/>
            <AiOutlineInstagram size={27} color="white" className="mr-2 bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] rounded-full "/>
            <IoLogoYoutube size={30} color="red" className="rounded-full"/>
          </div>
          {/* search box */}
          <div className="w-[30%] relative 800px:hidden">
            <input
              type="text"
              placeholder="Search Product..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="h-[40px] w-full px-2 border-blue-500 border-[2px] rounded-full shadow-xl"
            />
            <AiOutlineSearch
              size={30}
              className="absolute right-2 top-1.5 cursor-pointer text-blue-500"
            />


            
            {searchData && searchData.length !== 0 ? (
              <div className="absolute min-h-[30vh] w-full bg-slate-50 shadow-sm-2 z-[9] p-4  border-b-[5px] rounded-b-[20px] ">
                {searchData &&
                  searchData.map((i,index) => {
                    return (
                      <Link to={`/product/${i._id}`}>
                        <div className="w-full flex items-start-py-3">
                          <img
                            src={`${i.images[0]?.url}`}
                            alt=""
                            className="w-[40px] h-[40px] mr-[10px]"
                          />
                          <h1>{i.name}</h1>
                        </div>
                      </Link>
                    );
                  })}
              </div>
            )  :null}
          </div>
          

       
        </div>
      </div>
      
      <div
        className={`${
          active === true ? "shadow-sm fixed top-0 left-0 z-10" : null
        } transition hidden  items-center justify-between w-full bg-blue-500 h-[70px] 800px:hidden`}
      >
        <div
          className={`${styles.section} relative ${styles.noramlFlex} justify-between`}
        >
          {/* categories */}
          <div onClick={() => setDropDown(!dropDown)}>
            <div className="relative h-[60px] mb-[10px] w-[270px]  1000px:block">
              <BsDropletFill size={40} className="absolute top-3 left-5 text-blue-500" />
              <button
                className={`h-[100%] w-[80px] flex justify-between items-center pl-10 bg-white font-sans text-lg font-[500] rounded-b-xl select-none  border shadow-xl p-5`}
              >
                
              </button>
              <IoIosArrowDown
                size={20}
                className="absolute right-4 top-10 left-7 cursor-pointer text-blue-700 max-400px:hidden max-500px:hidden max-640px:hidden  max-768px:hidden max-800px:hidden"
                onClick={() => setDropDown(!dropDown)}
                title="Product & Category"
              />
              {dropDown ? (
                <DropDown className="bg-blue-500 max-400px:hidden max-500px:hidden max-640px:hidden  max-768px:hidden max-800px:hidden"
                  categoriesData={categoriesData}
                  setDropDown={setDropDown}
                  
                />
              ) : null}
            </div>
          </div>

             {/* contact
             <div className=" flex mr-10">
              <span className="text-[#fff] flex ml-4 mr-4 text-[15px]">
                <AiOutlineContacts className="mr-1 flex items-center text-xl " />
                <h1 className="text-[20px]">(02)-888888 / 09123456789 | OPEN 9am-10pm (Mon-Sun)</h1>
              </span>
            </div> */}


          {/* navitems */}
          <div className={`${styles.noramlFlex}`}>
            <Navbar active={activeHeading} />
          </div>

          <div className="flex ">
            <div className={`${styles.noramlFlex} 800px:hidden`}>
              <div
                className="relative cursor-pointer mr-[15px]"
                onClick={() => setOpenWishlist(true)}
              >
                <AiFillHeart size={30} color="rgb(255 255 255 / 83%)" />
                <span className="absolute right-0 top-0 rounded-full bg-[#e43840] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                  {wishlist && wishlist.length}
                </span>
              </div>
            </div>

            <div className={`${styles.noramlFlex} 800px:hidden `}>
              <div
                className="relative cursor-pointer mr-[15px]"
                onClick={() => setOpenCart(true)}
              >
                <BiCart
                  size={35}
                  color="rgb(255 255 255 / 83%)"
                />
                <span className="absolute right-0 top-0 rounded-full bg-[#e43840] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                  {cart && cart.length}
                </span>
              </div>
            </div>

            <div className={`${styles.noramlFlex}`}>
              <div className="relative cursor-pointer mr-[15px]">
                {isAuthenticated ? (
                  <Link to="/profile">
                    <img
                      src={`${user?.avatar?.url}`}
                      className="w-[30px] h-[30px] 800px:w-[40px] 800px:h-[40px] rounded-full"
                      alt=""
                    />
                  </Link>
                ) : (
                  <Link to="/login">
                    <CgProfile size={30} color="rgb(255 255 255 / 83%)" />
                  </Link>
                )}
              </div>
            </div>

            {/* cart popup */}
            {openCart ? <Cart setOpenCart={setOpenCart} /> : null}

            {/* wishlist popup */}
            {openWishlist ? (
              <Wishlist setOpenWishlist={setOpenWishlist} />
            ) : null}
          </div>
        </div>
      </div>


      {/* mobile header */}
      
      <div
        className={`${
          active === true ? "shadow-sm fixed top-0 left-0 z-10" : null
        }
      w-full h-[70px] bg-blue-800 z-50 top-0 left-0 shadow-sm 800px:hidden`}
      >
        <div className="w-full flex items-center justify-between">
          <div>
            <RxHamburgerMenu
              size={40}
              className="ml-4 mt-2 text-white p-0.5 shadow-sm"
              onClick={() => setOpen(true)}
            />
          </div>
          {/* mobile search */}
          {/* <AiOutlineSearch
              size={25}
              className="relative right-5 left-[200px] top-2 cursor-pointer text-blue-500"
            /> */}
          <div className="my-5 max-400px:w-[65%] max-500px:w-[80%] max-640px:w-[80%] max-768px:w-[80%] m-auto h-[20px] relative] max-400px:ml-3 max-500px:ml-3 max-640px:ml-3 max-768px:ml-3">
                <input
                  type="search"
                  placeholder="Search Product..."
                  className="h-[35px] w-full px-2 bg-white border-[2px] rounded-full"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
                
                
                {searchData && (
                  <div className="absolute bg-[#fff] z-10 shadow w-full left-0 p-3" >
                    {searchData.map((i,index) => {
                      // const d = i.name;
                      
                      // const Product_name = d.replace(/\s+/g, "-");
                      return (
                        <Link to={`/product/${i._id}`}>
                          <div className="flex items-center">
                            <img
                              src={i.images[0]?.url}
                              alt=""
                              className="w-[50px] mr-2"
                          
                            />
                            <h5 className="max-400px:text-[12px]">{i.name}</h5>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                  
                )}
                
              </div>
           <div className="relative mr-[20px] mt-3 bg-transparent">
                 <Link to={"/"}><img src="https://i.ibb.co/ZVVMVrH/Lcd5nd-Bri-removebg-preview.png" onClick={refreshPage} alt=""
              className=" h-[50px] w-[50px] bg-none ml-1"/></Link>
              </div>
             
          {/* <div>
            <div
              className="relative mr-[20px]"
              onClick={() => setOpenCart(true)}
            >
              <BiCart className="text-white mt-3"
              size={30} />
              <span className="absolute right-0 top-0 rounded-full bg-[#ec3a3a] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px]  leading-tight text-center">
                {cart && cart.length}
              </span>
            </div>
          </div> */}
          {/* cart popup */}
          {/* {openCart ? <Cart setOpenCart={setOpenCart} /> : null} */}

          {/* wishlist popup */}
          {/* {openWishlist ? <Wishlist setOpenWishlist={setOpenWishlist} /> : null} */}
        </div>

        {/* mobile header sidebar */}
        {open && (
          
          <div
            className={`fixed w-full bg-[#0000005f] z-20 h-full top-0 left-0`}
          >
            
            <div className="fixed max-400px:w-[70%] max-500px:w-[60%] max-640px:w-[60%] max-768px:w-[60%] bg-gray-100 h-screen top-0 left-0 z-10 overflow-y-scroll">
            <div className="bg-blue-500 w-full h-2"></div>
            <div className="w-full justify-end flex   ">
                
                <RxCross1
                  size={30}
                  className=" pt-2 text-blue-500"
                  onClick={() => setOpen(false)}
                />
              </div>


               <div className="w-50 bg-gray-100 text-white">
      <div className="">
      <div className="flex w-full justify-center h-[10%] mb-2  ">
                {isAuthenticated ? (
                  <div className=" flex items-center justify-center">
                    <Link to="/profile">
                      <img
                        src={`${user.avatar?.url}`}
                        alt=""
                        className="w-[88px] h-[60px] rounded-full border-[3px] border-[#4357da]"
                      />
                    </Link>
                    
                  <div className="w-full"> <h4 className="text-[11px] text-gray-600 ml-2"> Name: {user.name}</h4>
               <h4 className="text-[11px] text-gray-600 ml-2"> Gender: {user.gender}</h4>
               <h4 className="text-[11px] text-gray-600 ml-2"> CP#: {user.phoneNumber}</h4>
               </div>
                 
                  </div>
                  
                  
                ) : (
                  <>
                    <Link
                      to="/login"
                      className="text-[18px] pr-[10px] text-[#000000b7]"
                    >
                      Login |
                    </Link>
                    <Link
                      to="/sign-up"
                      className="text-[18px] text-[#000000b7]"
                    >
                      Sign up
                    </Link>
                  </>
                )}
              </div>
              <hr />
            
              <hr />
      </div>
      <hr />
      <ul className="py-3">
        <li className="pl-4 pr-2 ">
          <div  className="text-blue-700 flex">
            <BiMenuAltRight size={24}/> Dashboard Menu <Link to={"/faq"}><HiQuestionMarkCircle size={22} className="ml-5 "/></Link>
            
          </div>
          <hr />
          
            <ul className="pl-8 ">
            <Link to={"/"}><li className="py-2 cursor-pointer hover:p-2  hover:text-blue-500 text-gray-500"><div className="flex">🏠 Home</div>
              </li></Link>
              <hr />
              <Link to={"/best-selling"}><li className="py-2 cursor-pointer hover:p-2  hover:text-blue-500 text-gray-500"><div className="flex">🛒 Best Item Order</div>
              </li></Link>
              <hr />
              <Link to={"/products"}><li className="py-2 cursor-pointer hover:p-2  hover:text-blue-500 text-gray-500"><div className="flex">🧴 Gallon | Container</div>
              </li></Link>
              <hr />
              <Link to={"/events"}><li className="py-2 cursor-pointer hover:p-2  hover:text-blue-500 text-gray-500"><div className="flex">🎁 Offer's Promo</div>
              </li></Link>
              <hr />
            </ul>
          
        </li>
        
        <li className="pl-4 pr-2 py-2 ">
          <div onClick={toggleItems} className="text-blue-700 flex">
           <AiOutlineProfile  size={20} className="mr-1"/>Profile Dashboard
            {isItemsOpen ? (
            <RxCaretUp className="h-6 w-6 ml-2 inline-block"/>
            ) : (
              <RxCaretDown className="h-6 w-6 ml-2 inline-block"/>
            )}
          </div>
          <hr />
          {isItemsOpen && (
            <ul className="pl-8 ">
               <Link to={"/profile"}><li className="py-2 cursor-pointer hover:p-2  hover:text-blue-500 text-gray-500"><div className="flex">👨‍⚖️ Profile</div>
              </li></Link>
              <hr />
              <Link to={"/user-orders"}><li className="py-2 cursor-pointer hover:p-2  hover:text-blue-500 text-gray-500 " ><div className="flex">👜 Orders</div>
              </li></Link>
              <hr />
              <Link to={"/user-trackorders"}><li className="py-2 cursor-pointer hover:p-2  hover:text-blue-500 text-gray-500"><div className="flex">🔗 Track Orders </div>
              </li></Link>
              <hr />
              <Link to={"/user-refundOrders"}><li className="py-2 cursor-pointer hover:p-2  hover:text-blue-500 text-gray-500"><div className="flex">↩️ Refund </div>
              </li></Link>
              <hr />
              <Link to={"/user-address"}><li className="py-2 cursor-pointer hover:p-2  hover:text-blue-500 text-gray-500"><div className="flex">📌 Address </div>
              </li></Link>
              <hr />
              <Link to={"/user-changepassword"}><li className="py-2 cursor-pointer hover:p-2  hover:text-blue-500 text-gray-500"><div className="flex">🔐 Change Password </div>
              </li></Link>
              <hr />
            
            </ul>
          )}
        </li>

        <li className="pl-4 pr-2 py-2  ">
          <div onClick={toggleSubItems} className="text-blue-700 flex">
           📨 Chat Inbox
            {isSubItemsOpen ? (
            <RxCaretUp className="h-6 w-6 ml-2 inline-block"/>
            ) : (
              <RxCaretDown className="h-6 w-6 ml-2 inline-block"/>
            )}
          </div>
          <hr />
          {isSubItemsOpen && (
            <ul className="pl-8 cursor-pointer">
               <Link to={"/inbox"}><li className="py-2 cursor-pointer hover:p-2  hover:text-blue-500 text-gray-500"><div className="flex">💬 Message</div>
              </li></Link>
              <hr />
             
            </ul>
          )}
         
        </li>
        <div  className="text-gray-500 flex mt-4 pl-4 " >
            <RiShutDownLine  className="mr-1 text-[red]" size={24} onClick={logoutHandler} /> Logout
            
          </div>
          
          
        
        
      </ul>
      <br />
      <div  className="text-gray-500 flex mt-4  justify-evenly" >
            <Link to={"https://www.facebook.com"}><RiFacebookCircleFill  className="mr-1 text-[blue]" size={24} /><h5 className="text-[7px]">Facebook</h5></Link>
            <Link to={"https://www.instagram.com"}><AiOutlineInstagram  className="mr-1 text-white bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] rounded-full" size={24} /> <h5 className="text-[7px]">Instagram</h5></Link>
            <Link to={"https://www.youtube.com"}><RiYoutubeFill  className="mr-1 text-[red]" size={24}  /><h5 className="text-[7px]">Youtube</h5></Link>
            
          </div>
    </div>
       <hr />
             </div>
             
          </div>
        )}
      </div>
      
    </>
  );
};

export default Header;
