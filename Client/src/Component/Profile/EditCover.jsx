import React from "react";
import { HiCamera } from "react-icons/hi2";

const EditCover = () => {
  return (
    <section className=" rounded-xl w-[170px] bg-white">
      <div className="flex items-center gap-2 py-2 px-2">
        <HiCamera size={25} />
        <p className="text-base font-semibold"> Edit cover photo</p>
      </div>
    </section>
  );
};

export default EditCover;
