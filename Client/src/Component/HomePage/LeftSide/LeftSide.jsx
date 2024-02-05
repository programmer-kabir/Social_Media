import React from "react";
import Content from "../../Design/Content";
import { FaHome, FaUserFriends, FaVideo } from "react-icons/fa";
import { MdGroups2 } from "react-icons/md";
import { BsFillCameraReelsFill } from "react-icons/bs";
import { FaFacebookMessenger } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";

const LeftSide = () => {
  const {  logOut } = useAuth();
  const handleLogOut =() =>{
    logOut()
  }
  const content = [
    { icon: <FaHome />, name: "Home" },
    { icon: <FaUserFriends />, name: "Friend" },
    { icon: <FaVideo />, name: "Video" },
    { icon: <MdGroups2 />, name: "Group" },
    { icon: <BsFillCameraReelsFill />, name: "Reels" },
    { icon: <FaFacebookMessenger />, name: "Messenger" }
    ];
  return (
    <Content>
      <section>
        <div className="hover:bg-gray-200 cursor-pointer p-2 rounded-lg transition duration-300 ease-in-out">
          <div className="flex gap-2 px-1 items-center ">
            
            <button  onClick={handleLogOut}>Loguot</button>
          </div>
        </div>
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
