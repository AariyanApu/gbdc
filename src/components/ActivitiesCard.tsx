'use client'
import { ActivitiesCardProps } from '@/types/randomTypes'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function ActivitiesCard({
  imgUrl,
  title,
  description,
  variants,
  customStyle,
}: ActivitiesCardProps) {
  return (
    <motion.div
      variants={variants}
      className={` group relative  overflow-hidden rounded-box ${customStyle} w-full `}
    >
      <Image
        src={imgUrl}
        alt={title}
        className={`h-full w-full object-cover object-center  drop-shadow-sm group-hover:scale-105 group-hover:transition-transform  group-hover:duration-300 group-hover:ease-in sm:absolute sm:inset-0 `}
        fill
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-90"
      />
      <div className="absolute inset-0 flex items-end p-6 ">
        <div>
          <div className="text-2xl font-semibold text-white">
            <span className="absolute inset-0" />
            {title}
          </div>
          <p
            aria-hidden="true"
            className="mt-1 hidden text-base text-white lg:flex"
          >
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  )
}
