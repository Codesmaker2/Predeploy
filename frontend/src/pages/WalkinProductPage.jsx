import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
// import Footer from "../components/Layout/Footer";
// import Header from "../components/Layout/Header";
import Loader from "../components/Layout/Loader";
import ProductCard from "../components/Route/ProductCard/ProductCard";
import styles from "../styles/styles";
import { BiCart } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import Cart from "../components/cart/Cart";
import Wishlist from "../components/Wishlist/Wishlist";
import { RxPinLeft } from "react-icons/rx";

const ProductsPage = () => {
  const [searchParams] = useSearchParams();
  const categoryData = searchParams.get("category");
  const {allProducts,isLoading} = useSelector((state) => state.products);
  const { isAuthenticated, user } = useSelector((state) => state.user);
  //const { isSeller } = useSelector((state) => state.seller);
  // const { wishlist } = useSelector((state) => state.wishlist);
  const { cart } = useSelector((state) => state.cart);
  const [openCart, setOpenCart] = useState(false);
  const [openWishlist, setOpenWishlist] = useState(false);
  // const [open, setOpen] = useState(false);
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
      <div>
      {/* <Header activeHeading={3} /> */}
      <Link to={"/dashboard"}>
      <div className="max-400px:hidden 400px:hidden"><RxPinLeft size={30} className="m-2 hover:text-blue-500"/></div>  
      </Link>
      <div className="flex bg-blue-500 h-[70px] items-center justify-end ">
            {/* <div className={`${styles.noramlFlex} `}>
              <div
                className="relative cursor-pointer mr-[15px]"
                onClick={() => setOpenWishlist(true)}
              >
                <AiFillHeart size={30} color="rgb(255 255 255 / 83%)" />
                <span className="absolute right-0 top-0 rounded-full bg-[#e43840] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                  {wishlist && wishlist.length}
                </span>
              </div>
            </div> */}

            <div className={`${styles.noramlFlex}  `}>
              <div
                className="relative cursor-pointer mr-[15px]"
                onClick={() => setOpenCart(true)}
              >
                <BiCart
                  size={35}
                  color="rgb(255 255 255 / 83%)"
                />
                <span className="absolute right-0 top-0 rounded-full bg-[#e43840] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                  {cart && cart.length}
                </span>
              </div>
            </div>

            <div className={`${styles.noramlFlex}`}>
              <div className="relative cursor-pointer mr-[15px]">
                {isAuthenticated ? (
                  <Link to="">
                    <img
                      src={`${user?.avatar?.url}`}
                      className="w-[30px] h-[30px] 800px:w-[30px] 800px:h-[30px] rounded-full mr-6"
                      alt=""
                    />
                  </Link>
                ) : (
                  <Link to="/login">
                    <CgProfile size={30} color="rgb(255 255 255 / 83%)" />
                  </Link>
                )}
              </div>
            </div>

            {/* cart popup */}
            {openCart ? <Cart setOpenCart={setOpenCart} /> : null}

            {/* wishlist popup */}
            {openWishlist ? (
              <Wishlist setOpenWishlist={setOpenWishlist} />
            ) : null}
          </div>

      <br />
      <br />
      <div className={`${styles.section}`}>
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
          {data && data.map((i, index) => <ProductCard data={i} key={index} />)}
        </div>
        {data && data.length === 0 ? (
          <h1 className="text-center w-full pb-[100px] text-[20px]">
            No products Found!
          </h1>
        ) : null}
      </div>
      
    </div>
    )
  }
  </>
  );
};

export default ProductsPage;
