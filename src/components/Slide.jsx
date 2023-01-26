'use client';
import SlideDetails from '../assets/videoDetails';

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
        modules={[EffectFade, Pagination, Autoplay, Lazy, Navigation]}
        className="mySwiper w-full px-2  pb-10 mt-0.5"
      >



{SlideDetails?.map((i,idx)=>








        <SwiperSlide key={idx}>
          <div className="relative h-[540px]">
            <img
              src={'/banner3.jpg'}
              className="swiper-lazy h-[540px] absolute object-cover rounded w-full drop-shadow-xl "
              />

            <div className="absolute inset-96   text-white">
              <div className='text-4xl'>{i.title}</div>
              <div className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet sed, delectus officia itaque labore unde soluta illo? Enim, doloribus quae.</div>
            </div>
          </div>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>

              )}
      </Swiper>
    </>
  );
}
