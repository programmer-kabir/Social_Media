import React from "react";
import Content from "../../../Component/Design/Content";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <section className="w-full shadow py-2">
      <Content>
        <div className="flex justify-between">
          {/* Left Side */}
          <div className="w-[10%] flex flex-col justify-center">
            {/* <img src="https://i.ibb.co/vJ2Xn2x/Untitled-1.png" alt="" /> */}
            {/* <img src="https://i.ibb.co/ckssdm5/navlogo.png" alt="" /> */}
            <Link to="/">
              <img src="https://i.ibb.co/8X55dtB/navlogo.png" alt="NavLogo" />
            </Link>
          </div>
          {/* Right Side */}
          <div>
            <div className="flex gap-2 px-1 items-center ">
              <Link>
                <img
                  className="rounded-full w-10 h-10 bg-cover"
                  src="https://i.ibb.co/n1XNL6c/Whats-App-Image-2024-01-19-at-18-05-45-d402cd5b.jpg"
                  alt=""
                />
              </Link>
              <div className="flex flex-col pr-5">
                <Link>
                  <p className="font-medium text-base">MD KABIR AHMED</p>
                </Link>
                <p className="text-base text-gray-500">username</p>
              </div>
              <h2 className="text-blue-500 hover:text-gray-800 cursor-pointer text-xs font-medium">
                Switch
              </h2>
            </div>
          </div>
        </div>
      </Content>
    </section>
  );
};

export default Navbar;
