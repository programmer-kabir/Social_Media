import { Link } from "react-router-dom";

import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex justify-center items-center  pt-12">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Log In</h1>
          <p className="text-sm text-gray-400">
            Sign in to access your account
          </p>
        </div>
        <form
          noValidate=""
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <label
              htmlFor="email"
              className="relative block bg-[#E8F0FE] overflow-hidden rounded-md border border-gray-300 px-3 pt-3 "
            >
              <input
                type="text"
                id="email"
                // {...register("email", { required: true })}
                placeholder="Mobile number or email address"
                className="peer bg-[#E8F0FE] outline-none  h-8 w-full border-none  p-0 placeholder-transparent focus:border-transparent  sm:text-sm"
              />

              <span className="absolute font-medium start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                Email address
                <span className="text-blue-500">*</span>
              </span>
            </label>
            <div className="">
              <label
                htmlFor="password"
                className="relative bg-[#E8F0FE] block overflow-hidden rounded-md border border-gray-300 px-3 pt-3 "
              >
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
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
          </div>

          <div>
            <button
              type="submit"
              className="bg-blue-500 w-full rounded-md py-3 text-white"
            >
              Continue
            </button>
          </div>
        </form>
        <div className="space-y-1">
          <button className="text-xs hover:underline hover:text-rose-500 text-gray-400">
            Forgot password?
          </button>
        </div>

        <p className="px-6 pt-5 text-sm text-center text-gray-400">
          Don't have an account yet?{" "}
          <Link
            to="/signup"
            className="hover:underline font-medium text-blue-600"
          >
            Sign up
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default Login;
