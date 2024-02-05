import React, { useContext, useState } from "react";
import Input from "../../../Component/Input/Input";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { RxCross2 } from "react-icons/rx";

import AuthProvider, { AuthContext } from "../../../Provider/AuthProvider";
const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { newRegister } = useContext(AuthContext);
  const {
    handleSubmit,
    control,
    register,
    formState: { errors, isSubmitted },
  } = useForm();
  const onSubmit = async (data) => {
    if (data.password !== data.PasswordConfirmation) {
      toast.error("Password Not same");
    }
    // console.log(data);
    newRegister(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.log(error));
  };
  return (
    <section className="flex justify-center items-center py-10">
      <div className="flex flex-col max-w-md p-4 rounded-md  bg-gray-100 text-gray-900">
        <div className="flex justify-between">
          <div className="p-2">
            <h2 className="text-4xl font-semibold">Sign Up</h2>
            <p className="font-medium pt-2 ">
              It's quick and easy. Join us today!
            </p>
          </div>
          <RxCross2 size={25} />
        </div>
        <hr />

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="py-5 px-3 space-y-3">
            {/* Name */}
            <div className="flex gap-5 ">
              <div className="w-full">
                <label
                  htmlFor="FirstName"
                  className="relative bg-[#E8F0FE] block overflow-hidden rounded-md border border-gray-300 px-3 pt-3 "
                >
                  <input
                    type="text"
                    id="FirstName"
                    {...register("FirstName", { required: true })}
                    placeholder="First Name"
                    className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                  />

                  <span className="absolute font-medium start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                    First Name <span className="text-red-500">*</span>
                  </span>
                </label>
              </div>
              <div className="w-full">
                <label
                  htmlFor="LastName"
                  className="relative bg-[#E8F0FE] block overflow-hidden rounded-md border border-gray-300 px-3 pt-3 "
                >
                  <input
                    type="text"
                    id="LastName"
                    {...register("LastName", { required: true })}
                    placeholder="Last Name"
                    className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                  />

                  <span className="absolute font-medium start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                    Last Name <span className="text-red-500">*</span>
                  </span>
                </label>
              </div>
            </div>
            {/*Phone Email */}
            <div className="w-full">
              <label
                htmlFor="email"
                className="relative bg-[#E8F0FE] block overflow-hidden rounded-md border border-gray-300 px-3 pt-3  "
              >
                <input
                  type="text"
                  id="email"
                  {...register("email", { required: true })}
                  placeholder="Mobile number or email address"
                  className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                />

                <span className="absolute font-medium start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                  Mobile number or email address{" "}
                  <span className="text-red-500">*</span>
                </span>
              </label>
            </div>

            {/*  */}
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="password"
                className="relative bg-[#E8F0FE] block overflow-hidden rounded-md border border-gray-300 px-3 pt-3 "
              >
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  {...register("password", { required: true })}
                  placeholder="password"
                  className="peer bg-[#E8F0FE] h-8 w-full border-none  p-0 placeholder-transparent outline-none sm:text-sm"
                />

                <span className="absolute font-medium start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                  Password <span className="text-red-500">*</span>
                </span>

                <span
                  className="absolute top-3 end-3 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <FaEye size={18} />
                  ) : (
                    <FaEyeSlash size={18} />
                  )}
                </span>
              </label>
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="PasswordConfirmation"
                className="relative bg-[#E8F0FE] block overflow-hidden rounded-md border border-gray-300 px-3 pt-3 "
              >
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="PasswordConfirmation"
                  placeholder="PasswordConfirmation"
                  {...register("PasswordConfirmation", { required: true })}
                  className="peer bg-[#E8F0FE] h-8 w-full border-none  p-0 placeholder-transparent outline-none sm:text-sm"
                />

                <span className="absolute start-3 top-3 font-medium -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                  Password Confirmation <span className="text-red-500">*</span>
                </span>
                <span
                  className="absolute top-3 end-3 cursor-pointer"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <FaEye size={18} />
                  ) : (
                    <FaEyeSlash size={18} />
                  )}
                </span>
              </label>
            </div>
            {/* Date of Birth */}
            <div>
              <div className="w-full">
                <label
                  htmlFor="FirstName"
                  className="relative bg-[#E8F0FE]  block overflow-hidden rounded-md border border-gray-200 px-3 pt-3  "
                >
                  <input
                    type="date"
                    id="Date of birth"
                    placeholder="birthDay"
                    {...register("birthDay", { required: true })}
                    className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                  />

                  <span className="absolute font-medium start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                    Date of Birth <span className="text-red-500">*</span>
                  </span>
                </label>
              </div>
            </div>
            {/* Btn */}
            <div className="flex justify-center pt-5 ">
              <div class="group relative inline-block rounded overflow-hidden border border-blue-600 px-8 py-3 focus:outline-none focus:ring">
                <span class="absolute inset-y-0   left-0 w-[2px] bg-blue-600 transition-all group-hover:w-full group-active:bg-blue-500"></span>

                <button class="relative  text-base rounded  font-medium text-blue-600 transition-colors group-hover:text-white">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Register;
