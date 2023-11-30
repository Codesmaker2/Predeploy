import { React, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import styles from "../../styles/styles";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { server } from "../../server";
import { toast } from "react-toastify";
import {  BsDroplet } from "react-icons/bs";
import {  RxHome } from "react-icons/rx";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    window.localStorage.getItem("isLoggedIn", true);
    await axios
      .post(
        `${server}/user/login-user`,
        {
          email,
          password,
        },
        { withCredentials: true }
      )
      .then((res) => {
        toast.success("Login Success!", {
          theme: "colored",
        });

        navigate("/");
        window.location.reload(true);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  return (
    <div
      className="min-h-screen max-400px:min-h-[100vh] bg-blue-700 border-blue-700 rounded-sm border-[4px] flex flex-col justify-center  bg-no-repeat background-cover"
      //   style={{
      //     backgroundImage: "url(https://okcredit-blog-images-prod.storage.googleapis.com/2022/01/mineralwater2.jpg)",
      // }}
    >
      <div className="flex justify-center text-white top-1 left-20">
        <BsDroplet className=" animate-bounce" size={25} />
      </div>
      <div className="relative text-white top-1 left-20">
        <BsDroplet className=" animate-bounce" size={25} />
      </div>
      <div className="flex justify-end text-white top-0 left-20">
        <BsDroplet className=" animate-bounce" size={25} />
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 100 1440 200"
        className="max-400px:hidden max-500px:hidden max-640px:hidden"
      >
        <path
          fill="#f3f4f5"
          fill-opacity="1"
          d="M0,192L6.5,208C13,224,26,256,39,250.7C51.9,245,65,203,78,186.7C90.8,171,104,181,117,192C129.7,203,143,213,156,218.7C168.6,224,182,224,195,213.3C207.6,203,221,181,234,165.3C246.5,149,259,139,272,122.7C285.4,107,298,85,311,74.7C324.3,64,337,64,350,53.3C363.2,43,376,21,389,53.3C402.2,85,415,171,428,186.7C441.1,203,454,149,467,128C480,107,493,117,506,117.3C518.9,117,532,107,545,112C557.8,117,571,139,584,122.7C596.8,107,610,53,623,37.3C635.7,21,649,43,662,53.3C674.6,64,688,64,701,74.7C713.5,85,726,107,739,122.7C752.4,139,765,149,778,138.7C791.4,128,804,96,817,106.7C830.3,117,843,171,856,202.7C869.2,235,882,245,895,245.3C908.1,245,921,235,934,218.7C947,203,960,181,973,197.3C985.9,213,999,267,1012,288C1024.9,309,1038,299,1051,245.3C1063.8,192,1077,96,1090,101.3C1102.7,107,1116,213,1129,250.7C1141.6,288,1155,256,1168,213.3C1180.5,171,1194,117,1206,101.3C1219.5,85,1232,107,1245,128C1258.4,149,1271,171,1284,197.3C1297.3,224,1310,256,1323,261.3C1336.2,267,1349,245,1362,218.7C1375.1,192,1388,160,1401,176C1414.1,192,1427,256,1434,288L1440,320L1440,0L1433.5,0C1427,0,1414,0,1401,0C1388.1,0,1375,0,1362,0C1349.2,0,1336,0,1323,0C1310.3,0,1297,0,1284,0C1271.4,0,1258,0,1245,0C1232.4,0,1219,0,1206,0C1193.5,0,1181,0,1168,0C1154.6,0,1142,0,1129,0C1115.7,0,1103,0,1090,0C1076.8,0,1064,0,1051,0C1037.8,0,1025,0,1012,0C998.9,0,986,0,973,0C960,0,947,0,934,0C921.1,0,908,0,895,0C882.2,0,869,0,856,0C843.2,0,830,0,817,0C804.3,0,791,0,778,0C765.4,0,752,0,739,0C726.5,0,714,0,701,0C687.6,0,675,0,662,0C648.6,0,636,0,623,0C609.7,0,597,0,584,0C570.8,0,558,0,545,0C531.9,0,519,0,506,0C493,0,480,0,467,0C454.1,0,441,0,428,0C415.1,0,402,0,389,0C376.2,0,363,0,350,0C337.3,0,324,0,311,0C298.4,0,285,0,272,0C259.5,0,246,0,234,0C220.5,0,208,0,195,0C181.6,0,169,0,156,0C142.7,0,130,0,117,0C103.8,0,91,0,78,0C64.9,0,52,0,39,0C25.9,0,13,0,6,0L0,0Z"
        ></path>
      </svg>
      <div className="flex justify-around text-white top-1 left-20">
        <BsDroplet className=" animate-bounce" size={25} />
      </div>
      <div className="relative text-white top-1 left-10">
        <BsDroplet className=" animate-bounce" size={25} />
      </div>
      <div className="flex justify-end text-white top-1 ">
        <BsDroplet className=" animate-bounce" size={25} />
      </div>

      <div className=" sm:mx-auto sm:w-full sm:max-w-md max-400px:h-[70vh] px-4 ">
        <div className=" bg-blue-700 py-4 px-4 shadow shadow-white sm:rounded-lg sm:px-10 max-400px:m-2 border-blue-700 border  max-500px:m-10  max-640px:m-10 max-400px:rounded-lg">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="  items-center justify-center">
              <Link to={"/"}>
                <div className="text-white">
                  <RxHome size={25} />
                </div>
              </Link>
              {/* <div className="flex  justify-center">
                <img
                  src="https://i.ibb.co/ZVVMVrH/Lcd5nd-Bri-removebg-preview.png"
                  alt=""
                  className=" h-[70px] w-[70px] bg-none border rounded-full"
                />
              </div> */}
              <h2 className="text-center text-[18px]  text-white font-bold">
                Login your Account
              </h2>
            </div>
            <hr />
            <div>
              <label
                htmlFor="email"
                className="block max-400px:text-[16px] max-500px:text-[16px] max-640px:text-[16px] max-768px:text-[16px] font-medium text-gray-700"
              >
                {/* <div className="flex">📧 Email address</div> */}
              </label>
              <div className="mt-1 ">
                <input
                  type="email"
                  placeholder="📧Enter Valid Email Address"
                  name="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className=" h-9 appearance-none block w-full px-3 py-2 border border-blue-500 rounded-full shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block max-400px:text-[16px] max-500px:text-[16px] max-640px:text-[16px] max-768px:text-[16px] font-medium text-gray-700"
              >
                {/* <div className="flex">🔐 Password</div> */}
              </label>
              <div className="mt-1 relative">
                <input
                  type={visible ? "text" : "password"}
                  placeholder="🔐Enter Password"
                  name="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className=" h-9 appearance-none block w-full px-3 py-2 border border-blue-500 rounded-full shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
                {visible ? (
                  <AiOutlineEye
                    className="absolute right-2 top-2 cursor-pointer"
                    size={25}
                    onClick={() => setVisible(false)}
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    className="absolute right-2 top-2 cursor-pointer"
                    size={25}
                    onClick={() => setVisible(true)}
                  />
                )}
              </div>
            </div>

            <div className={`${styles.noramlFlex} justify-between`}>
              <div className={`${styles.noramlFlex}`}>
                <input
                  type="checkbox"
                  name="remember-me"
                  id="remember-me"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm  rounded-full"
                >
                  <h4 className="text-white"> Remember me</h4>
                </label>
              </div>
              <div className="text-sm text-white hover:text-red-700">
                <Link to="">Forgot Password</Link>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-blue-600 bg-white hover:bg-blue-700"
              >
                Login
              </button>
            </div>
            <div className={`${styles.noramlFlex} w-full justify-center`}>
              <h4 className="text-white text-sm">Customer</h4>
              <Link to="/sign-up" className="text-blue-600 pl-2">
                <h4 className="font-Roboto text-sm text-white">Registration</h4>
              </Link>
            </div>
          </form>
        </div>
        <div className="relative text-white top-1 left-20">
          <BsDroplet className=" animate-bounce" size={25} />
        </div>
        <div className="relative text-white top-1 left-50">
          <BsDroplet className=" animate-bounce" size={25} />
        </div>
        <div className="absolute text-white top-1 left-50">
          <BsDroplet className=" animate-bounce" size={25} />
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 200"
        className="max-400px:hidden max-500px:hidden max-640px:hidden"
      >
        <path
          fill="#f3f4f5"
          fill-opacity="1"
          d="M0,192L6.5,208C13,224,26,256,39,250.7C51.9,245,65,203,78,186.7C90.8,171,104,181,117,192C129.7,203,143,213,156,218.7C168.6,224,182,224,195,213.3C207.6,203,221,181,234,165.3C246.5,149,259,139,272,122.7C285.4,107,298,85,311,74.7C324.3,64,337,64,350,53.3C363.2,43,376,21,389,53.3C402.2,85,415,171,428,186.7C441.1,203,454,149,467,128C480,107,493,117,506,117.3C518.9,117,532,107,545,112C557.8,117,571,139,584,122.7C596.8,107,610,53,623,37.3C635.7,21,649,43,662,53.3C674.6,64,688,64,701,74.7C713.5,85,726,107,739,122.7C752.4,139,765,149,778,138.7C791.4,128,804,96,817,106.7C830.3,117,843,171,856,202.7C869.2,235,882,245,895,245.3C908.1,245,921,235,934,218.7C947,203,960,181,973,197.3C985.9,213,999,267,1012,288C1024.9,309,1038,299,1051,245.3C1063.8,192,1077,96,1090,101.3C1102.7,107,1116,213,1129,250.7C1141.6,288,1155,256,1168,213.3C1180.5,171,1194,117,1206,101.3C1219.5,85,1232,107,1245,128C1258.4,149,1271,171,1284,197.3C1297.3,224,1310,256,1323,261.3C1336.2,267,1349,245,1362,218.7C1375.1,192,1388,160,1401,176C1414.1,192,1427,256,1434,288L1440,320L1440,320L1433.5,320C1427,320,1414,320,1401,320C1388.1,320,1375,320,1362,320C1349.2,320,1336,320,1323,320C1310.3,320,1297,320,1284,320C1271.4,320,1258,320,1245,320C1232.4,320,1219,320,1206,320C1193.5,320,1181,320,1168,320C1154.6,320,1142,320,1129,320C1115.7,320,1103,320,1090,320C1076.8,320,1064,320,1051,320C1037.8,320,1025,320,1012,320C998.9,320,986,320,973,320C960,320,947,320,934,320C921.1,320,908,320,895,320C882.2,320,869,320,856,320C843.2,320,830,320,817,320C804.3,320,791,320,778,320C765.4,320,752,320,739,320C726.5,320,714,320,701,320C687.6,320,675,320,662,320C648.6,320,636,320,623,320C609.7,320,597,320,584,320C570.8,320,558,320,545,320C531.9,320,519,320,506,320C493,320,480,320,467,320C454.1,320,441,320,428,320C415.1,320,402,320,389,320C376.2,320,363,320,350,320C337.3,320,324,320,311,320C298.4,320,285,320,272,320C259.5,320,246,320,234,320C220.5,320,208,320,195,320C181.6,320,169,320,156,320C142.7,320,130,320,117,320C103.8,320,91,320,78,320C64.9,320,52,320,39,320C25.9,320,13,320,6,320L0,320Z"
        ></path>
      </svg>
      <div className="flex justify-center text-white">
        <BsDroplet className=" animate-bounce" size={25} />
        <BsDroplet className=" animate-bounce" size={25} />
      </div>
      <div className="flex justify-between text-white top-1 left-20">
        <BsDroplet className=" animate-bounce" size={25} />
        <BsDroplet className=" animate-bounce" size={25} />
      </div>
    </div>
  );
};

export default Login;
