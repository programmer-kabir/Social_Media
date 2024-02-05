import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./StoryCard.css";
// import required modules
import { Pagination } from "swiper/modules";
import { FaPlus } from "react-icons/fa";

const StoryCard = () => {
  const name = " MD KABIR AHMED";
  return (
    <section className="w-full">
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="bg-gray-200 p-[1px] w-full rounded-lg">
            <article className="relative  hover:rounded-lg  w-full h-[250px] overflow-hidden rounded-lg  shadow transition hover:shadow-lg">
              <div className="">
                <img
                  alt="Office"
                  src="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
                  className="absolute  h-full inset-0"
                />
              </div>
              <div className="relative flex w-full flex-col justify-end h-[250px] bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-48">
                <div className="w-full h-20 bg-gray-50 ">
                  {/* <h2 className="text-white font-medium text-[13px]">{name}</h2> */}
                  <div className="flex justify-center  -mt-4">
                    <div className="bg-white p-[2px] rounded-full">
                      <FaPlus
                        className="bg-blue-700 rounded-full p-1"
                        color="white"
                        size="25"
                      />
                    </div>
                  </div>
                  <div className="px-2 py-1">
                    <h2 className="text-black font-medium text-lg">
                      Add To Stroy
                    </h2>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <article className="relative w-full h-[250px] overflow-hidden rounded-lg  shadow transition hover:shadow-lg">
            <div className="">
              <img
                alt="Office"
                src="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
                className="absolute h-full inset-0"
              />
            </div>
            <div className="relative flex w-full flex-col justify-end h-[250px]  bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-48">
              <div className="px-2 py-1 text-start">
                <h2 className="text-white font-medium text-[13px]">{name}</h2>
              </div>
            </div>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          <article className="relative w-full h-[250px] overflow-hidden rounded-lg  shadow transition hover:shadow-lg">
            <div className="">
              <img
                alt="Office"
                src="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
                className="absolute h-full inset-0"
              />
            </div>
            <div className="relative flex w-full flex-col justify-end h-[250px]  bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-48">
              <div className="px-2 py-1 text-start">
                <h2 className="text-white font-medium text-[13px]">{name}</h2>
              </div>
            </div>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          <article className="relative w-full h-[250px] overflow-hidden rounded-lg  shadow transition hover:shadow-lg">
            <div className="">
              <img
                alt="Office"
                src="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
                className="absolute h-full inset-0"
              />
            </div>
            <div className="relative flex w-full flex-col justify-end h-[250px]  bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-48">
              <div className="px-2 py-1 text-start">
                <h2 className="text-white font-medium text-[13px]">{name}</h2>
              </div>
            </div>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          <article className="relative w-full h-[250px] overflow-hidden rounded-lg  shadow transition hover:shadow-lg">
            <div className="">
              <img
                alt="Office"
                src="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
                className="absolute h-full inset-0"
              />
            </div>
            <div className="relative flex w-full flex-col justify-end h-[250px]  bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-48">
              <div className="px-2 py-1 text-start">
                <h2 className="text-white font-medium text-[13px]">{name}</h2>
              </div>
            </div>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          <article className="relative w-full h-[250px] overflow-hidden rounded-lg  shadow transition hover:shadow-lg">
            <div className="">
              <img
                alt="Office"
                src="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
                className="absolute h-full inset-0"
              />
            </div>
            <div className="relative flex w-full flex-col justify-end h-[250px]  bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-48">
              <div className="px-2 py-1 text-start">
                <h2 className="text-white font-medium text-[13px]">{name}</h2>
              </div>
            </div>
          </article>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default StoryCard;
