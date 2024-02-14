import React, { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Content from "../../../Component/Design/Content";
import EditCover from "../../../Component/Profile/EditCover";
import { HiCamera } from "react-icons/hi2";
import useAuth from "../../../Component/Hooks/useAuth";
import useUser from "../../../Component/Hooks/useUser";
import { IoMdSettings } from "react-icons/io";
import { LuUserSquare2 } from "react-icons/lu";
import { BiSolidUserAccount } from "react-icons/bi";

const Profile = () => {
  const { id } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);

  const handleCameraClick = () => {
    setIsModalOpen(true);
  };

  const handleProfileEdit = () => {
    setIsEditMode(true);
  };
  //   console.log(id);

  const [users] = useUser();
  const { user } = useAuth();
  const currentEmail = user?.email;
  const userData = users.find((user) => user.Email === currentEmail);
  //   console.log(userData);
  return (
    <Content>
      <section className="">
        {/* Profile section */}
        <div className="flex gap-9 border-b pb-9 border-[#DBDBDB]">
          <div>
            <img
              className="rounded-full relative w-[150px] h-[150px] border border-gray-300"
              src="https://i.ibb.co/n1XNL6c/Whats-App-Image-2024-01-19-at-18-05-45-d402cd5b.jpg"
              alt=""
            />
            <div
              onClick={handleCameraClick}
              className="z-40 ml-28 border border-gray-100 absolute bg-[#D8DADF] -mt-10 rounded-full p-1"
            >
              <HiCamera className="" size={23} />
            </div>
          </div>
          <div className="pl-10 flex flex-col gap-5">
            {/* First Line */}
            <div className="flex items-center gap-10">
              <h2 className="text-xl">
                {userData?.userName ? userData?.userName : "userName"}
              </h2>
              <div className="flex items-center gap-3">
                <button
                  onClick={handleProfileEdit}
                  className="bg-[#e7e7e7] font-medium text-base px-5  rounded-lg py-1"
                >
                  Edit Profile
                </button>
                <IoMdSettings size={25} />
              </div>
            </div>
            {/* 2nd Line */}
            <div className="flex gap-10">
              <h2>0 posts</h2>
              <h2>0 Friend </h2>
            </div>
            {/* 3rd Line */}
            <div className="">
              <h2 className="text-base font-medium">{userData?.FullName}</h2>
              <h2>{userData?.bio ? userData?.bio : "Your Bio Here"}</h2>
            </div>
          </div>
        </div>

        {isModalOpen && (
          <div
            style={{
              boxShadow:
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
            }}
            className="bg-white w-fit  shadow-xl -mt-8 ml-5 rounded-md "
          >
            {/* <span className="close" onClick={() => setIsModalOpen(false)}>
              &times;
            </span> */}
            <div className="space-y-3">
              <div className="flex gap-2 hover:bg-gray-200 rounded-t-md px-5 py-2">
                <LuUserSquare2 size={25} />
                <p className="text-base">See profile picture</p>
              </div>
              <div
                onClick={handleChoosePictureClick}
                className="flex gap-2 cursor-pointer hover:bg-gray-200 rounded-b-md px-5 py-2"
              >
                <BiSolidUserAccount size={25} />
                <p className="text-base">Choose profile picture</p>
                {/* <input type="file" name="" className="" id="" /> */}
              </div>
            </div>
          </div>
        )}
        {isEditMode && (
          <div
            style={{
              boxShadow:
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
            }}
            className="bg-white h-[10%] overflow-y-scroll w-full  shadow-xl  top-0 rounded-md "
          >
            <span className="close" onClick={() => setIsModalOpen(false)}>
              &times;
            </span>
            <div className="space-y-3 px-10 py-5">
              {/* First Name */}
              <div className="w-full">
                <label
                  htmlFor="FirstName"
                  className="relative bg-[#E8F0FE] block overflow-hidden rounded-md border border-gray-300 px-3 pt-3 "
                >
                  <input
                    type="text"
                    id="FirstName"
                    // {...register("FirstName", { required: true })}
                    placeholder="First Name"
                    className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                  />

                  <span className="absolute font-medium start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                    First Name <span className="text-red-500">*</span>
                  </span>
                </label>
              </div>
              {/* Last Name */}
              <div className="w-full">
                <label
                  htmlFor="LastName"
                  className="relative bg-[#E8F0FE] block overflow-hidden rounded-md border border-gray-300 px-3 pt-3 "
                >
                  <input
                    type="text"
                    id="LastName"
                    // {...register("LastName", { required: true })}
                    placeholder="Last Name"
                    className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                  />

                  <span className="absolute font-medium start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                    Last Name <span className="text-red-500">*</span>
                  </span>
                </label>
              </div>
              {/* UserName */}
              <div className="w-full">
                <label
                  htmlFor="LastName"
                  className="relative bg-[#E8F0FE] block overflow-hidden rounded-md border border-gray-300 px-3 pt-3 "
                >
                  <input
                    type="text"
                    id="LastName"
                    // {...register("LastName", { required: true })}
                    placeholder="Last Name"
                    className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                  />

                  <span className="absolute font-medium start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                    Last Name <span className="text-red-500">*</span>
                  </span>
                </label>
              </div>
              {/* Date of birth */}
              <div className="w-full">
                <label
                  htmlFor="LastName"
                  className="relative bg-[#E8F0FE] block overflow-hidden rounded-md border border-gray-300 px-3 pt-3 "
                >
                  <input
                    type="text"
                    id="LastName"
                    // {...register("LastName", { required: true })}
                    placeholder="Last Name"
                    className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                  />

                  <span className="absolute font-medium start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                    Last Name <span className="text-red-500">*</span>
                  </span>
                </label>
              </div>
              {/* |Gender */}
              <div className="w-full">
                <label
                  htmlFor="LastName"
                  className="relative bg-[#E8F0FE] block overflow-hidden rounded-md border border-gray-300 px-3 pt-3 "
                >
                  <input
                    type="text"
                    id="LastName"
                    // {...register("LastName", { required: true })}
                    placeholder="Last Name"
                    className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                  />

                  <span className="absolute font-medium start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                    Last Name <span className="text-red-500">*</span>
                  </span>
                </label>
              </div>
              {/* |Gender */}
              <div className="w-full">
                <label
                  htmlFor="LastName"
                  className="relative bg-[#E8F0FE] block overflow-hidden rounded-md border border-gray-300 px-3 pt-3 "
                >
                  <input
                    type="text"
                    id="LastName"
                    // {...register("LastName", { required: true })}
                    placeholder="Last Name"
                    className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                  />

                  <span className="absolute font-medium start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                    Last Name <span className="text-red-500">*</span>
                  </span>
                </label>
              </div>
              {/* |Gender */}
              <div className="w-full">
                <label
                  htmlFor="LastName"
                  className="relative bg-[#E8F0FE] block overflow-hidden rounded-md border border-gray-300 px-3 pt-3 "
                >
                  <input
                    type="text"
                    id="LastName"
                    // {...register("LastName", { required: true })}
                    placeholder="Last Name"
                    className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                  />

                  <span className="absolute font-medium start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                    Last Name <span className="text-red-500">*</span>
                  </span>
                </label>
              </div>
              {/* |Gender */}
              <div className="w-full">
                <label
                  htmlFor="LastName"
                  className="relative bg-[#E8F0FE] block overflow-hidden rounded-md border border-gray-300 px-3 pt-3 "
                >
                  <input
                    type="text"
                    id="LastName"
                    // {...register("LastName", { required: true })}
                    placeholder="Last Name"
                    className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                  />

                  <span className="absolute font-medium start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                    Last Name <span className="text-red-500">*</span>
                  </span>
                </label>
              </div>
            </div>
          </div>
        )}
      </section>
    </Content>
  );
};

export default Profile;
