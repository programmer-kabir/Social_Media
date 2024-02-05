import React from "react";
import Content from "../../Design/Content";
import { FaHome, FaUserFriends, FaVideo } from "react-icons/fa";
import { MdGroups2 } from "react-icons/md";
import { BsFillCameraReelsFill } from "react-icons/bs";
import { FaFacebookMessenger } from "react-icons/fa";

const LeftSide = () => {
  const content = [
    { icon: <FaHome />, name: "Home" },
    { icon: <FaUserFriends />, name: "Friend" },
    { icon: <FaVideo />, name: "Video" },
    { icon: <MdGroups2 />, name: "Group" },
    { icon: <BsFillCameraReelsFill />, name: "Reels" },
    { icon: <FaFacebookMessenger />, name: "Messenger" },
  ];
  return (
    <Content>
      <section>
        {/* <div className="hover:bg-gray-200 cursor-pointer p-2 rounded-lg transition duration-300 ease-in-out">
          <div className="flex gap-2 px-1 items-center ">
            <img
              className="rounded-full w-9 h-9 bg-cover"
              src="https://i.ibb.co/n1XNL6c/Whats-App-Image-2024-01-19-at-18-05-45-d402cd5b.jpg"
              alt=""
            />
            <h2 className="font-medium">MD KABIR AHMED</h2>
          </div>
        </div> */}
        <div className="pt-2">
          {content.map((item, index) => (
            <div key={index} className="pb-1">
              <div className="hover:bg-gray-200 cursor-pointer p-2 rounded-lg transition duration-300 ease-in-out">
                <div className="flex gap-2 px-1 items-center">
                  {item.icon && (
                    <div className="">
                      {React.cloneElement(item.icon, {
                        size: "23px",
                      })}
                    </div>
                  )}
                  <h2 className="font-medium">{item.name}</h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Content>
  );
};

export default LeftSide;
