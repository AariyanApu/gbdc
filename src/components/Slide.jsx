'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules

import { Autoplay, EffectFade, Lazy, Navigation, Pagination } from 'swiper';

// Import Swiper styles
import 'swiper/css/effect-fade';
import 'swiper/css/lazy';
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

export default function Slide() {
  return (
    <>
      <Swiper
        effect={'fade'}
        navigation={true}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        loopFillGroupWithBlank={true}
        lazy={true}
        pagination={{ clickable: true, dynamicBullets: true }}
        modules={[EffectFade, Pagination, Autoplay, Lazy,Navigation]}
        className="mySwiper w-full px-2 pt-2 pb-10 md:pt-5 "
      >
        <SwiperSlide className="w-full bg-cover  bg-center ">
          <a href="/">
            <img
              src={'/banner1.jpg'}
              className="swiper-lazy h-96  w-full rounded-lg drop-shadow-xl "
            />
          </a>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>

        <SwiperSlide className="w-full bg-cover  bg-center  ">
          <a href="/">
            <img
              src={'/banner2.jpg'}
              className="swiper-lazy h-96  w-full rounded-lg drop-shadow-xl "
            />
          </a>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>

        <SwiperSlide className="w-full bg-cover  bg-center  ">
          <a href="/">
            <img
              src={'/banner3.jpg'}
              className="swiper-lazy h-96  w-full rounded-lg drop-shadow-xl 	"
            />
          </a>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>

        <SwiperSlide className="w-full bg-cover  bg-center  ">
          <a href="/">
            <img
              src={'/banner4.jpg'}
              className="swiper-lazy h-96 w-full rounded-lg drop-shadow-xl 	"
            />
          </a>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
