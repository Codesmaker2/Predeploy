import React, { useState } from "react";
import Header from "../components/Layout/Header";
import styles from "../styles/styles";
import Loader from "../components/Layout/Loader";
import ProfileSideBar from "../components/Profile/ProfileSidebar";
import ProfileContent from "../components/Profile/ProfileContent";
import { useSelector } from "react-redux";

const ProfilePage = () => {
  const { loading } = useSelector((state) => state.user);
  const [active, setActive] = useState(1);

  return (
    <div className="!overflow-scroll h-[96vh] 800px:hidden bg-white">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />
         
          
          <div className="w-full 800px:w-full sticky 800px:pl-10 800px:pr-10  mt-[16%]">
              <ProfileSideBar active={active} setActive={setActive} />
            </div>
          <div className={`${styles.section} flex bg-gradient-to-r from-white via-blue-200 to-white py-10 max-400px:py-3`}>
           
            <ProfileContent active={active} />
          </div>
        </>
      )}
    </div>
  );
};

export default ProfilePage;
