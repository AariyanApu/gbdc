'use client'
import {
  A11y,
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { banner } from '@/utils/data'
import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function Slider() {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, A11y, EffectFade, Autoplay]}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      effect="fade"
      grabCursor
      centeredSlides
      loop
      autoplay={{
        delay: 7000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      className="mt-2 w-full"
    >
      {banner?.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="relative h-[310px] w-full  sm:h-[520px]">
            <Image
              src={item.img}
              alt={item.alt}
              // width={1300}
              // height={600}
              fill
              priority
              className="h-[310px] w-full rounded-lg object-cover object-center sm:h-[520px]"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
