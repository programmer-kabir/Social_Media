import React from "react";
import Navbar from "../Pages/SharePages/Navbar/Navbar";
import Footer from "../Pages/SharePages/Footer/Footer";
import { Outlet } from "react-router-dom";
import useAuth from "../Component/Hooks/useAuth";
import LeftSide from "../Component/HomePage/LeftSide/LeftSide";

const MainLayout = () => {
  const { user } = useAuth();
  return (
    <section className=" w-full h-screen ">
      <div className="">{user && <Navbar />}</div>
      <div className="flex  pt-5">
        {/* Left section */}
        <section className="w-1/4  ">
          <LeftSide />
        </section>
        {/* Middle section */}
        <section className="w-3/4 ">
          <div>
            <Outlet />
          </div>
        </section>
        {/* Right section */}
      </div>
    </section>
  );
};

export default MainLayout;
