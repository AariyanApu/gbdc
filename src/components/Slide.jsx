'use client';
import { motion } from 'framer-motion';
import SlideDetails from '../assets/videoDetails';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay, EffectFade, Lazy, Pagination } from 'swiper';

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
        modules={[EffectFade, Pagination, Autoplay, Lazy]}
        className="mySwiper w-full px-2  pb-10 mt-0.5"
      >
        {SlideDetails?.map((i, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative h-[540px]">
              <img
                src={'/banner3.jpg'}
                className="swiper-lazy h-[540px] absolute object-cover rounded w-full drop-shadow-xl "
              />

              <motion.div
                animate={{ y: 100 }}
                transition={{ ease: 'easeOut', duration: 1 }}
                className="absolute inset-60  text-center  text-white"
              >
                <div className="text-4xl bg-black bg-opacity-5">{i.title}</div>
                <div className="text-lg bg-black bg-opacity-5">
                  {i.description}
                </div>
              </motion.div>
            </div>
            <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
