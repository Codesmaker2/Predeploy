import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../styles/styles";
import { useEffect } from "react";
import {
  CardNumberElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useSelector } from "react-redux";
import axios from "axios";
import { server } from "../../server";
import { toast } from "react-toastify";
import { IoScaleOutline, IoSwapHorizontalOutline } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";
import NavButton from "../Route/Hero/NavButton";


const Payment = () => {
  const [orderData, setOrderData] = useState([]);
  const [open, setOpen] = useState(false);
  const { user } = useSelector((state) => state.user);
  const { seller } = useSelector((state) => state.seller);
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    const orderData = JSON.parse(localStorage.getItem("latestOrder"));
    setOrderData(orderData);
  }, []);

  const createOrder = (data, actions) => {
    return actions.order
      .create({
        purchase_units: [
          {
            description: "Order",
            amount: {
              currency_code: "Pesos",
              value: orderData?.totalPrice,
            },
          },
        ],
        // not needed if a shipping address is actually needed
        application_context: {
          shipping_preference: "FREE SHIPPING",
        },
      })
      .then((orderID) => {
        return orderID;
      });
  };

  const order = {
    cart: orderData?.cart,
    shippingAddress: orderData?.shippingAddress,
    user: user && user,
    shopname: seller && seller,
    totalPrice: orderData?.totalPrice,
  };

  const onApprove = async (data, actions) => {
    return actions.order.capture().then(function (details) {
      const { payer } = details;

      let paymentInfo = payer;

      if (paymentInfo !== undefined) {
        paypalPaymentHandler(paymentInfo);
      }
    });
  };

  const paypalPaymentHandler = async (paymentInfo) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    order.paymentInfo = {
      id: paymentInfo.payer_id,
      status: "succeeded",
      type: "Paypal",
    };

    await axios
      .post(`${server}/order/create-order`, order, config)
      .then((res) => {
        setOpen(false);
        navigate("/order/success");
        toast.success("Order successful!");
        localStorage.setItem("cartItems", JSON.stringify([]));
        localStorage.setItem("latestOrder", JSON.stringify([]));
        window.location.reload();
      });
  };

  const paymentData = {
    amount: Math.round(orderData?.totalPrice * 100),
  };

  const paymentHandler = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        `${server}/payment/process`,
        paymentData,
        config
      );

      const client_secret = data.client_secret;

      if (!stripe || !elements) return;
      const result = await stripe.confirmCardPayment(client_secret, {
        payment_method: {
          card: elements.getElement(CardNumberElement),
        },
      });

      if (result.error) {
        toast.error(result.error.message);
      } else {
        if (result.paymentIntent.status === "succeeded") {
          order.paymnentInfo = {
            id: result.paymentIntent.id,
            status: result.paymentIntent.status,
            type: "Credit Card",
          };

          await axios
            .post(`${server}/order/create-order`, order, config)
            .then((res) => {
              setOpen(false);
              navigate("/order/success");
              toast.success("Order successful!");
              localStorage.setItem("cartItems", JSON.stringify([]));
              localStorage.setItem("latestOrder", JSON.stringify([]));
              window.location.reload();
            });
        }
      }
    } catch (error) {
      toast.error(error);
    }
  };

  const cashOnDeliveryHandler = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    order.paymentInfo = {
      type: "💸Cash On Delivery",
    };

    await axios
    .post(`${server}/order/create-order`, order, config)
    .then((res) => {
      setOpen(false);
      navigate("/order/success");
      toast.success("Order successful!");
      localStorage.setItem("cartItems", JSON.stringify([]));
      localStorage.setItem("latestOrder", JSON.stringify([]));
      window.location.reload();
    });
  };

  const cashOnPickup = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    order.paymentInfo = {
      type: "🚙Cash On Pick up",
    };

    await axios
    .post(`${server}/order/create-order`, order, config)
    .then((res) => {
      setOpen(false);
      navigate("/order/success");
      toast.success("Order successful!");
      localStorage.setItem("cartItems", JSON.stringify([]));
      localStorage.setItem("latestOrder", JSON.stringify([]));
      window.location.reload();
    });
  };

  // WALKIN ADVANCE PAYMENT
  const walkinAdvancepayment = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    order.paymentInfo = {
      type: "🚶WALK-IN ADVANCE PAYMENT",
    };

    await axios
    .post(`${server}/order/create-order`, order, config)
    .then((res) => {
      setOpen(false);
      navigate("/order/success");
      toast.success("Order successful!");
      localStorage.setItem("cartItems", JSON.stringify([]));
      localStorage.setItem("latestOrder", JSON.stringify([]));
      window.location.reload();
    });
  };

   // WALKIN ADVANCE PAYMENT
   const walkincashondelivery = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    order.paymentInfo = {
      type: "🚶💸WALK-IN CASH ON DELIVERY",
    };

    await axios
    .post(`${server}/order/create-order`, order, config)
    .then((res) => {
      setOpen(false);
      navigate("/order/success");
      toast.success("Order successful!");
      localStorage.setItem("cartItems", JSON.stringify([]));
      localStorage.setItem("latestOrder", JSON.stringify([]));
      window.location.reload();
    });
  };

  return (
    <div className="w-full flex flex-col items-center ">
      <div className="w-[90%] 1000px:w-[70%] block 800px:flex">
        <div className="w-full 800px:w-[65%]">
          <PaymentInfo
            user={user}
            open={open}
            setOpen={setOpen}
            onApprove={onApprove}
            createOrder={createOrder}
            paymentHandler={paymentHandler}
            cashOnDeliveryHandler={cashOnDeliveryHandler}
            cashOnPickup={cashOnPickup}
            walkinAdvancepayment={walkinAdvancepayment}
            walkincashondelivery={walkincashondelivery}
          />
        </div>
        <div className="w-full 800px:w-[35%] 800px:mt-0 mt-8">
          <CartData orderData={orderData} />
        </div>
      </div>
    </div>
  );
};

