'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

import { groupPhoto } from '@/assets';
import { SectionHeading } from '@/components';
import { TypingText, TypingTitle } from '@/components/CustomTexts';
import { fadeIn, staggerContainer } from '@/utils/motion';

export default function About() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className=" my-16 md:my-20 lg:my-24 xl:my-28 2xl:my-32 "
    >
      <TypingTitle title="About Us" />
      <SectionHeading />
      <div className="mt-10 flex flex-col justify-evenly sm:flex-row ">
        <div className=" w-full px-5 sm:w-[500px] sm:px-0">
          <TypingText
            title={[
              'গৌরনদী',
              ' ব্লাড ',
              'ডোনার্স ',
              'ক্লাব',
              ' পরিবারে',
              ' আপনাকে',
              ' স্বাগতম।',
            ]}
            textStyles="mb-3 text-[23px] sm:mt-7 text-center sm:text-left"
          />
          <motion.div
            variants={fadeIn('up', 'tween', 1, 0.7)}
            className=" text-justify text-lg sm:w-[450px] "
          >
            গৌরনদী ব্লাড ডোনার্স ক্লাব GBDC একটি অরাজনৈতিক ও অলাভজনক সেচছাসেবী
            সংগঠন। "নতুন প্রজন্মের নতুন পৃথিবী" এই স্লোগানকে আঁকড়ে ধরে এগিয়ে
            চলা। তাই আপনিও আসুন আমাদের সাথে, আসুন মানবতার কাজে, ঐক্যবদ্ধ হয়ে
            পাশে দাঁড়াই গরিব দুস্হ-অসহায় অতি দরিদ্র শ্রেণীর মানুষের পাশে।
          </motion.div>
        </div>
        <motion.div
          variants={fadeIn('up', 'tween', 1.2, 0.7)}
          className="mx-auto mt-5 w-96 sm:mx-0 sm:mt-0"
        >
          {' '}
          <Image
            src={groupPhoto}
            className=" w-96 rounded object-cover object-center hover:transition-transform  hover:scale-105 hover:ease-in hover:duration-300 "
            alt="Group Photo "
            height={800}
            width={800}
          />{' '}
        </motion.div>
      </div>
    </motion.div>
  );
}
