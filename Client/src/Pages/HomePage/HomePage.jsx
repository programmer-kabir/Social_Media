import React from "react";
import Navbar from "../SharePages/Navbar/Navbar";
import StoryCard from "../../Component/HomePage/StoryCard/StoryCard";
import LeftSide from "../../Component/HomePage/LeftSide/LeftSide";
import useAuth from "../../Component/Hooks/useAuth";
import { Outlet } from "react-router-dom";

const HomePage = () => {
  const { user } = useAuth();
  return (
    <section className="flex w-full gap-10">
      <div className="w-3/4">
      <StoryCard />
      </div>
      <div>s</div>
    </section>
  );
};

export default HomePage;
