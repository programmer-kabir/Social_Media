import React from "react";
import Content from "../../../Component/Design/Content";

const Navbar = () => {
  return (
    <section className="w-full shadow px-">
      <Content>
        <div>
          {/* Left Side */}
          <div className="w-1/12 py-2">
            {/* <img src="https://i.ibb.co/vJ2Xn2x/Untitled-1.png" alt="" /> */}
            {/* <img src="https://i.ibb.co/ckssdm5/navlogo.png" alt="" /> */}
            <img src="https://i.ibb.co/8X55dtB/navlogo.png" alt="" />
          </div>
          {/* Right Side */}
        </div>
      </Content>
    </section>
  );
};

export default Navbar;
