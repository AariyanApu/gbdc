'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Autoplay, EffectFade, Pagination } from 'swiper';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

import { fadeIn, staggerContainer } from '@/utils/motion';
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
    className="mySwiper mt-1 w-full "
  >
    {/* Here Swiper Card goes on */}
    {SlideDetails?.map((i, idx) => (
      <SwiperSlide key={idx}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="relative h-[570px]"
        >
          <Image
            alt="banner Image"
            height={1600}
            width={1600}
            src={i.imgUrl}
            className=" h-[570px] w-full rounded object-cover   "
          />
          {/* Black Shadow */}
          <div
            aria-hidden="true"
            className="  absolute  inset-0 w-full bg-gradient-to-b from-transparent to-black opacity-80 sm:w-[800] hidden sm:block"
          />
          {/* Title & Text */}
          <motion.div
            variants={fadeIn('up', 'tween', 1, 0.7)}
            className="absolute inset-y-96 w-80 text-left text-white sm:w-[800px] sm:pl-5 sm:block hidden"
          >
            <div className="text-4xl ">{i.title}</div>
            <div className="backdrop-blur-sm text-lg ">{i.description}</div>
          </motion.div>
        </motion.div>
      </SwiperSlide>
    ))}
  </Swiper>
);

export default Slide;
