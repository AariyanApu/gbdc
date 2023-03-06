'use client';

import Image from 'next/image';

import { titleFont } from '@/utils/fonts';
import CounterUp from './CounterUp';

export default function SuccessRateCard({
  target,
  time,
  start,
  description,
  src,
}) {
  return (
    <div className="h-80 w-96 bg-violet-100 rounded-lg py-10 shadow-md">
      <div className="flex flex-col items-center   justify-center ">
        <Image
          width={150}
          height={150}
          alt={description}
          src={src}
          className="w-24"
        />
        <h5 className={`text-8xl text-gray-900 ${titleFont.className}`}>
          <CounterUp target={target} time={time} start={start} />+
        </h5>
        <p className="text-3xl text-gray-800">{description}</p>
      </div>
    </div>
  );
}
