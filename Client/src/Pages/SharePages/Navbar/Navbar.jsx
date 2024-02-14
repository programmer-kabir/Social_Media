import React, { useState } from "react";
import Content from "../../../Component/Design/Content";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import useUser from "../../../Component/Hooks/useUser";
import useAuth from "../../../Component/Hooks/useAuth";
const Navbar = () => {
  const [users] = useUser();
  const { user } = useAuth();
  const currentEmail = user?.email;
  const userData = users.find((user) => user.Email === currentEmail);
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
              <Link to={`/profile/${userData?._id}`}>
                {userData?.image ? (
                  "ace"
                ) : (
                  <FaUserCircle className="rounded-full w-10 h-10"/>
                )}
              </Link>
              <div className="flex flex-col pr-5">
                <Link>
                  <p className="font-medium text-base">{userData?.FullName}</p>
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
