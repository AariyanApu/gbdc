'use client';

import { fadeIn, staggerContainer } from '@/utils/motion';
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
          <div className="absolute inset-0 h-[573px] w-[800] rounded  bg-gradient-to-t  from-black via-transparent to-transparent opacity-90" />

          <motion.div
            variants={fadeIn('up', 'tween', 1, 0.5)}
            className="absolute inset-y-96 mx-auto w-[800px] pl-5 text-left text-white"
          >
            <div className="text-4xl ">{i.title}</div>
            <div className="text-lg backdrop-blur-sm">{i.description}</div>
          </motion.div>
        </motion.div>
      </SwiperSlide>
    ))}
  </Swiper>
);

export default Slide;
