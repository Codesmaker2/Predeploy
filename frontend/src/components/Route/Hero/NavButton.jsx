import React, { useState } from 'react'
import { BiMessageDots, BiShoppingBag } from 'react-icons/bi'
import { CgProfile, CgShoppingCart } from 'react-icons/cg'
import Cart from '../../cart/Cart'
import { useSelector } from 'react-redux'
import { TbSmartHome } from 'react-icons/tb'
import { Link } from 'react-router-dom'

const NavButton = () => {
    const [openCart, setOpenCart] = useState(false);
    const { cart } = useSelector((state) => state.cart);
  return (
    <div className="fixed h-[10vh] bottom-0 px-9 py-1  w-full bg-white border-t-[2px] border-blue-600 rounded-t-[20px] 800px:hidden ">
    <div className=" ">
      <div className="flex items-center justify-between w-full list-none">
      <Link to={"/profile"}><li><CgProfile size={25} className=' cursor-pointer'/></li></Link>
      <Link to={"/inbox"}><li><BiMessageDots size={25} className=' cursor-pointer'/></li></Link>
      <Link to={"/"}><li><TbSmartHome size={40} color='blue' className='border rounded-full p-0.5 cursor-pointer'/></li></Link>
      <Link to={"/user-orders"}><li><BiShoppingBag size={25} className=' cursor-pointer'/></li></Link>
      <li><CgShoppingCart size={25} className=' cursor-pointer' onClick={() => setOpenCart(true)}/>
      <span className="absolute right-7 top-3 rounded-full bg-[#ec3a3a] w-4 h-4  text-white font-mono text-[12px] leading-tight text-center">
              {cart && cart.length}
            </span>
      </li>
        
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
   
   

  </div>
  )
}

export default NavButton
