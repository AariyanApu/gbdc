/* eslint-disable jsx-a11y/anchor-is-valid */

'use client';

import Image from 'next/image';

import { feature } from '@/assets';
import { SectionHeading } from '@/components';
import { TypingTitle } from '@/components/CustomTexts';

export default function Feature() {
  return (
    <div className=" my-16 md:my-20 lg:my-24 xl:my-28 2xl:my-32 ">
      <TypingTitle title="We Are Featured In:" />
      <SectionHeading />

      <div className="my-20 flex flex-col items-center justify-center gap-4 sm:flex-row">
        {feature.map((item, index) => (
          <a href="#" key={index}>
            <Image
              src={item.imageSrc}
              width={400}
              height={100}
              alt={item.imageAlt}
              className="w-44 lg:w-80  rounded grayscale hover:scale-105 hover:grayscale-0  hover:transition-transform hover:duration-300 hover:ease-in  "
            />
          </a>
        ))}
      </div>
    </div>
  );
}
