'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Autoplay, EffectFade, Pagination } from 'swiper';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import SlideDetails from '../assets/videoDetails';

const Slide = () => (
  <Swiper
    effect="fade"
    grabCursor
    centeredSlides
    slidesPerView="auto"
    autoplay={{
      delay: 7000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    }}
    loop
    loopFillGroupWithBlank
    pagination={{ clickable: true, dynamicBullets: true }}
    modules={[EffectFade, Pagination, Autoplay]}
    className="mySwiper mt-0.5 w-full "
  >
    {/* Here Swiper Card goes on */}
    {SlideDetails?.map((i, idx) => (
      <SwiperSlide key={idx}>
        <div className="relative h-[600px]  px-4 pt-1">
          <Image
            alt="banner Image"
            height={1000}
            width={1000}
            src={i.imgUrl}
            className=" h-[570px] w-full rounded object-cover drop-shadow-lg "
          />

          <motion.div

            className="absolute inset-60  text-center  text-white"
          >
            <div className="text-4xl">{i.title}</div>
            <div className="text-lg">{i.description}</div>
          </motion.div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
);

export default Slide;