const PaymentInfo = ({
  // user,
  // open,
  // setOpen,
  // onApprove,
  // createOrder,
  // paymentHandler,
  cashOnDeliveryHandler,
  cashOnPickup,
  walkinAdvancepayment,
  walkincashondelivery
}) => {
  const [select, setSelect] = useState(1);

  return (
    <div className="w-full 800px:w-[95%] 800px:h-[95%] bg-white rounded-md p-5 pb-8">
      {/* select buttons */}
      
      

     
      {/* cash on delivery */}
      <div>
        <div className="flex w-full pb-5 border-b mb-2">
          <div
            className="w-[25px] h-[25px] rounded-full bg-transparent border-[3px] border-[#1d1a1ab4] relative flex items-center justify-center"
            onClick={() => setSelect(3)}
          >
            {select === 3 ? (
              <div className="w-[13px] h-[13px] bg-[#1d1a1acb] rounded-full" />
            ) : null}
          </div>
          <h4 className="text-[18px] pl-2 font-[600] text-[#000000b1]">
            Cash on Delivery(COD)
          </h4>
        </div>
        

        {/* cash on delivery */}
        {select === 3 ? (
          <div className="w-full flex items-center justify-end">
            <form className="w-full items-end justify-end" onSubmit={cashOnDeliveryHandler} >
              <input
                type="submit"
                value="Confirm"
                className={`${styles.button} max-400px:!w-[115px] !bg-blue-500 text-[#fff] h-[45px] max-400px:!ml-[65%] rounded-[5px] cursor-pointer text-[18px] font-[600] items-end justify-end max-400px:h-[40px] `}
              />
            </form>
          </div>
        ) : null}
      </div>

{/* Pickup */}
      <div>
        <div className="flex w-full pb-5 border-b mb-2">
          <div
            className="w-[25px] h-[25px] rounded-full bg-transparent border-[3px] border-[#1d1a1ab4] relative flex items-center justify-center"
            onClick={() => setSelect(4)}
          >
            {select === 4 ? (
              <div className="w-[13px] h-[13px] bg-[#1d1a1acb] rounded-full" />
            ) : null}
          </div>
          <h4 className="text-[18px] pl-2 font-[600] text-[#000000b1]">
           Cash on Pick up (COP)
          </h4>
        </div>
        

{/* cash on pick up */}
        {select === 4 ? (
          <div className="w-full flex items-center justify-end">
            <form className="w-full items-end justify-end" onSubmit={cashOnPickup} >
              <input
                type="submit"
                value="Confirm"
                className={`${styles.button} max-400px:!w-[115px] !bg-blue-500 text-[#fff] h-[45px] max-400px:!ml-[65%] rounded-[5px] cursor-pointer text-[18px] font-[600] items-end justify-end max-400px:h-[40px] `}
              />
            </form>
          </div>
        ) : null}
      </div>

{/*FOR WALKIN ADVANCE PAYMENT*/}
<div className="400px:hidden 800px:flex">
        <div className="flex w-full pb-5 border-b mb-2 max-400px:hidden">
          <div
            className="w-[25px] h-[25px] rounded-full bg-transparent border-[3px] border-[#1d1a1ab4] relative flex items-center justify-center"
            onClick={() => setSelect(5)}
          >
            {select === 5 ? (
              <div className="w-[13px] h-[13px] bg-[#1d1a1acb] rounded-full" />
            ) : null}
          </div>
          <h4 className="text-[18px] pl-2 font-[600] text-[#000000b1]">
          WALKIN ADVANCE PAYMENT (WAP)
          </h4>
        </div>
        

{/* WALKIN ADVANCE PAYMENT */}
        {select === 5 ? (
          <div className="w-full flex items-center justify-end max-400px:hidden">
            <form className="w-full items-end justify-end" onSubmit={walkinAdvancepayment} >
              <input
                type="submit"
                value="Confirm"
                className={`${styles.button} max-400px:!w-[115px] !bg-blue-500 text-[#fff] h-[45px] max-400px:!ml-[65%] rounded-[5px] cursor-pointer text-[18px] font-[600] items-end justify-end max-400px:h-[40px] `}
              />
            </form>
          </div>
        ) : null}
      </div>


      {/*FOR WALKIN CASH ON DELIVERY*/}
<div className="400px:hidden 800px:flex">
        <div className="flex w-full pb-5 border-b mb-2  max-400px:hidden">
          <div
            className="w-[25px] h-[25px] rounded-full bg-transparent border-[3px] border-[#1d1a1ab4] relative flex items-center justify-center"
            onClick={() => setSelect(6)}
          >
            {select === 6 ? (
              <div className="w-[13px] h-[13px] bg-[#1d1a1acb] rounded-full" />
            ) : null}
          </div>
          <h4 className="text-[18px] pl-2 font-[600] text-[#000000b1]">
          WALKIN CASH ON DELIVERY(WCOD)
          </h4>
        </div>
        

{/* WALKIN CASH ON DELIVERY */}
        {select === 6 ? (
          <div className="w-full flex items-center justify-end">
            <form className="w-full items-end justify-end" onSubmit={walkincashondelivery} >
              <input
                type="submit"
                value="Confirm"
                className={`${styles.button} max-400px:!w-[115px] !bg-blue-500 text-[#fff] h-[45px] max-400px:!ml-[65%] rounded-[5px] cursor-pointer text-[18px] font-[600] items-end justify-end max-400px:h-[40px] `}
              />
            </form>
          </div>
        ) : null}
      </div>


      <div className="flex"><h2 className="font-bold mr-1">Note: </h2><h4> If you click confirm automatically your order is successfull.</h4></div>
    </div>
  );
};


