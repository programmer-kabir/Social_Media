import React from "react";
import Navbar from "../SharePages/Navbar/Navbar";
import StoryCard from "../../Component/HomePage/StoryCard/StoryCard";
import LeftSide from "../../Component/HomePage/LeftSide/LeftSide";

const HomePage = () => {
  return (
    <section className=" w-full h-screen">
      {/* <Navbar /> */}
      <div className="flex h-full">
        {/* Left section */}
        <section className="w-1/4 mt-5">
          <LeftSide />
        </section>
        {/* Middle section */}
        <section className="w-1/2 mt-5">
          <div>
            <StoryCard />
          </div>
        </section>
        {/* Right section */}
        <section className="w-1/4">3</section>
      </div>
    </section>
  );
};

export default HomePage;
