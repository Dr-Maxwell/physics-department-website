import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { myCareer } from "./myCareer";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Slider.css";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";
export default function Slider() {
  // const [windowSize, setWindowSize] = useState([window.innerWidth]);
  // const [preview, setPreview] = useState(windowSize <= 800 ? 1 : 3);
  // useEffect(() => {
  //   const handleWindowResize = () => {
  //     setWindowSize([window.innerWidth]);
  //   };

  //   window.addEventListener("resize", handleWindowResize);
  //   console.log(windowSize);
  //   {
  //     windowSize <= 800
  //       ? setPreview((prev) => prev - 2)
  //       : setPreview((prev) => (prev = 3));
  //   }
  //   return () => {
  //     window.removeEventListener("resize", handleWindowResize);
  //   };
  // },[]);

  return (
    <>
      <Swiper
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        // slidesPerView={preview}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation, Pagination]}
        className="mySwiper"
      >
        {myCareer.map((data, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="SwiperSlide">
                <img src={data.image} alt="logo" />

                <div className="slider-content">
                  <h2>{data.career}</h2>
                  <p>{data.desc}</p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
