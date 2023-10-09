import React from 'react'
import styles from '../../styles/styles'
import {  IoArchiveSharp,  IoBicycleOutline, IoCheckmarkDoneCircleSharp } from 'react-icons/io5';

import { RxCaretLeft} from 'react-icons/rx';
import { Link } from 'react-router-dom';

const CheckoutSteps = ({active}) => {
    console.log(active);
  return (
    <div className='w-full flex justify-center '>
        <Link to={"/checkout"}>
            <RxCaretLeft color={`${active === 1 ? "gray" : "blue"}`} size={40} className='cursor-pointer'/></Link>
        
        <div className="w-[90%] 800px:w-[50%]  400px:w-[75%] flex items-center flex-wrap ">
               <div className={`${styles.noramlFlex} `}>
                <div className={`${styles.cart_button} `}>
                       <IoBicycleOutline className='text-white text-[40px] max-400px:text-[30px]'/><span className={`${styles.cart_button_text}`}><h3 className='hidden sm:block'>(1)Delivery Address</h3></span>
                </div>
                <div className={`${
                    active > 1 ? "w-[30px] 800px:w-[70px] h-[4px] !bg-blue-300"
                    : "w-[30px] 800px:w-[70px] h-[4px] !bg-blue-300"
                }`} />
               </div>

               <div className={`${styles.noramlFlex}`}>
                <div className={`${active > 1 ? `${styles.cart_button}` : `${styles.cart_button} !bg-blue-300`}`}>
                <IoArchiveSharp className="text-white text-[30px] max-400px:text-[30px]"/><span className={`${active > 1 ? `${styles.cart_button_text} ` : `${styles.cart_button_text} !text-white max-400px:w-[15px]`}`}>
                <h3 className='hidden sm:block'>(2)Payment Method</h3>
                    </span>
                </div>
               </div>

               <div className={`${styles.noramlFlex}`}>
               <div className={`${
                    active > 3 ? "w-[30px] 800px:w-[70px] h-[4px] !bg-blue-500"
                    : "w-[30px] 800px:w-[70px] h-[4px] !bg-blue-300"
                }`} />
                <div className={`${active > 2 ? `${styles.cart_button}` : `${styles.cart_button} !bg-blue-300`}`}>
                    <IoCheckmarkDoneCircleSharp className='text-white text-[30px]'/><span className={`${active > 2 ? `${styles.cart_button_text}` : `${styles.cart_button_text} !text-blue-white max-400px:w-[15px]`}`}>
                    <h3 className='hidden sm:block'>(3)Order Successful</h3>
                    </span>
                </div>
               </div>
               {/* <Link to={"/checkout"}><RxCaretRight color='gray' size={40} className='cursor-pointer'/></Link> */}
        </div>
       
    </div>
  )
}

export default CheckoutSteps
