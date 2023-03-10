/* eslint-disable jsx-a11y/anchor-is-valid */

import { motion } from 'framer-motion';
import Image from 'next/image';

import banner from '@/assets/banner.jpg';
import banner1 from '@/assets/banner1.jpg';
import banner2 from '@/assets/banner2.jpg';
import { SectionHeading } from '@/components';
import { TypingText, TypingTitle } from '@/components/CustomTexts';
import { fadeIn, staggerContainer } from '@/utils/motion';

export default function Work() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.35 }}
      className="rounded bg-violet-100 pt-20 "
    >
      <TypingTitle title={['Our', ' Acti', 'vit', 'ies']} />
      <SectionHeading />
      <div className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        {/* Activities Headline */}
        <div className="sm:flex sm:items-baseline sm:justify-between">
          <TypingText
            title={['আমাদের ', 'কার্যক্রম ', 'সমূহ']}
            textStyles="text-2xl font-bold tracking-tight"
          />

          {/* All Activities for Large Screen  */}
          <motion.a
            variants={fadeIn('left', 'tween', 1.1, 0.6)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href="#"
            className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block"
          >
            সকল কার্যক্রম
            <span aria-hidden="true"> &rarr;</span>
          </motion.a>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
          <motion.div
            variants={fadeIn('right', 'tween', 0.8, 0.7)}
            className="group aspect-w-2 aspect-h-1 overflow-hidden rounded-lg sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2"
          >
            <Image
              src={banner}
              height={800}
              width={800}
              alt="demo alt text."
              className="h-48 object-cover object-center group-hover:scale-105  group-hover:transition-transform group-hover:duration-300 group-hover:ease-in "
            />
            <div
              aria-hidden="true"
              className="bg-gradient-to-b from-transparent to-black opacity-80"
            />
            <div className="flex items-end p-6">
              <div>
                <h3 className="text-2xl font-semibold text-white">
                  <a href="#">
                    <span className="absolute inset-0" />
                    বিনামূল্যে রক্তের গ্রুপ নির্ণয়
                  </a>
                </h3>
                <p aria-hidden="true" className="mt-1 text-sm text-white">
                  আমরা বিভিন্ন সময়ে, বিভিন্ন স্থানে ক্যাম্পেইং করে বিনামূল্যে
                  রক্তের গ্রুপ নির্ণয় করে থাকি।
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn('left', 'tween', 1.1, 0.6)}
            className="group aspect-w-2 aspect-h-1 overflow-hidden rounded-lg sm:aspect-none sm:relative sm:h-full"
          >
            <Image
              src={banner1}
              height={800}
              width={800}
              alt="Demo Alt"
              className="h-48 object-cover object-center group-hover:scale-105  group-hover:transition-transform group-hover:duration-300 group-hover:ease-in  sm:absolute sm:inset-0 sm:h-full sm:w-full"
            />
            <div
              aria-hidden="true"
              className="bg-gradient-to-b from-transparent to-black opacity-80 sm:absolute sm:inset-0"
            />
            <div className="flex items-end p-6 sm:absolute sm:inset-0">
              <div>
                <h3 className="text-2xl font-semibold text-white">
                  <a href="#">
                    <span className="absolute inset-0" />
                    রক্ত দান করে থাকি।
                  </a>
                </h3>
                <p aria-hidden="true" className="mt-1 text-sm text-white">
                  অসহায় রোগীকে রক্ত দান করা বা অন্যকে রক্তদানে আগ্রহী করে তোলা।
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn('left', 'tween', 1.5, 0.7)}
            className="group aspect-w-2 aspect-h-1 overflow-hidden rounded-lg sm:aspect-none sm:relative sm:h-full"
          >
            <Image
              src={banner2}
              height={800}
              width={800}
              alt="demo alt"
              className="h-48 object-cover object-center group-hover:scale-105  group-hover:transition-transform group-hover:duration-300 group-hover:ease-in  sm:absolute sm:inset-0 sm:h-full sm:w-full"
            />
            <div
              aria-hidden="true"
              className="bg-gradient-to-b from-transparent to-black opacity-80 sm:absolute sm:inset-0"
            />
            <div className="flex items-end p-6 sm:absolute sm:inset-0">
              <div>
                <h3 className="text-2xl font-semibold text-white">
                  <a href="#">
                    <span className="absolute inset-0" />
                    বস্ত্র এবং শীতবস্ত্র বিতান
                  </a>
                </h3>
                <p aria-hidden="true" className="mt-1 text-sm text-white">
                  শীতে কষ্ট পাওয়া ফুটপাতের মানুষগুলোর জন্য শীতের কাপড় প্রদান
                  করে তাদের জন্য একটু উষ্ণতার ব্যবস্থা করে দেওয়া।
                </p>
              </div>
            </div>
          </motion.div>
        </div>
        {/* All Activities for mobile  */}
        <div className="mt-6 sm:hidden">
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href="#"
            className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500"
          >
            সকল কার্যক্রম
            <span aria-hidden="true"> &rarr;</span>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}
