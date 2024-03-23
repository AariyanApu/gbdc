'use client'
import { counterCardProps } from '@/types/randomTypes'
import { titleFont } from '@/utils/fonts'
import Image from 'next/image'
import CountUp, { useCountUp } from 'react-countup'

export default function CounterCard({ end, imgSrc, desc }: counterCardProps) {
  useCountUp({
    ref: 'counter',
    end: 1234567,
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
  })
  return (
    <CountUp enableScrollSpy start={0} end={end} delay={0} duration={2.75}>
      {({ countUpRef }) => (
        <div
          className={`${titleFont.className} item-center mx-auto mt-8 flex w-full flex-col justify-center gap-y-1 rounded-md bg-slate-200 p-10 text-center  shadow-md sm:mt-16 md:h-64 md:w-[230px] lg:h-72 lg:w-[330px]`}
        >
          <div className=" relative mx-auto mb-2 h-32 w-32 sm:h-24 md:w-24 lg:h-32 lg:w-32">
            <Image
              src={imgSrc}
              // height={200}
              // width={200}
              fill
              priority
              alt={desc}
              className=" object-cover object-center drop-shadow"
            />
          </div>
          <div className="mx-auto flex gap-x-1">
            <span
              className="text-7xl text-red-700 md:text-4xl lg:text-7xl"
              ref={countUpRef}
            />

            <span className="text-7xl text-red-700 md:text-4xl lg:text-7xl">
              +
            </span>
          </div>
          <span className="text-2xl md:text-xl lg:text-2xl">{desc}</span>
        </div>
      )}
    </CountUp>
  )
}
