
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Workslider.css";

import slide1 from '../../../images/images/carousel-1.png'
import slide2 from '../../../images/images/carousel-2.png'
import slide3 from '../../../images/images/carousel-3.png'
import slide4 from '../../../images/images/carousel-4.png'
import slide5 from '../../../images/images/carousel-5.png'

// import required modules
import { Pagination } from "swiper";

const WorksSlider = () => {
    return (
        <>
            <Swiper
                slidesPerView={"auto"}
                centeredSlides={true}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide><img style={{ width: '465.49px', height: "336.53px" }} src={slide1} alt="" /></SwiperSlide>
                <SwiperSlide><img style={{ width: '465.49px', height: "336.53px" }} src={slide2} alt="" /></SwiperSlide>
                <SwiperSlide><img style={{ width: '465.49px', height: "336.53px" }} src={slide3} alt="" /></SwiperSlide>
                <SwiperSlide><img style={{ width: '465.49px', height: "336.53px" }} src={slide4} alt="" /></SwiperSlide>
                <SwiperSlide><img style={{ width: '465.49px', height: "336.53px" }} src={slide5} alt="" /></SwiperSlide>
            </Swiper>
        </>
    );
};

export default WorksSlider;