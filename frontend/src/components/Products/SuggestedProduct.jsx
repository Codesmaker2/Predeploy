import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// import { productData } from "../../static/data";
import styles from "../../styles/styles";
import ProductCard from "../Route/ProductCard/ProductCard";

const SuggestedProduct = ({ data }) => {
  const {allProducts} = useSelector((state) => state.products);
  const [productData,setProductData] = useState();

  useEffect(() => {
    const d =
    allProducts && allProducts.filter((i) => i.category === data.category);
    setProductData(d);
  }, [allProducts,data.category]);

  return (
    <div className="800px:hidden !overflow-scroll h-[60vh]">
      {data ? (
        <div className={`p-1 ${styles.section}`}>
          <h2
            className={`${styles.heading} text-[15px] font-[500]`}
          >
            Related Product
          </h2>
          
          <div className="grid grid-cols-2 gap-[5px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-1">
             {
                productData && productData.map((i,index) => (
                    <ProductCard data={i} key={index} />
                ))
             }
      </div>
        </div>
      ) : null}
    </div>
  );
};

export default SuggestedProduct;
