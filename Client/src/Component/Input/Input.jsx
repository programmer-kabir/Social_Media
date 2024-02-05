import React from "react";

const Input = ({ placeholder, name }) => {
  return (
    <div className="w-full">
      <label
        htmlFor="FirstName"
        className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm  "
      >
        <input
          type="text"
          id={name}
          {...register({name}, { required: true })}
          placeholder={placeholder}
          className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
        />

        <span className="absolute font-medium start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
          {placeholder} <span className="text-red-500">*</span>
        </span>
      </label>
    </div>
  );
};

export default Input;
