import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import styles from "../../../styles/styles";
// import YouTubeVideo from "./Video";
import TypeWriterEffect from "react-typewriter-effect";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { BsDropletHalf } from "react-icons/bs";
import FAQPage from "../../../pages/FaqWeb";
import Support from "./Support";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../../../styles/styles";
import ReactPlayer from "react-player";
import { BiArrowToTop} from "react-icons/bi";

// ..
AOS.init();

const Hero = () => {
  const settings = {
    arrows: null,
    nextArrow: null,
    autoplay: true,
    autoplaySpeed: 3000, // Adjust the speed (in milliseconds)
    dots: false, // Show navigation dots
    infinite: true, // Enable infinite loop
    speed: 500, // Transition speed (in milliseconds)
    slidesToShow: 4, // Number of items to show at once
    slidesToScroll: 1, // Number of items to scroll on each autoplay
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  };


  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add a scroll event listener to track the user's scroll position
    window.addEventListener('scroll', handleScroll);
    return () => {
      // Remove the event listener when the component unmounts
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    // Check if the user has scrolled down a certain amount (e.g., 200px)
    if (window.pageYOffset > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    // Scroll to the top of the page when the button is clicked
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // For a smooth scrolling animation
    });
  };

  return (
    <section className=" bg-white overflow-hidden w-full  ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 110 1440 170"
        data-aos="fade-right"
        data-aos-delay="400"
   
      >
        <path
          fill="#0099ff"
          fill-opacity="1"
          d="M0,224L6.2,224C12.3,224,25,224,37,229.3C49.2,235,62,245,74,240C86.2,235,98,213,111,186.7C123.1,160,135,128,148,112C160,96,172,96,185,85.3C196.9,75,209,53,222,64C233.8,75,246,117,258,133.3C270.8,149,283,139,295,160C307.7,181,320,235,332,256C344.6,277,357,267,369,224C381.5,181,394,107,406,90.7C418.5,75,431,117,443,144C455.4,171,468,181,480,186.7C492.3,192,505,192,517,192C529.2,192,542,192,554,170.7C566.2,149,578,107,591,112C603.1,117,615,171,628,170.7C640,171,652,117,665,128C676.9,139,689,213,702,218.7C713.8,224,726,160,738,138.7C750.8,117,763,139,775,160C787.7,181,800,203,812,213.3C824.6,224,837,224,849,234.7C861.5,245,874,267,886,272C898.5,277,911,267,923,234.7C935.4,203,948,149,960,133.3C972.3,117,985,139,997,149.3C1009.2,160,1022,160,1034,154.7C1046.2,149,1058,139,1071,138.7C1083.1,139,1095,149,1108,176C1120,203,1132,245,1145,250.7C1156.9,256,1169,224,1182,213.3C1193.8,203,1206,213,1218,186.7C1230.8,160,1243,96,1255,112C1267.7,128,1280,224,1292,229.3C1304.6,235,1317,149,1329,106.7C1341.5,64,1354,64,1366,74.7C1378.5,85,1391,107,1403,101.3C1415.4,96,1428,64,1434,48L1440,32L1440,0L1433.8,0C1427.7,0,1415,0,1403,0C1390.8,0,1378,0,1366,0C1353.8,0,1342,0,1329,0C1316.9,0,1305,0,1292,0C1280,0,1268,0,1255,0C1243.1,0,1231,0,1218,0C1206.2,0,1194,0,1182,0C1169.2,0,1157,0,1145,0C1132.3,0,1120,0,1108,0C1095.4,0,1083,0,1071,0C1058.5,0,1046,0,1034,0C1021.5,0,1009,0,997,0C984.6,0,972,0,960,0C947.7,0,935,0,923,0C910.8,0,898,0,886,0C873.8,0,862,0,849,0C836.9,0,825,0,812,0C800,0,788,0,775,0C763.1,0,751,0,738,0C726.2,0,714,0,702,0C689.2,0,677,0,665,0C652.3,0,640,0,628,0C615.4,0,603,0,591,0C578.5,0,566,0,554,0C541.5,0,529,0,517,0C504.6,0,492,0,480,0C467.7,0,455,0,443,0C430.8,0,418,0,406,0C393.8,0,382,0,369,0C356.9,0,345,0,332,0C320,0,308,0,295,0C283.1,0,271,0,258,0C246.2,0,234,0,222,0C209.2,0,197,0,185,0C172.3,0,160,0,148,0C135.4,0,123,0,111,0C98.5,0,86,0,74,0C61.5,0,49,0,37,0C24.6,0,12,0,6,0L0,0Z"
        ></path>
      </svg>
      <div className="container flex flex-col justify-center max-400px:h-[60vh] max-500px:h-[60vh] max-640px:h-[60vh] text-center mx-auto sm:py-2 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center  text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left ">
          <div className="flex max-400px:justify-center max-500px:justify-center max-640px:justify-center max-768px:justify-center ">
            <BsDropletHalf
              size={30}
              color="blue"
              className="flex animate-spin  text-center animate-duration-500 "
            />
          </div>
          <div className="flex w-full ">
            <h1
              data-aos="fade-right"
              data-aos-delay="400"
              className="max-400px:text-3xl max-500px:text-3xl max-640px:text-4xl text-5xl font-bold leading 400px:text-3xl  w-full sm:text-5xl"
            >
              Mineral
              <span
                data-aos="fade-right"
                data-aos-delay="400"
                className="dark:text-blue-500"
              >
                {" "}
                Water{" "}
              </span>
              Refilling Station
            </h1>
          </div>
          <div className="flex max-400px:justify-center mt-5 390px:justify-center 400px:justify-center 800px:justify-start">
            <TypeWriterEffect
              textStyle={{
                fontFamily: "Roboto",
                color: "gray",
                fontWeight: 500,
                fontSize: "1.5em",
              }}
              startDelay={2000}
              cursorColor="#3F3D56"
              multiText={[
                "Water",
                "Crystal Clear",
                "Good Water Quality",
                "Always Free Delivery",
                "Order Now",
              ]}
              multiTextDelay={1000}
              typeSpeed={30}
            />
          </div>
          <div className="flex text-[12px] max-400px:text-center 390px:text-center 400px:text-center 800px:text-left  390px:px-5 800px:px-0  400px:px-5">
            <p
              data-aos="fade-right"
              data-aos-delay="400"
              className="mt-4 mb-8  w-full ease-in duration-300 text-[12px]"
            >
              Dictum aliquam porta in condimentum ac integer
              <br
                data-aos="fade-right"
                data-aos-delay="400"
                className="hidden md:inline lg:hidden"
              />
              turpis pulvinar, est scelerisque ligula sem
            </p>
          </div>
          <div
            data-aos="fade-right"
            data-aos-delay="400"
            className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start 390px:px-4 400px:px-4"
          >
            <Link to="/">
              <div className="px-3 py-2  text-lg font-semibold  shadow-md bg-blue-500 text-white  border rounded-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ...">
                Download App
              </div>
            </Link>
            <div className="px-8 py-2 text-lg font-semibold border shadow-md border-blue-500 rounded-xl dark:border-gray-100  ">
              Learn more
            </div>
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="400"
          className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 max-400px:hidden max-500px:hidden max-640px:hidden max-768px:hidden"
        >
          <img
            src="https://media.istockphoto.com/id/1131617171/photo/water-delivery-man-in-blue-t-shirt-and-cap.jpg?s=612x612&w=0&k=20&c=kG8v7OJpptuVfbkA2bLx_Op7GyjnsnW-FYhdebHqvfo="
            alt=""
            className="object-contain h-80  rounded-[30px] hover:opacity-70 "
          />
          <img
            src="https://media.istockphoto.com/id/1131617173/photo/water-delivery-man-in-blue-t-shirt-and-cap.jpg?s=612x612&w=0&k=20&c=qNjLodfiNQBUgwoBSJEd_sh3x0xX0E_2aU5UIclxOIs="
            alt=""
            className="object-contain h-80  rounded-[30px] hover:opacity-70 "
          />
          <img
            src="https://media.istockphoto.com/id/1131616903/photo/water-delivery-man-in-blue-t-shirt-and-cap.jpg?s=612x612&w=0&k=20&c=81oUw_ENCWadxlA1v_Zo28CGQDlcma1VgqMmDI2oiW4="
            alt=""
            className="object-contain h-80  rounded-[30px] hover:opacity-70 "
          />
        </div>
      </div>

      <div
        data-aos="fade-left"
        data-aos-delay="400"
        className="flex items-center justify-center max-400px:px-10 max-500px:px-10 max-640px:px-10 max-768px:px-10 lg:mt-0 768px:hidden 800px:hidden 1024px:hidden "
      >
        <img
          src="https://media.istockphoto.com/id/1131617171/photo/water-delivery-man-in-blue-t-shirt-and-cap.jpg?s=612x612&w=0&k=20&c=kG8v7OJpptuVfbkA2bLx_Op7GyjnsnW-FYhdebHqvfo="
          alt=""
          className=" h-40 w-30  rounded-[30px] hover:opacity-70 "
        />
        <img
          src="https://media.istockphoto.com/id/1131617173/photo/water-delivery-man-in-blue-t-shirt-and-cap.jpg?s=612x612&w=0&k=20&c=qNjLodfiNQBUgwoBSJEd_sh3x0xX0E_2aU5UIclxOIs="
          alt=""
          className="h-50  w-20  rounded-[30px] hover:opacity-70 "
        />
        <img
          src="https://media.istockphoto.com/id/1131616903/photo/water-delivery-man-in-blue-t-shirt-and-cap.jpg?s=612x612&w=0&k=20&c=81oUw_ENCWadxlA1v_Zo28CGQDlcma1VgqMmDI2oiW4="
          alt=""
          className=" h-40 w-30   rounded-[30px] hover:opacity-70 "
        />
      </div>

      <div className="relative w-full h-full border shadow-xl  flex flex-col justify-center items-center bg-white max-400px:hidden max-500px:hidden max-640px:hidden max-768px:hidden">
        {/* :FEATURES */}
        <div
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          data-aos-offset="0"
          className="container mt-14 p-5 w-full grid grid-cols-12 sm:grid-cols-5 gap-2 text-xs md:text-sm"
        >
          {/* ::Auto-Magic Layouts */}
          <div className="col-span-4 sm:col-span-1 inline-flex flex-col items-center border-r border-gray-300 text-blue-500 uppercase ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              fill="#0066FF"
              class="bi bi-truck"
              viewBox="0 0 16 16"
            >
              <path
                d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
                fill="#0066FF"
              ></path>{" "}
            </svg>
            <span className="text-center">Free & Fast Delivery</span>
          </div>

          {/* ::Four Sizes */}
          <div className="col-span-4 sm:col-span-1 inline-flex flex-col items-center border-r border-gray-300 text-gray-400 uppercase">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              fill="#0066FF"
              class="bi bi-save"
              viewBox="0 0 16 16"
            >
              <path d="M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v7.293l2.646-2.647a.5.5 0 0 1 .708.708l-3.5 3.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L7.5 9.293V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1H2z" />{" "}
            </svg>
            <span className="text-center text-blue-500">
              Daily Surprise Promo's
            </span>
          </div>

          {/* ::Quality Materials */}
          <div className="col-span-4 sm:col-span-1 inline-flex flex-col items-center border-r border-gray-300 text-gray-400 uppercase">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              fill="#0066FF"
              class="bi bi-droplet-half"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M7.21.8C7.69.295 8 0 8 0c.109.363.234.708.371 1.038.812 1.946 2.073 3.35 3.197 4.6C12.878 7.096 14 8.345 14 10a6 6 0 0 1-12 0C2 6.668 5.58 2.517 7.21.8zm.413 1.021A31.25 31.25 0 0 0 5.794 3.99c-.726.95-1.436 2.008-1.96 3.07C3.304 8.133 3 9.138 3 10c0 0 2.5 1.5 5 .5s5-.5 5-.5c0-1.201-.796-2.157-2.181-3.7l-.03-.032C9.75 5.11 8.5 3.72 7.623 1.82z"
              />{" "}
              <path
                fill-rule="evenodd"
                d="M4.553 7.776c.82-1.641 1.717-2.753 2.093-3.13l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448z"
              />{" "}
            </svg>
            <span className="text-center text-blue-500">
              Good Services with Quality Water
            </span>
          </div>

          {/* ::Fast Shipping */}
          <div className="col-span-6 sm:col-span-1 inline-flex flex-col items-center border-r border-gray-300 text-gray-400 uppercase">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              fill="#0066FF"
              viewBox="0 0 24 24"
            >
              <path d="M13.02,19.93v2.02c2.01-0.2,3.84-1,5.32-2.21l-1.42-1.43C15.81,19.17,14.48,19.75,13.02,19.93z" />
              <path d="M4.03,12c0-4.05,3.03-7.41,6.95-7.93V2.05C5.95,2.58,2.03,6.84,2.03,12c0,5.16,3.92,9.42,8.95,9.95v-2.02 C7.06,19.41,4.03,16.05,4.03,12z" />
              <path d="M19.95,11h2.02c-0.2-2.01-1-3.84-2.21-5.32l-1.43,1.43C19.19,8.21,19.77,9.54,19.95,11z" />
              <path d="M18.34,4.26c-1.48-1.21-3.32-2.01-5.32-2.21v2.02c1.46,0.18,2.79,0.76,3.9,1.62L18.34,4.26z" />
              <path d="M18.33,16.9l1.43,1.42c1.21-1.48,2.01-3.31,2.21-5.32h-2.02C19.77,14.46,19.19,15.79,18.33,16.9z" />
              <path d="M16,11.1C16,8.61,14.1,7,12,7s-4,1.61-4,4.1c0,1.66,1.33,3.63,4,5.9C14.67,14.73,16,12.76,16,11.1z M12,12 c-0.59,0-1.07-0.48-1.07-1.07c0-0.59,0.48-1.07,1.07-1.07s1.07,0.48,1.07,1.07C13.07,11.52,12.59,12,12,12z" />
            </svg>
            <span className="text-center text-blue-500">NEAR AT YOUR HOME</span>
          </div>

          {/* ::Layflat Page */}
          <div className="col-span-6 sm:col-span-1 inline-flex flex-col items-center border-r-none border-gray-300 text-gray-400 uppercase">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              fill="#0066FF"
              class="bi bi-shop"
              viewBox="0 0 16 16"
            >
              {" "}
              <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z" />{" "}
            </svg>
            <span className="text-center text-blue-500">
              DAILY OPEN STATION
            </span>
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 130 1440 110">
        <path
          fill="#f3f4f7"
          fill-opacity="1"
          d="M0,288L12.6,277.3C25.3,267,51,245,76,229.3C101.1,213,126,203,152,192C176.8,181,202,171,227,170.7C252.6,171,278,181,303,186.7C328.4,192,354,192,379,197.3C404.2,203,429,213,455,213.3C480,213,505,203,531,197.3C555.8,192,581,192,606,192C631.6,192,657,192,682,192C707.4,192,733,192,758,176C783.2,160,808,128,834,117.3C858.9,107,884,117,909,138.7C934.7,160,960,192,985,176C1010.5,160,1036,96,1061,112C1086.3,128,1112,224,1137,234.7C1162.1,245,1187,171,1213,160C1237.9,149,1263,203,1288,213.3C1313.7,224,1339,192,1364,192C1389.5,192,1415,224,1427,240L1440,256L1440,0L1427.4,0C1414.7,0,1389,0,1364,0C1338.9,0,1314,0,1288,0C1263.2,0,1238,0,1213,0C1187.4,0,1162,0,1137,0C1111.6,0,1086,0,1061,0C1035.8,0,1011,0,985,0C960,0,935,0,909,0C884.2,0,859,0,834,0C808.4,0,783,0,758,0C732.6,0,707,0,682,0C656.8,0,632,0,606,0C581.1,0,556,0,531,0C505.3,0,480,0,455,0C429.5,0,404,0,379,0C353.7,0,328,0,303,0C277.9,0,253,0,227,0C202.1,0,177,0,152,0C126.3,0,101,0,76,0C50.5,0,25,0,13,0L0,0Z"
        ></path>
      </svg>

      <section
        className=" bg-white 800px:px-10 800px:pb-10 ease-in duration-100 grid grid-cols-2 max-768px:grid max-768px:grid-cols-1 max-500px:grid max-500px:grid-cols-1 max-640px:grid max-640px:grid-cols-1 max-400px:grid max-400px:grid-cols-1"
        data-aos="fade-down"
        data-aos-delay="100"
        
      >
        <div className="px-10 py-10 max-400px:px-5 400px:px-5 390px:px-5 text-justify">
          <h1 className="font-bold text-center text-[20px] 390px:text-[20px] 400pxtext-[20px]">
            OUR PROCESS
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti
            dolor accusantium maiores libero obcaecati vel amet aliquid alias
            ipsa porro doloremque mollitia sapiente harum eaque commodi
            deserunt, doloribus pariatur velit!. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Voluptates id repellendus architecto?
            Commodi, totam alias possimus, rem maxime illo cum accusantium
            corporis hic, quas sapiente saepe dolore iusto ratione repellat?
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti
            dolor accusantium maiores libero obcaecati vel amet aliquid alias
            ipsa porro doloremque mollitia sapiente harum eaque commodi
            deserunt, doloribus pariatur velit!. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Voluptates id repellendus architecto?
            Commodi, totam alias possimus, rem maxime illo cum accusantium
            corporis hic, quas sapiente saepe dolore iusto ratione repellat?
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti
            dolor accusantium maiores libero obcaecati vel amet aliquid alias
            ipsa porro doloremque mollitia sapiente harum eaque commodi
            deserunt, doloribus pariatur velit!. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Voluptates id repellendus architecto?
            Commodi, totam alias possimus, rem maxime illo cum accusantium
            corporis hic, quas sapiente saepe dolore iusto ratione repellat?
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti
            dolor accusantium maiores libero obcaecati vel amet aliquid alias
            ipsa porro doloremque mollitia sapiente harum eaque commodi
       
          </p>
        </div>
        <div className="px-5 py-2 h-[40vh] ">
          <ReactPlayer
            className="react-player"
            url="https://www.youtube.com/watch?v=wko93JCYwKk"
            controls
            width="100%"
            height="100%"
          />
        </div>

        <hr />
      </section>
      <hr />

      <section className="800px:px-20  ">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 180 1440 100">
          <path
            fill="#f3f4f5"
            fill-opacity="1"
            d="M0,32L14.1,58.7C28.2,85,56,139,85,149.3C112.9,160,141,128,169,128C197.6,128,226,160,254,154.7C282.4,149,311,107,339,112C367.1,117,395,171,424,192C451.8,213,480,203,508,197.3C536.5,192,565,192,593,197.3C621.2,203,649,213,678,192C705.9,171,734,117,762,106.7C790.6,96,819,128,847,133.3C875.3,139,904,117,932,133.3C960,149,988,203,1016,240C1044.7,277,1073,299,1101,261.3C1129.4,224,1158,128,1186,90.7C1214.1,53,1242,75,1271,85.3C1298.8,96,1327,96,1355,85.3C1383.5,75,1412,53,1426,42.7L1440,32L1440,0L1425.9,0C1411.8,0,1384,0,1355,0C1327.1,0,1299,0,1271,0C1242.4,0,1214,0,1186,0C1157.6,0,1129,0,1101,0C1072.9,0,1045,0,1016,0C988.2,0,960,0,932,0C903.5,0,875,0,847,0C818.8,0,791,0,762,0C734.1,0,706,0,678,0C649.4,0,621,0,593,0C564.7,0,536,0,508,0C480,0,452,0,424,0C395.3,0,367,0,339,0C310.6,0,282,0,254,0C225.9,0,198,0,169,0C141.2,0,113,0,85,0C56.5,0,28,0,14,0L0,0Z"
          ></path>
        </svg>

        <div className="grid grid-cols-2 max-400px:grid max-400px:grid-cols-1 max-500px:grid  max-500px:grid-cols-1  max-640px:grid  max-640px:grid-cols-1 max-768px:grid max-768px:grid-cols-1">
          <div className="px-10 400px:px-5 max-400px:px-5 390px:px-5 text-justify">
            <h1
              className="font-bold text-[30px] max-400px:pt-5 max-500px:pt-5 max-640px:pt-5 max-768px:pt-5 
            max-400px:text-[20px] max-500px:text-[20px] max-640px:text-[20px] max-768px:text-[20px]"
            >
              Our Products
            </h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi esse
            magni laudantium neque officia nisi, sed iure repellendus voluptate.
            Sequi provident omnis consequatur sapiente vel ipsam hic perferendis
            molestias dolore? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quasi esse magni laudantium neque officia nisi, sed iure
            repellendus voluptate. Sequi provident omnis consequatur sapiente
            vel ipsam hic perferendis molestias dolore? Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Quasi esse magni laudantium neque
            officia nisi, sed iure repellendus voluptate. Sequi provident omnis
            consequatur sapiente vel ipsam hic perferendis molestias dolore?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi esse
            magni laudantium neque officia nisi, sed iure repellendus voluptate.
            Sequi provident omnis consequatur sapiente vel ipsam hic perferendis
            molestias dolore?
            <hr />
          </div>
          <div>
            <Slider {...settings} className="bg-white">
              {/* Add your product items here */}
              <div>
                <img
                  src="https://down-ph.img.susercontent.com/file/93a3211b7ceacf91e6335643cb7b6480"
                  alt="Product 1"
                  className="w-60 h-60  border max-400px:h-[100%] max-400px:w-[100%] 400px:h-[100%] 390px:w-[100%]  shadow-lg rounded-[20px] hover:mx-auto transition-transform duration-300 transform hover:scale-105"
                />
                {/* <h3>Product 1</h3>
            <p>Description for Product 1</p> */}
              </div>
              <div>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGhIRYJB-9X8M-JAEngwz6ildEpHpAmbBvKzb8w9NlwWqwxofOnwIhabV3mEmJASR_4R0&usqp=CAU"
                  alt="Product 1"
                  className="w-60 h-60 border shadow-lg rounded-[20px] max-400px:h-[100%] max-400px:w-[100%] 400px:h-[100%] 390px:w-[100%] hover:mx-auto transition-transform duration-300 transform hover:scale-105"
                />
                {/* <h3>Product 1</h3>
            <p>Description for Product 1</p> */}
              </div>
              <div>
                <img
                  src="https://down-ph.img.susercontent.com/file/2faff09308079c871c09df8025884578"
                  alt="Product 1"
                  className="w-60 h-60 border shadow-lg rounded-[20px] max-400px:h-[100%] max-400px:w-[100%] 400px:h-[100%] 390px:w-[100%]  hover:mx-auto transition-transform duration-300 transform hover:scale-105"
                />
                {/* <h3>Product 1</h3>
            <p>Description for Product 1</p> */}
              </div>
              <div>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRNSNB9h_PIJy8Tkj8wHBHzmZRTOA6qz9QGg&usqp=CAU"
                  alt="Product 1"
                  className="w-60 h-60 border shadow-lg rounded-[20px] max-400px:h-[100%] max-400px:w-[100%] 400px:h-[100%] 390px:w-[100%] hover:mx-auto transition-transform duration-300 transform hover:scale-105"
                />
                {/* <h3>Product 1</h3>
            <p>Description for Product 1</p> */}
              </div>
              {/* Add more product items as needed */}
              <div>
                <img
                  src="https://lzd-img-global.slatic.net/g/p/67e00bbcbe2f2161278a32fcb6a99d5a.jpg_200x200q80.jpg_.webp"
                  alt="Product 1"
                  className="w-60 h-60 border shadow-lg rounded-[20px] max-400px:h-[100%] max-400px:w-[100%] 400px:h-[100%] 390px:w-[100%] hover:mx-auto transition-transform duration-300 transform hover:scale-105"
                />
                {/* <h3>Product 1</h3>
            <p>Description for Product 1</p> */}
              </div>
              {/* Add more product items as needed */}
              <div>
                <img
                  src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQMNXGQHvsDOtx9OlJVNTp_GV4eGCPV-bC3LIhL8ee2IcrwGLrFol1ZGS0w3OYREJAI-Dm_z9v99rD7cIKGkl35TTKqsXng-4qMCLXGjU4bh0CoemEw56WmuvtLXrB5&usqp=CAc"
                  alt="Product 1"
                  className="w-60 h-60 border shadow-lg rounded-[20px] max-400px:h-[100%] max-400px:w-[100%] 400px:h-[100%] 390px:w-[100%]  hover:mx-auto transition-transform duration-300 transform hover:scale-105"
                />
                {/* <h3>Product 1</h3>
            <p>Description for Product 1</p> */}
              </div>
              {/* Add more product items as needed */}

              <div>
                <img
                  src="https://down-ph.img.susercontent.com/file/b888bd326669848a45b53d38c9f40ce3"
                  alt="Product 1"
                  className="w-60 h-60 border shadow-lg rounded-[20px] max-400px:h-[100%] max-400px:w-[100%] 400px:h-[100%] 390px:w-[100%] hover:mx-auto transition-transform duration-300 transform hover:scale-105"
                />
                {/* <h3>Product 1</h3>
            <p>Description for Product 1</p> */}
              </div>
              {/* Add more product items as needed */}
            </Slider>
          </div>
        </div>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 30 1440 100">
          <path
            fill="#f3f4f5"
            fill-opacity="1"
            d="M0,224L8.3,192C16.6,160,33,96,50,74.7C66.2,53,83,75,99,85.3C115.9,96,132,96,149,133.3C165.5,171,182,245,199,261.3C215.2,277,232,235,248,192C264.8,149,281,107,298,80C314.5,53,331,43,348,69.3C364.1,96,381,160,397,165.3C413.8,171,430,117,447,101.3C463.4,85,480,107,497,122.7C513.1,139,530,149,546,133.3C562.8,117,579,75,596,53.3C612.4,32,629,32,646,69.3C662.1,107,679,181,695,181.3C711.7,181,728,107,745,101.3C761.4,96,778,160,794,202.7C811,245,828,267,844,256C860.7,245,877,203,894,170.7C910.3,139,927,117,943,133.3C960,149,977,203,993,240C1009.7,277,1026,299,1043,288C1059.3,277,1076,235,1092,181.3C1109,128,1126,64,1142,58.7C1158.6,53,1175,107,1192,122.7C1208.3,139,1225,117,1241,96C1257.9,75,1274,53,1291,58.7C1307.6,64,1324,96,1341,106.7C1357.2,117,1374,107,1390,106.7C1406.9,107,1423,117,1432,122.7L1440,128L1440,320L1431.7,320C1423.4,320,1407,320,1390,320C1373.8,320,1357,320,1341,320C1324.1,320,1308,320,1291,320C1274.5,320,1258,320,1241,320C1224.8,320,1208,320,1192,320C1175.2,320,1159,320,1142,320C1125.5,320,1109,320,1092,320C1075.9,320,1059,320,1043,320C1026.2,320,1010,320,993,320C976.6,320,960,320,943,320C926.9,320,910,320,894,320C877.2,320,861,320,844,320C827.6,320,811,320,794,320C777.9,320,761,320,745,320C728.3,320,712,320,695,320C678.6,320,662,320,646,320C629,320,612,320,596,320C579.3,320,563,320,546,320C529.7,320,513,320,497,320C480,320,463,320,447,320C430.3,320,414,320,397,320C380.7,320,364,320,348,320C331,320,314,320,298,320C281.4,320,265,320,248,320C231.7,320,215,320,199,320C182.1,320,166,320,149,320C132.4,320,116,320,99,320C82.8,320,66,320,50,320C33.1,320,17,320,8,320L0,320Z"
          ></path>
        </svg>
      </section>
      <hr />
      <section
        className="800px:grid 800px:grid-cols-2 grid grid-cols-1 bg-gray-100 800px:px-20 pb-10 h-[70vh] ease-in duration-300"
        data-aos="fade-down"
        data-aos-delay="400"
      >
        <div className="bg-blue-500 800px:rounded-bl-[20px] shadow-lg grid grid-cols-1 max-400px:px-5">
          <h1 className="font-bold text-center text-[20px] 800px:px-20 800px:pt-20 max-400px:text-[20px] 400px:py-2 390px:py-2 390px:text-[20px] 400px:text-[20px] max-400px:pt-5">
            ABOUT US
          </h1>
          <p className="800px:px-20 text-justify 800px:py-10 400px:px-5 390px:px-5 text-white ">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ex
            sint incidunt sed reiciendis saepe dolore recusandae. Mollitia
            blanditiis debitis, deserunt amet repellat recusandae unde assumenda
            animi. Assumenda, maiores. Et. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ex
            sint incidunt sed reiciendis saepe dolore recusandae. Mollitia
            blanditiis debitis, deserunt amet repellat recusandae unde assumenda
            animi. Assumenda, maiores. Et. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ex
            sint incidunt sed reiciendis saepe dolore recusandae. Mollitia
            blanditiis debitis, deserunt amet repellat recusandae unde assumenda
            animi. Assumenda, maiores. Et. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ex
            sint incidunt sed reiciendis saepe dolore recusandae. Mollitia
            blanditiis debitis, deserunt amet repellat recusandae unde assumenda
            animi. Assumenda, maiores. Et. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ex
            sint incidunt sed reiciendis saepe dolore recusandae. Mollitia
            blanditiis debitis, deserunt amet repellat recusandae unde assumenda
            animi. Assumenda, maiores. Et. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ex
            sint incidunt sed reiciendis saepe dolore recusandae. Mollitia
            blanditiis debitis, deserunt amet repellat recusandae unde assumenda
            animi. Assumenda, maiores. Et. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ex
            sint incidunt sed reiciendis saepe dolore recusandae. Mollitia
            blanditiis debitis, deserunt amet repellat recusandae unde assumenda
            animi. Assumenda, maiores. Et.
          </p>
        </div>
        <div className="bg-white 800px:px-20 800px:py-20 800px:rounded-br-[20px] shadow-md max-400px:px-5 ">
          <img
            src="https://img.freepik.com/free-photo/front-view-water-recipients-ice-cube-copy-space_23-2148728782.jpg?size=626&ext=jpg&ga=GA1.1.1737282160.1690642300&semt=ais"
            alt=""
          />
        </div>
      </section>

      <hr />
      <br />

      <br />
      <section>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          className={`w-full block bg-white rounded-lg  lg:flex p-2 400px:px-5 max-400px:px-5 800px:px-20  max-400px:mb-[10px] `}
        >
          <div className="w-full lg:[w-50%] flex flex-col justify-center">
            <h1
              className={`${styles.productTitle} text-blue-900 800px:text-[20px] max-400px:text-[20px] text-center `}
            >
              Our Services & Offer Promo's
            </h1>
            <p className="text-justify  max-400px:text-[12px]">
              Mineral Drinking Water, Certified Cristal clear and Purified Water
              with Value Deals, Just Buy products & Order more with Free
              Delivery & up to 5% off! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Saepe quis velit iusto expedita, impedit sed
              animi praesentium error quo, maxime molestias sint cum
              voluptatibus dignissimos nemo eligendi, nostrum autem minima!
            </p>
          </div>

          <div className="w-full lg:-w[50%] lg:-h[20%] m-auto justify-between ml-8">
            <img
              src="https://whitewaternow.com/wp-content/uploads/2020/04/water-delivery-precautions-coronavirus.jpg"
              alt=""
              className=" w-[70%] h-[30%] ml-10"
            />
          </div>
        </div>
      </section>
      <hr />

      <section
        className="flex bg-white 800px:px-20 800px:pb-10 w-full ease-in duration-300"
        data-aos="fade-down"
        data-aos-delay="400"
        
      >
        <div className="w-full">
          <FAQPage />
        </div>
      </section>
      <hr />

      <section className="flex bg-white">
        <div className="w-full 800px:px-20 800px:mx-20 border shadow-xl">
          <Support />
        </div>
      </section>
      
      <section className="flex w-full ">
        <div class=" bg-blue-900 w-full">
          <div class="max-w-2xl mx-auto text-white py-5">
            <div class="text-center">
              <h3 class="text-3xl mb-3 max-400px:text-[25px]">
                {" "}
                Download our app{" "}
              </h3>
              <p> Stay hydrated. All day, every day. </p>
              <div class="flex justify-center my-10 max-400px:my-2">
                <div class="flex items-center border rounded-lg px-4 py-2 w-52 mx-2">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/888/888857.png"
                    alt=""
                    class="w-7 md:w-8 max-400px:w-5  max-400px:h-6"
                  />
                  <div class="text-left ml-3">
                    <p class="text-xs text-gray-200 max-400px:text-[10px]">
                      Download on{" "}
                    </p>
                    <p class="text-sm md:text-base max-400px:text-[12px]">
                      {" "}
                      Google Play Store{" "}
                    </p>
                  </div>
                </div>
                <div class="flex items-center border  rounded-lg px-4 py-2 w-44 mx-2">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/888/888841.png"
                    alt=""
                    class="w-7 md:w-8 max-400px:w-6  max-400px:h-6"
                  />
                  <div class="text-left ml-3">
                    <p class="text-xs text-gray-200 max-400px:text-[10px]">
                      Download on{" "}
                    </p>
                    <p class="text-sm md:text-base max-400px:text-[12px]">
                      {" "}
                      Apple Store{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-5 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
              <p class="order-2 md:order-1 mt-8 md:mt-0 max-400px:mt-4">
                {" "}
                &copy; Capstonev2, 2023.{" "}
              </p>
              <div class="order-1 md:order-2">
                <span class="px-2">About us</span>
                <span class="px-2 border-l">Contact us</span>
                <span class="px-2 border-l">Privacy Policy</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
      className={`fixed bottom-4 right-4 transition-opacity ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <button
        onClick={scrollToTop}
        className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-600 focus:outline-none"
      >
        <BiArrowToTop size={24} />
      </button>
    </div>
    </section>
  );
};

export default Hero;
