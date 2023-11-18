import React from 'react'
import { RxCaretLeft } from 'react-icons/rx'
import { TbListDetails } from 'react-icons/tb'
import { Link } from 'react-router-dom'

const HeaderOrderdetails = ({active}) => {
  return (
    <div className="w-full flex py-2 items-center justify-between bg-blue-500">
    <Link to={"/user-orders"}>
      <RxCaretLeft size={40} color={`${active === 2 ? "gray" : "white"}`} className="cursor pointer"/>
    </Link>
      <div className="flex items-center justify-between">
     
        <TbListDetails size={30} className="text-white"/>
        <h1 className="pl-2 max-400px:text-[15px] max-500px:text-[17px] max640px:text-[18px] mr-5 max-768px:text-[20px] text-white">Order Details</h1>
      </div>
    </div>
  )
}

export default HeaderOrderdetails

