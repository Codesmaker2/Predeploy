import React, { useState } from "react";
import Header from "../components/Layout/Header";
// import Hero from "../components/Route/Hero/Hero";
import Categories from "../components/Route/Categories/Categories";
import BestDeals from "../components/Route/BestDeals/BestDeals";
import FeaturedProduct from "../components/Route/FeaturedProduct/FeaturedProduct";
import Events from "../components/Events/Events";
import Sponsored from "../components/Route/Sponsored";
import Footer from "../components/Layout/Footer";
import { useSelector } from "react-redux";
import { AiOutlineReload } from "react-icons/ai";
import Loader from "../components/Layout/Loader";
import Sliders from "../components/Route/Categories/Slider";
import NavButton from "../components/Route/Hero/NavButton";

const HomePage = () => {
  const { isLoading } = useSelector((state) => state.products);
  const [isRefreshing, setRefreshing] = useState(false);
  const [startY, setStartY] = useState(0);

  const handleTouchStart = (e) => {
    setStartY(e.touches[0].clientY);
  };

  const handleTouchMove = (e) => {
    const currentY = e.touches[0].clientY;

    if (currentY - startY > 50) {
      window.location.reload();

      setRefreshing(true);
    }
  };

  const handleTouchEnd = (e) => {
    e.preventDefault();
    if (isRefreshing) {
      // Simulate an asynchronous operation (e.g., fetching data from an API)
      setTimeout(() => {
        setRefreshing(false);
      }, 1000);
    }
  };

  
  // const refreshPage = () => {
  //   window.location.reload();
  // };
  return (
    <>
    <div className="!overflow-scroll  mb-5 h-[100vh]  w-full 800px:hidden"">

    
      {isLoading ? (
        <Loader />
      ) : (
        <div className="!overflow-scroll">
          <div className="">
            <Header activeHeading={1} />
        
            <div
              className="bg-white"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <Sliders />
            </div>
            <div className="bg-white">
              <Categories />
            </div>

            {isRefreshing && (
              <div className="absolute top-[50px] left-0  w-full h-20 flex items-center justify-center">
                <div className="animate-spin">
                  <AiOutlineReload className="w-8 h-8" color="blue" />
                </div>
              </div>
            )}

            {/* <Hero /> */}
              
            <BestDeals />
            <Events />
            
            <FeaturedProduct />
            <Sponsored />
            <Footer />
            
          </div>
          <NavButton/>
        </div>
      )}
      </div>
    </>
  );
};

export default HomePage;
