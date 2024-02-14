import React from "react";
import Content from "../../Design/Content";
import { FaHome, FaUserFriends, FaVideo } from "react-icons/fa";
import { MdGroups2 } from "react-icons/md";
import { BsFillCameraReelsFill } from "react-icons/bs";
import { FaFacebookMessenger } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import { HiMiniBars3 } from "react-icons/hi2";
import { IoLogOutOutline } from "react-icons/io5";
import { IoSettingsSharp } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";

const LeftSide = () => {
  const { logOut } = useAuth();
  const handleLogOut = () => {
    logOut();
  };
  const content = [
    { icon: <FaHome />, name: "Home" },
    { icon: <FaUserFriends />, name: "Friend" },
    { icon: <FaVideo />, name: "Video" },
    { icon: <MdGroups2 />, name: "Group" },
    { icon: <BsFillCameraReelsFill />, name: "Reels" },
    { icon: <FaFacebookMessenger />, name: "Messenger" },
    { icon: <IoSettingsSharp />, name: "Setting" },
    { icon: <IoMdHeartEmpty />, name: "Notification" },
  ];
  return (
    <Content>
      <section className="h-full  border-e px-1">
        <div className="">
          {content.map((item, index) => (
            <div key={index} className="pb-2">
              <div className="hover:bg-gray-200 cursor-pointer p-2 rounded-lg transition duration-300 ease-in-out">
                <div className="flex gap-2 px-1 items-center">
                  {item.icon && (
                    <div className="">
                      {React.cloneElement(item.icon, {
                        size: "23px",
                      })}
                    </div>
                  )}
                  <h2 className="font-medium text-lg">{item.name}</h2>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="">
          <div className="hover:bg-gray-200 cursor-pointer p-2 rounded-lg transition duration-300 ease-in-out">
            <div className="flex gap-2 px-1 items-center ">
              <button
                className="flex font-medium text-lg items-center gap-2"
                onClick={handleLogOut}
              >
                <IoLogOutOutline size={23} />
                Loguot
              </button>
            </div>
          </div>
        </div>
      </section>
    </Content>
  );
};

export default LeftSide;