const CartData = ({ orderData }) => {
  //const shipping = orderData?.shipping?.toFixed(2);
  return (
    <div className="w-full bg-[#fff] rounded-md p-5 pb-8">
      <hr />
      <br />
      <div className="flex justify-between">
        <IoScaleOutline className="text-[30px] text-blue-500"/><h3 className="text-[16px] font-[400] text-[#000000a4]">Subtotal:</h3>
        <h5 className="text-[18px] font-[600]">P{orderData?.subTotalPrice}</h5>
      </div>
      <br />
      <div className="flex justify-between"> 
      <TbTruckDelivery className="text-[30px] text-blue-500"/><h3 className="text-[16px] font-[400] text-[#000000a4]">Delivery Fee:</h3> 
         <h5 className="text-[18px] font-[600]">Free</h5> 
      </div> 
      <br />
      <div className="flex justify-between border-b pb-3">
      <IoSwapHorizontalOutline className="text-[30px] text-blue-500"/><h3 className="text-[16px] font-[400] text-[#000000a4]">Discount:</h3>
        <h5 className="text-[18px] font-[600]">{orderData?.discountPrice? "P" + orderData.discountPrice : "-"}</h5>
      </div>
      <h5 className="text-[28px] font-[600] text-end pt-3">
        P{orderData?.totalPrice}
      </h5>
      <br />
     <NavButton/>
    </div>
  );
};

export default Payment;
