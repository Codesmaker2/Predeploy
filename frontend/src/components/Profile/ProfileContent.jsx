import React, { useState } from "react";
import {
  
  AiOutlineArrowRight,
  AiOutlineCamera,
  AiOutlineDelete,
  AiOutlinePlusCircle,
  
} from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { server } from "../../server";
import styles from "../../styles/styles";
import { DataGrid } from "@material-ui/data-grid";
import { Avatar, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import {  MdFacebook, MdOutlineAdminPanelSettings, MdOutlineContactPhone, MdOutlineEmail, MdTrackChanges } from "react-icons/md";
import { RxCross1, RxEyeOpen } from "react-icons/rx";
import {
  deleteUserAddress,
  loadUser,
  updatUserAddress,
  updateUserInformation,
} from "../../redux/actions/user";
import { useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { getAllOrdersOfUser } from "../../redux/actions/order";
import { CgNametag } from "react-icons/cg";
import {  RiLockPasswordLine } from "react-icons/ri";
import { HiLocationMarker } from "react-icons/hi";





const ProfileContent = ({  setActive, active }) => {
  const { user, error, successMessage } = useSelector((state) => state.user);
  const [name, setName] = useState(user && user.name);
  const [email, setEmail] = useState(user && user.email);
  const [phoneNumber, setPhoneNumber] = useState(user && user.phoneNumber);
  const [facebooklink, setFacebooklink] = useState(user && user.facebooklink);
  // const [errorlink, setErrorlink] = useState('');
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState('');
  const [, setAvatar] = useState(null);
  const dispatch = useDispatch();




  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearErrors" });
    }
    if (successMessage) {
      toast.success(successMessage);
      dispatch({ type: "clearMessages" });
    }
  }, [dispatch,error, successMessage]);

  const handleSubmit = (e) => {
    e.preventDefault();

    
    const input = phoneNumber
    // Remove any non-numeric characters
    const numericInput = input.replace(/[^0-9]/g, '');


    if(numericInput.length <= 11) {
      setPhoneNumber(numericInput);
    }
    
    if (phoneNumber.length !== 11) {
      return setErrorMessage('Must be exactly 11 digits & start with (09)');
    } else {
      // Perform your submit logic here, e.g., send the phone number to the server.
      // If the input is valid, you can reset the error message and proceed with submission.
      setErrorMessage('');
      // Add your submission code here.
    }

    // if (!facebooklink) {
    //   setErrorlink('Please enter your Facebook profile link');
    //   return;
    // }


     (dispatch(updateUserInformation(name, email, phoneNumber,facebooklink, password)))

   
  };

  const handleImage = async (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setAvatar(reader.result);
        axios
          .put(
            `${server}/user/update-avatar`,
            { avatar: reader.result },
            {
              withCredentials: true,
            }
          )
          .then((response) => {
            dispatch(loadUser());
            toast.success("avatar updated successfully!");
          })
          .catch((error) => {
            toast.error(error);
          });
      }
    };

    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <div className="w-full ">
      
      {/* profile */}
      {active === 1 && (
        <>
        
          <div className="flex justify-center w-full ">
            <div className="relative">
              <img
                src={`${user?.avatar?.url}`}
                className="w-[80px] h-[80px] rounded-full object-cover border-[3px] border-blue-800"
                alt=""
              />
              <div className="w-[20px] h-[20px] bg-[#E3E9EE] rounded-full flex items-center justify-center cursor-pointer absolute bottom-[5px] right-[5px]">
                <input
                  type="file"
                  id="image"
                  className="hidden"
                  onChange={handleImage}
                />
                <label htmlFor="image">
                  <AiOutlineCamera />
                </label>
              </div>
            </div>
            
            
          </div>
          <h4 className="text-center font-semibold ">Account Profile</h4>
         
   
          <br />
          
          <hr />
          {user && user?.role === "Admin" && (
        <Link to="/admin/dashboard">
          <div
            className="flex items-center justify-center cursor-pointer w-full "
            onClick={() => setActive(8)}
          >
            <MdOutlineAdminPanelSettings
              size={20}
              color={active === 7 ? "blue" : ""}
            />
            <span
              className={`pl-3 ${
                active === 8 ? "text-[black]" : ""
              } 800px:block hidden`}
            >
              Admin Dashboard
            </span>
          </div>
        </Link>
      )}
          <div className=" bg-white w-full px-5 items-center justify-center ">
            <form onSubmit={handleSubmit} props-required={true}>
              <div className="w-full  block pb-3  items-center justify-center ">
                <div className=" w-[100%] 800px:w-[50%] 800px:ml-[37%] 800px:pt-5">
               
                 <label className="block  max-400px:mt-4 "><div className="flex "><CgNametag size={20} className="mr-1"/>Full Name</div></label>
                  
                  <input
                    type="text"
                    placeholder="Type Full Name..."
                    className={`${styles.input} max-400px:w-[100%] mb-2 800px:w-[50%] border border-gray-500`}
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value.replace(/[^A-Za-z ]/g, ''))}
                    
                  />
                </div>
            
                <div className=" w-[100%] 800px:w-[50%] 800px:ml-[37%]">
            
                  <label className="block  "><div className="flex"><MdOutlineEmail size={20} className="mr-1"/>Email Address</div></label>
                  <input
                    type="text"
                    placeholder="Type Email Address..."
                    className={`${styles.input} max-400px:w-[100%] mb-2 800px:w-[50%] border-gray-500`}
                    required
                    disabled
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              
                <div className=" w-[100%] 800px:w-[50%] 800px:ml-[37%]">
                  <label className="block  "><div className="flex"><MdOutlineContactPhone size={20} className="mr-1"/>
                  Phone Number
                  {errorMessage && <div className="error-message text-red-500 max-400px:text-[12px]">{errorMessage}</div>}
                  
                  </div></label>
                 
                  <input
                    type="tel"
                    name="phoneNumber"
                    id="phoneNumber"
                    autoComplete="number"
                    maxLength={11}
                    title="Please enter exactly 11 digits." 
                    placeholder="Type Phone Number..."
                    className={`${styles.input} max-400px:w-[100%] mb-2 800px:w-[50%] border-gray-500`}
                    required
                    disabled
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ""))}
                  />
                </div>

                
                <div className=" w-[100%] 800px:w-[50%] 800px:ml-[37%]">
                  <label className="block  "><div className="flex"><MdFacebook size={20} className="mr-1"/>
                  
                  Facebook Profile Link
                
                  </div></label>

                  <input
                    type="link"
                    name="facebook"
                    title="Facebook Link." 
                    placeholder=" Provide your profile facebook link..."
                    className={`${styles.input} max-400px:w-[100%] mb-2 800px:w-[50%] border-gray-500`}
                    required
                    value={facebooklink}
                    onChange={(e) => setFacebooklink(e.target.value)
                     
                    }
                    
                  />
                </div>


                <div className=" w-[100%] 800px:w-[50%] 800px:ml-[37%]">
                  <label className="block "><div className="flex"><RiLockPasswordLine size={20} className="mr-1"/>Input Password</div></label>
                  <input
                    type="password"
                    placeholder="Type your Password..."
                    className={`${styles.input} max-400px:w-[100%] mb-2 800px:w-[50%] border-gray-500`}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                
              </div>
              <div className="flex items-center justify-center 800px:mt-10 "><input
                className={`w-full 800px:w-[20%] h-[40px] mb-4  border border-blue-500 text-center bg-blue-600 text-[#fff] rounded-[10px] cursor-pointer`}
                required
                value="Update Profile"
                type="submit"
              /></div>
            </form>
            {/* {errorlink && <p>{errorlink}</p>} */}
          </div>
        </>
      )}

      {/* order */}
      {active === 2 && (
        <div>
          <AllOrders />
        </div>
      )}

      {/* Refund */}
      {active === 3 && (
        <div>
          <AllRefundOrders />
        </div>
      )}

      {/* Track order */}
      {active === 5 && (
        <div>
          <TrackOrder />
        </div>
      )}

      {/* Change Password */}
      {active === 6 && (
        <div>
          <ChangePassword />
        </div>
      )}

      {/*  user Address */}
      {active === 7 && (
        <div>
          <Address />
        </div>
      )}
    </div>
  );
};
//Order
const AllOrders = () => {
  const { user } = useSelector((state) => state.user);
  const { orders } = useSelector((state) => state.order);
  const dispatch = useDispatch();
  
  const data = orders && orders.find((item) => item._id);

  useEffect(() => {
    dispatch(getAllOrdersOfUser(user._id));
  }, [dispatch,user._id,data]);

  const columns = [
    { field: "", headerName: "", minWidth: 50, flex: 0.1 },
    {
      field: "images",
      headerName: "Image",
      minWidth: 50,
      flex: 0.4,
      renderCell: (params) => {
        console.log(params);
        return (
          <>
             <Link to={`/user/order/${params.id}`}>
            <Avatar src={params.value}/>
            </Link>
           
          </>
        );
      }
    },
    {
      field: "name",
      headerName: " Product Name",
      type: "text",
      minWidth: 150,
      flex: 0.9,
    },
    
    {
      field: "itemsQty",
      headerName: " Items Qty",
      type: "number",
      minWidth: 130,
      flex: 0.7,
    },

    {
      field: "total",
      headerName: "Total Price",
      type: "number",
      minWidth: 130,
      flex: 0.8,
    },
    
    {
      field: " ",
      flex: 1,
      minWidth: 150,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/order/${params.id}`}>
              <Button>
                <RxEyeOpen size={20} />
              </Button>
            </Link>
          </>
        );
      },
      
    },
    {
      field: "status",
      headerName: "Status",
      minWidth: 130,
      flex: 0.4,
      cellClassName: (params) => {
        return params.getValue(params.id, "status") === "Delivered" 
          ? "greenColor"
          : "redColor";
          
      },
      
    },
  ];

  const row = [];

  orders &&
    orders.forEach((item) => {
      row.push({
        id: item._id,
        name: item.cart[0].name,
        images: item.cart[0].images[0].url,
        itemsQty: item.cart.length,
        total: "₱" + item.totalPrice,
        status: "🚛" + item.status,
      });
    });

  return (
    <div className=" pt-1">
      <DataGrid
        rows={row}
        columns={columns}
        pageSize={10}
        disableSelectionOnClick
        autoHeight
      />
    </div>
  );
};

const AllRefundOrders = () => {
  const { user } = useSelector((state) => state.user);
  const { orders } = useSelector((state) => state.order);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllOrdersOfUser(user._id));
  }, [dispatch,user._id]);

  const eligibleOrders =
    orders && orders.filter((item) => item.status === "Processing refund");

  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },

    {
      field: "status",
      headerName: "Status",
      minWidth: 130,
      flex: 0.7,
      cellClassName: (params) => {
        return params.getValue(params.id, "status") === "Delivered"
          ? "greenColor"
          : "redColor";
      },
    },
    {
      field: "itemsQty",
      headerName: "Items Qty",
      type: "number",
      minWidth: 130,
      flex: 0.7,
    },

    {
      field: "total",
      headerName: "Total Price",
      type: "number",
      minWidth: 130,
      flex: 0.8,
    },

    {
      field: " ",
      flex: 1,
      minWidth: 150,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/order/${params.id}`}>
              <Button>
                <AiOutlineArrowRight size={20} />
              </Button>
            </Link>
          </>
        );
      },
    },
  ];

  const row = [];

  eligibleOrders &&
    eligibleOrders.forEach((item) => {
      row.push({
        id: item._id,
        itemsQty: item.cart.length,
        total: "P" + item.totalPrice,
        status: item.status,
      });
    });

  return (
    <div className=" pt-1">
      <DataGrid
        rows={row}
        columns={columns}
        pageSize={10}
        autoHeight
        disableSelectionOnClick
      />
    </div>
  );
};
// track order
const TrackOrder = () => {
  const { user } = useSelector((state) => state.user);
  const { orders } = useSelector((state) => state.order);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllOrdersOfUser(user._id));
  }, [dispatch,user._id]);

  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },

    {
      field: "status",
      headerName: "Status",
      minWidth: 130,
      flex: 0.7,
      cellClassName: (params) => {
        return params.getValue(params.id, "status") === "Delivered"
          ? "greenColor"
          : "redColor";
      },
    },
    {
      field: "itemsQty",
      headerName: "Items Qty",
      type: "number",
      minWidth: 130,
      flex: 0.7,
    },

    {
      field: "total",
      headerName: "Total Price",
      type: "number",
      minWidth: 130,
      flex: 0.8,
    },

    {
      field: " ",
      flex: 1,
      minWidth: 150,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/track/order/${params.id}`}>
              <Button>
                <MdTrackChanges size={20} />
              </Button>
            </Link>
          </>
        );
      },
    },
  ];

  const row = [];

  orders &&
    orders.forEach((item) => {
      row.push({
        id: item._id,
        itemsQty: item.cart.length,
        total: "P " + item.totalPrice,
        status: item.status,
      });
    });

  return (
    <div className=" pt-1">
      <DataGrid
        rows={row}
        columns={columns}
        pageSize={10}
        disableSelectionOnClick
        autoHeight
      />
    </div>
  );
};

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const passwordChangeHandler = async (e) => {
    e.preventDefault();

    await axios
      .put(
        `${server}/user/update-user-password`,
        { oldPassword, newPassword, confirmPassword },
        { withCredentials: true }
      )
      .then((res) => {
        toast.success(res.data.success);
        setOldPassword("");
        setNewPassword("");
        setConfirmPassword("");
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };
  return (
    <div className="w-full p-5 border">
        <h1 className="block text-[20px] text-center font-[600] text-[#000000ba] pb-2 pt-5">
        🔏 Change Password
        </h1>
        <hr />
        <div className="w-full p-6">
          <form
            props-required
            onSubmit={passwordChangeHandler}
            className="flex flex-col items-center"
          >
            <div className=" w-[100%] 800px:w-[50%] mt-5">
              <label className="block pb-2">Enter your old password</label>
              <input
                type="password"
                className={`${styles.input} !w-[100%] mb-4 800px:mb-0`}
                placeholder="Enter your old Password..."
                required
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
              />
            </div>
            <div className=" w-[100%] 800px:w-[50%] mt-2">
              <label className="block pb-2">Enter your new password</label>
              <input
                type="password"
                className={`${styles.input} !w-[100%] mb-4 800px:mb-0`}
                required
                placeholder="Enter your new Password..."
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
            <div className=" w-[100%] 800px:w-[50%] mt-2">
              <label className="block pb-2">Enter your confirm password</label>
              <input
                type="password"
                className={`${styles.input} !w-[100%] mb-4 800px:mb-0`}
                placeholder=" Confirm Password..."
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <input
                className={`w-[100%] h-[35px] border border-[#3a24db] text-center hover:bg-blue-500 hover:text-white text-[#3a24db] rounded-full mt-8 cursor-pointer`}
                required
                value="Update Password"
                type="submit"
              />
            </div>
          </form>
        </div>
      </div>
  );
};

