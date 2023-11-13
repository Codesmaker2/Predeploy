import React, { useState } from 'react'
import { BiMessageDots, BiShoppingBag } from 'react-icons/bi'
import { CgProfile, CgShoppingCart } from 'react-icons/cg'
import Cart from '../../cart/Cart'
import { useSelector } from 'react-redux'
import { TbSmartHome } from 'react-icons/tb'

const NavButton = () => {
    const [openCart, setOpenCart] = useState(false);
    const { cart } = useSelector((state) => state.cart);
  return (
    <div className="fixed h-[10vh] bottom-0 px-9 py-1  w-full bg-white border-t-[2px] border-blue-600 rounded-t-[20px] 800px:hidden ">
    <div className=" ">
      <div className="flex items-center justify-between w-full list-none">
      <li><CgProfile size={25}/></li>
      <li><BiMessageDots size={25}/></li>
      <li><TbSmartHome size={40} color='blue' className='border rounded-full p-0.5'/></li>
      <li><BiShoppingBag size={25}/></li>
      <li><CgShoppingCart size={25} onClick={() => setOpenCart(true)}/></li>
      <span className="absolute right-7 top-3 rounded-full bg-[#ec3a3a] w-4 h-4  text-white font-mono text-[12px] leading-tight text-center">
              {cart && cart.length}
            </span>
        
         {/* cart popup */}
         {openCart ? <Cart setOpenCart={setOpenCart} /> : null}
      </div>
      
      <div className='flex items-center justify-between list-none w-full ml-1 text-[0.8em] '>
      <li>Me</li>
      <li>Inbox</li>
      <li>_____</li>
      <li>Order</li>
      <li>Cart</li>
    </div>
    </div>
   
    {/* <div className="flex items-center justify-between w-full">
           <Link to={"/profile"}><BiUser size={25} className='m-4 rounded-t-lg rounded-b-none'/></Link>
           <Link to={"/inbox"}><BiMessageDots size={25} className='m-4'/></Link>
           <Link to={"/"}><MdHome size={40}  className='m-2 border rounded-full shadow text-blue-500 shadow-gray-500 cursor-pointer tap:bg-white outline-none ' /></Link>
           <Link to={"/user-orders"}><HiOutlineShoppingBag size={25} className='m-4'/></Link>
           <div>
          <div
            className="relative mr-[25px]"
            onClick={() => setOpenCart(true)}
          >
            <CgShoppingCart  className=" mb-3 mt-4"
            size={25} />
            <span className="absolute right-0 top-0 rounded-full bg-[#ec3a3a] w-4 h-4  text-white font-mono text-[12px] leading-tight text-center">
              {cart && cart.length}
            </span>
          </div>
        </div>
       

          </div> */}

  </div>
  )
}

export default NavButton
