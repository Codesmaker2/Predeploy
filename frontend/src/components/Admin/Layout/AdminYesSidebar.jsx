import React from "react";
import { GrUserSettings} from "react-icons/gr";
import { Link } from "react-router-dom";
import { HiOutlineUserGroup } from "react-icons/hi";
import { BsBagCheck, BsShopWindow } from "react-icons/bs";
import { MdDashboard, MdEventAvailable } from "react-icons/md";
import {  AiOutlineShop } from "react-icons/ai";
import { TbBrandProducthunt } from "react-icons/tb";



const AdminSideBar = ({ active }) => {
  return (
    <div className="h-[55vh] bg-gradient-to-r from-white via-gray-150 to-blue-100 shadow-md rounded-b-[20px] ">
      {/* single item */}
      <div className="w-full flex items-center p-4">
        <Link to="/admin/dashboard" className="w-full flex items-center">
         <MdDashboard
         title="Dashboard"
          className="  hover:text-blue-500 hover:scale-125 transition-transform duration-300 ease-in-out text-3xl"
            size={30}
            color={`${active === 1 ? "blue" : "#555"}`}
          />

          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 1 ? "text-blue-500" : "text-[#555]"
            }`}
          >
          Dashboard
            
          </h5>
        </Link>
      </div>

      <div className="w-full flex items-center p-4">
        <Link to="/admin-orders" className="w-full flex items-center">
          <BsBagCheck
          className="hover:text-blue-500 hover:scale-125 transition-transform duration-300 ease-in-out text-3xl"
            size={30}
            color={`${active === 2 ? "blue" : "#555"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 2 ? "text-blue-500" : "text-[#555]"
            }`}
          >
            All Orders
          </h5>
        </Link>
      </div>

      <div className="w-full flex items-center p-4">
        <Link to="/admin-sellers" className="w-full flex items-center">
          <AiOutlineShop
          className="hover:text-blue-500 hover:scale-125 transition-transform duration-300 ease-in-out text-3xl"
            size={30}
            color={`${active === 3 ? "blue" : "#555"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 3 ? "text-[blue]" : "text-[#555]"
            }`}
          >
           All Shops
          </h5>
        </Link>
      </div>

      <div className="w-full flex items-center p-4">
        <Link to="/admin-users" className="w-full flex items-center">
          <HiOutlineUserGroup
          title="All User"
          className="hover:text-blue-500 hover:scale-125 transition-transform duration-300 ease-in-out text-3xl"
            size={30}
            color={`${active === 4 ? "blue" : "#555"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 4 ? "text-[blue]" : "text-[#555]"
            }`}
          >
            All Users
          </h5>
        </Link>
      </div>

      <div className="w-full flex items-center p-4">
        <Link to="/admin-products" className="w-full flex items-center">
          <TbBrandProducthunt
          title="All Products"
          className="hover:text-blue-500 hover:scale-125 transition-transform duration-300 ease-in-out text-3xl"
            size={30}
            color={`${active === 5 ? "blue" : "#555"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 5 ? "text-[blue]" : "text-[#555]"
            }`}
          >
            All Product
          </h5>
        </Link>
      </div>

      <div className="w-full flex items-center p-4">
        <Link to="/admin-events" className="w-full flex items-center">
          <MdEventAvailable
          className="hover:text-blue-500 hover:scale-125 transition-transform duration-300 ease-in-out text-3xl"
            size={30}
            color={`${active === 6 ? "blue" : "#555"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 6 ? "text-[blue]" : "text-[#555]"
            }`}
          >
            All Promo Event
          </h5>
        </Link>
      </div>



      <div className="w-full flex items-center p-4">
        <Link
          to="/shop-create"
          className="w-full flex items-center"
        >
          <BsShopWindow
          className="hover:text-blue-500 hover:scale-125 transition-transform duration-300 ease-in-out text-3xl"
            size={30}
            color={`${active === 7 ? "crimson" : "#555"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 7 ? "text-[blue]" : "text-[#555]"
            }`}
          >
            Create Shop
          </h5>
        </Link>
      </div>

      <div className="w-full flex items-center p-4">
        <Link
          to="/profile"
          className="w-full flex items-center"
        >
          <GrUserSettings
          className="hover:text-blue-500 hover:scale-125 transition-transform duration-300 ease-in-out text-3xl"
            size={25}
            color={`${active === 8 ? "blue" : "#555"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 8 ? "text-[crimson]" : "text-[#555]"
            }`}
          >
            Account Setting
          </h5>
        </Link>
      </div>

    </div>
  );
};

export default AdminSideBar;