const Address = () => {
  const [open, setOpen] = useState(false);
  const [zipCode, setZipCode] = useState();
  const [address, setAddress] = useState("");
  const [landmark, setLandmark] = useState("");
  const [addressType, setAddressType] = useState("");
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const addressTypeData = [
    {
      name: "Default",
    },
    {
      name: "Home",
    },
    {
      name: "Office",
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (addressType === "") {
      toast.error("Please fill all the fields!");
    } else {
      dispatch(
        updatUserAddress(
          
          address,
          landmark,
          zipCode,
          addressType
        )
      );
      setOpen(false);
      setAddress("");
      setLandmark("");
      setZipCode(null);
      setAddressType("");
    }
  };

  const handleDelete = (item) => {
    const id = item._id;
    dispatch(deleteUserAddress(id));
  };

  return (
    <div className="w-full p-2">
       
      {open && (
        <div className="fixed w-full h-screen bg-[#0000004b] top-0 left-0 flex items-center justify-center ">
          <div className="w-[35%] h-[80vh] bg-white rounded-[4px] shadow relative overflow-x-scroll max-400px:w-[80%]">
            <div className="w-full flex justify-end p-3">
              <RxCross1
                size={30}
                className="cursor-pointer"
                onClick={() => setOpen(false)}
              />
            </div>
            <h1 className="text-center text-[25px] font-Poppins">
              Add New Address
            </h1>
            <div className="w-full">
              <form props-required onSubmit={handleSubmit} className="w-full">
                <div className="w-full block p-4">
                  

                  

                  <div className="w-full pb-2">
                    <label className="block pb-2">Address</label>
                    <input
                      type="address"
                      className={`${styles.input}`}
                      required
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                  <div className="w-full pb-2">
                    <label className="block pb-2">Landmark</label>
                    <input
                      type="address"
                      className={`${styles.input}`}
                      required
                      value={landmark}
                      onChange={(e) => setLandmark(e.target.value)}
                    />
                  </div>

                  <div className="w-full pb-2">
                    <label className="block pb-2">Zip Code</label>
                    <input
                      type="number"
                      className={`${styles.input}`}
                      required
                      value={zipCode}
                      onChange={(e) => setZipCode(e.target.value)}
                    />
                  </div>

                  <div className="w-full pb-2">
                    <label className="block pb-2">Address Type</label>
                    <select
                      name=""
                      id=""
                      value={addressType}
                      onChange={(e) => setAddressType(e.target.value)}
                      className="w-[95%] border h-[40px] rounded-[5px]"
                    >
                      <option value="" className="block border pb-2">
                        Choose your Address Type
                      </option>
                      {addressTypeData &&
                        addressTypeData.map((item) => (
                          <option
                            className="block pb-2"
                            key={item.name}
                            value={item.name}
                          >
                            {item.name}
                          </option>
                        ))}
                    </select>
                  </div>

                  <div className=" w-full pb-2">
                    <input
                      type="submit"
                      className={`${styles.input} mt-5 cursor-pointer`}
                      required
                      readOnly
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      <br />
      <hr />
      <div className="flex w-full items-center justify-between mt-2 mb-2">
        <HiLocationMarker size={20} color="red"/><h1 className="text-[18px] font-[600] text-[#000000ba] ">
          My Addresses
        </h1>
        <AiOutlinePlusCircle
          size={25}
          className="text-blue-500 cursor-pointer"
          onClick={() => setOpen(true)}
        />
         
        
      </div>
      
      <hr />




      
      {user &&
        user.addresses.map((item, index) => (
          <div
            className="w-full bg-gray-50 h-min 800px:h-[70px] max-400px:h-[70px] rounded-[4px] flex  items-center px-2 shadow justify-between  mb-1"
            key={index}
          >
            <div className="">
            
              <h5 className=" font-[600] max-400px:text-[13px]">
                  {item.addressType}</h5><br /><br />
            </div>
            <div className="flex items-center">
              <h6 className=" pt-2 text-[11px] 800px:text-[unset]  pr-2 ">
                {item.address} {item.landmark}, #{user && user.phoneNumber}
              </h6>
            </div>
          
            <div className="min-w-[10%] flex items-center justify-between  ">
              <AiOutlineDelete
                
                className="cursor-pointer text-red-500 max-400px:text-[20px] 800px:text-[25px] max-400px:pl-1"
                onClick={() => handleDelete(item)}
              />
            </div>
          </div>
        ))}

      {user && user.addresses.length === 0 && (
        <h5 className="text-center pt-8 text-[18px]">
          You not have any saved address!
        </h5>
      )}
    </div>
  );
};
export default ProfileContent;
