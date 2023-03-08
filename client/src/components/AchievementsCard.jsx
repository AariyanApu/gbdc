'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import { products } from '@/assets';
import { imageContainer, imageVariant } from '@/utils/motion';
import { TypingText } from './CustomTexts';

export default function AchievementsCard() {
  return (
    <div className="mx-auto max-w-2xl py-16 px-4 sm:py-14 sm:px-6 lg:max-w-7xl lg:px-8">
      <TypingText
        title={['আমাদের', ' অর্জন ', 'সমূহ']}
        textStyles="text-2xl font-bold tracking-tight text-gray-900"
      />

      <motion.div
        variants={imageContainer}
        className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
      >
        {products.map((product) => (
          <motion.div
            variants={imageVariant}
            key={product._id}
            className="group relative"
          >
            <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
              <Image
                height={800}
                width={800}
                src={product.imageSrc}
                alt={product.imageAlt}
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>
            <div className="mt-4  ">
              <h3 className="text-sm text-gray-700">
                <a href={product.href}>
                  <span aria-hidden="true" className="absolute inset-0" />
                  {product.name}
                </a>
              </h3>
              <p className="mt-1 text-sm text-gray-500">{product.color}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
