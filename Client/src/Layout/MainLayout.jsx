import React from "react";
import Navbar from "../Pages/SharePages/Navbar/Navbar";
import Footer from "../Pages/SharePages/Footer/Footer";
import { Outlet } from "react-router-dom";
import useAuth from "../Component/Hooks/useAuth";

const MainLayout = () => {
  const {user} = useAuth()
  return (
    <div className="">
    {user && <Navbar />}
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

export default MainLayout;
