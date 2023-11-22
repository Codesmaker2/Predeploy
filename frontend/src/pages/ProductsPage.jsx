import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import Loader from "../components/Layout/Loader";
import ProductCard from "../components/Route/ProductCard/ProductCard";
import styles from "../styles/styles";
import NavButton from "../components/Route/Hero/NavButton";
import { TbDatabaseOff } from "react-icons/tb";
import { RxCaretLeft } from "react-icons/rx";

const ProductsPage = () => {
  const [searchParams] = useSearchParams();
  const categoryData = searchParams.get("category");
  const {allProducts,isLoading} = useSelector((state) => state.products);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (categoryData === null) {
      const d = allProducts;
      setData(d);
    } else {
      const d =
      allProducts && allProducts.filter((i) => i.category === categoryData);
      setData(d);
    }
    //    window.scrollTo(0,0);
  }, [allProducts,categoryData]);

  return (
  <>
  {
    isLoading ? (
      <Loader />
    ) : (
      <div className="!overflow-scroll h-[96vh] w-full">
      <Header activeHeading={3} />
      <br />
      <br />
      <br />
      <Link to={"/"}><RxCaretLeft size={35} color="blue" className="ml-1"/></Link>
      <div className={`${styles.section}`}>
        <div className="grid grid-cols-2 gap-[5px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
          {data && data.map((i, index) => <ProductCard data={i} key={index} />)}
        </div>
        {data && data.length === 0 ? (
          
          <h1 className="flex items-center justify-center text-center w-full pb-[100px] text-[20px] text-gray-500">
            <TbDatabaseOff color="gray" size={40}/>
            Product Not found!
          </h1>
        ) : null}
      </div>
      <NavButton/>
     
      <Footer />
    </div>
    )
  }
  </>
  );
};

export default ProductsPage;
