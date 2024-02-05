import React from "react";
import Navbar from "../SharePages/Navbar/Navbar";
import StoryCard from "../../Component/StoryCard/StoryCard";

const HomePage = () => {
  return (
    <section className="bg-white w-full h-screen">
      <Navbar />
      <div className="flex h-full">
        {/* Left section */}
        <section className="w-1/4"></section>
        {/* Middle section */}
        <section className="w-1/2 mt-10">
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
