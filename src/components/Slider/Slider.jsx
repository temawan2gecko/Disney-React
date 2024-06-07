import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import './Slider.css'

// import required modules
import { Mousewheel, Pagination } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <a>
            <img src="/images/slider-badging.jpg" alt="Image" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a>
            <img src="/images/slider-scale.jpg" alt="Image" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a>
            <img src="/images/slider-badag.jpg" alt="Image" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a>
            <img src="/images/slider-scales.jpg" alt="Image" />
          </a>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
