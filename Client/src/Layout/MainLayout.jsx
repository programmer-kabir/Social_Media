import React from "react";
import Navbar from "../Pages/SharePages/Navbar/Navbar";
import Footer from "../Pages/SharePages/Footer/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="">
      <Navbar />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

export default MainLayout;
