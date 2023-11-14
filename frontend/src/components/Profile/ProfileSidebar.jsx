import React, { useState } from "react";
import { AiOutlineLogin, AiOutlineMessage } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { HiOutlineReceiptRefund } from "react-icons/hi";
import {

  MdOutlineShoppingBasket,
  MdOutlineTrackChanges,

} from "react-icons/md";
import { TbAddressBook } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { server } from "../../server";
import { toast } from "react-toastify";
import { BiUserPin } from "react-icons/bi";

const ProfileSidebar = ({ setActive, active }) => {
  const navigate = useNavigate();
  const [showConfirmation, setShowConfirmation] = useState(false);
//  const {user} = useSelector((state) => state.user);
  const logoutHandler = () => {
    axios
      .get(`${server}/user/logout`, { withCredentials: true })
      .then((res) => {
        toast.success(res.data.message);
        window.location.reload(true);
        setShowConfirmation(false)
        navigate("/login");
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  };
  return (
    <div className=" flex items-center justify-center w-full bg-white shadow-xl rounded-[10px] max-400px:rounded-[10px] 800px:pl-[120px] p-5 ">
      <div
        className="flex items-center cursor-pointer w-full max-400px:ml-3 "
        onClick={() => setActive(1)}
      >
        <BiUserPin size={20} color={active === 1 ? "blue" : ""} />
        <span
          className={`pl-3 ${
            active === 1 ? "text-[black]" : ""
          } 800px:block hidden`}
        >
          Profile
        </span>
      </div>
      <div
        className="flex items-center cursor-pointer w-full "
        onClick={() => setActive(2)}
      >
        <MdOutlineShoppingBasket size={20} color={active === 2 ? "blue" : ""} />
        <span
          className={`pl-3 ${
            active === 2 ? "text-[black]" : ""
          } 800px:block hidden`}
        >
          Orders
        </span>
      </div>
      <div
        className="flex items-center cursor-pointer w-full "
        onClick={() => setActive(3)}
      >
        <HiOutlineReceiptRefund size={20} color={active === 3 ? "blue" : ""} />
        <span
          className={`pl-3 ${
            active === 3 ? "text-[black]" : ""
          } 800px:block hidden`}
        >
          Refunds
        </span>
      </div>

      <div
        className="flex items-center cursor-pointer w-full "
        onClick={() => setActive(4) || navigate("/inbox")}
      >
        <AiOutlineMessage size={20} color={active === 4 ? "blue" : ""} />
        <span
          className={`pl-3 ${
            active === 4 ? "text-[black]" : ""
          } 800px:block hidden`}
        >
          Inbox
        </span>
      </div>

      <div
        className="flex items-center cursor-pointer w-full "
        onClick={() => setActive(5)}
      >
        <MdOutlineTrackChanges size={20} color={active === 5 ? "blue" : ""} />
        <span
          className={`pl-3 ${
            active === 5 ? "text-[black]" : ""
          } 800px:block hidden`}
        >
          Track Order
        </span>
      </div>

      <div
        className="flex items-center cursor-pointer w-full "
        onClick={() => setActive(6)}
      >
        <RiLockPasswordLine size={20} color={active === 6 ? "blue" : ""} />
        <span
          className={`pl-3 ${
            active === 6 ? "text-[black]" : ""
          } 800px:block hidden`}
        >
           Password
        </span>
      </div>

      <div
        className="flex items-center cursor-pointer w-full "
        onClick={() => setActive(7)}
      >
        <TbAddressBook size={20} color={active === 7 ? "blue" : ""} />
        <span
          className={`pl-3 ${
            active === 7 ? "text-[black]" : ""
          } 800px:block hidden`}
        >
          Address
        </span>
      </div>

      <div
        className="single_item flex items-center cursor-pointer w-full "
        
      >
        <AiOutlineLogin size={20} color="red" onClick={() => setShowConfirmation(true)}/>
        <span
          className={`pl-3  ${
            active === 8 ? "text-[black]" : ""
          } 800px:block hidden`}
        >
          Log out
        </span>
        {showConfirmation && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-8 rounded">
            <p className="text-black">Are you sure you want to logout?</p>
            <div className="mt-4 flex justify-end">
              <button onClick={() => setShowConfirmation(false)} className="mr-4 text-gray-600 hover:text-gray-800 cursor-pointer">
                Cancel
              </button>
              <button onClick={logoutHandler} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
      </div>
      
    </div>
  );
};

export default ProfileSidebar;
