'use client'
import { CldImage } from 'next-cloudinary'

export default function CloudImage({ width, height, src, alt }) {
  return (
    <CldImage
      width={width}
      height={height}
      src={src}
      alt={alt}
      className="mt-4  h-96 w-96 rounded-tl-lg rounded-tr-lg object-cover object-center shadow-md sm:mt-2 sm:h-[390px] sm:w-[370px] "
    />
  )
}
