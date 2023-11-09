import React, { useState } from 'react'
import { BiMessageDots, BiUser } from 'react-icons/bi'
import { CgShoppingCart } from 'react-icons/cg'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { MdHome } from 'react-icons/md'
import { Link } from 'react-router-dom'
import Cart from '../../cart/Cart'
import { useSelector } from 'react-redux'

const NavButton = () => {
    const [openCart, setOpenCart] = useState(false);
    const { cart } = useSelector((state) => state.cart);
  return (
    <div className="fixed h-[10vh] bottom-0 left-0 w-full bg-white border-t border-gray-300 rounded-t-[20px] 800px:hidden ">
    <div className="container mx-auto  ">
      <div className="flex w-full">
        <div className="flex w-full ">
          <div className="flex grid-flow-col-5 justify-between w-full">
           <Link to={"/profile"}><BiUser size={30} className='m-4 rounded-t-lg rounded-b-none'/></Link>
           <Link to={"/inbox"}><BiMessageDots size={30} className='m-4'/></Link>
           <Link to={"/"}><MdHome size={45}  className='m-2 border rounded-full shadow text-blue-500 shadow-gray-500 cursor-pointer ' /></Link>
           <Link to={"/user-orders"}><HiOutlineShoppingBag size={30} className='m-4'/></Link>
           <div>
          <div
            className="relative mr-[20px]"
            onClick={() => setOpenCart(true)}
          >
            <CgShoppingCart  className=" m-1.5 mt-4"
            size={30} />
            <span className="absolute right-0 top-0 rounded-full bg-[#ec3a3a] w-4 h-4  text-white font-mono text-[12px]  leading-tight text-center">
              {cart && cart.length}
            </span>
          </div>
        </div>
        {/* cart popup */}
        {openCart ? <Cart setOpenCart={setOpenCart} /> : null}

          </div>
        
        </div>
        
      </div>
    </div>
  </div>
  )
}

export default NavButton
