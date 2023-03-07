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
          className="relative h-[70vh] sm:h-[60vh] lg:h-[80vh] xl:h-[90vh]  "
        >
          {/* Slide Image */}
          <Image
            alt="banner Image"
            height={1600}
            width={1600}
            src={i.imgUrl}
            className=" hidden w-full rounded object-cover sm:block sm:h-[60vh] lg:h-[80vh] xl:h-[90vh]    "
          />
          {/* Slide Image for Mobile */}
          <Image
            alt="banner Image"
            height={400}
            width={400}
            src={i.imgUrl}
            className=" h-[70vh] w-full rounded object-cover sm:hidden   "
          />
          {/* Black Shadow */}
          <div
            aria-hidden="true"
            className="  absolute  inset-0 hidden w-full bg-gradient-to-b from-transparent to-black opacity-80 sm:block sm:w-[800]"
          />
          {/* Title & Text Only Lg */}
          <motion.div
            variants={fadeIn('up', 'tween', 1, 0.7)}
            className="absolute bottom-5 left-5 hidden w-[800px] pl-5 text-left text-white md:block"
          >
            <div className="text-4xl ">{i.title}</div>
            <div className="text-lg backdrop-blur-sm ">{i.description}</div>
          </motion.div>
        </motion.div>
      </SwiperSlide>
    ))}
  </Swiper>
);

export default Slide;
