'use client';

import { groupPhoto } from '@/assets';
import SectionHeading from '@/components/SectionHeading';
import { banglaFont, titleFont } from '@/utils/fonts';
import Image from 'next/image';

export default function About() {
  return (
    <div className="mt-8 mb-40 text-gray-900">
      <div
        className={`text-center text-5xl font-extrabold ${titleFont.className}`}
      >
        About Us
      </div>
      <SectionHeading />
      <div className="mt-10 flex flex-col justify-evenly sm:flex-row ">
        <div className=" w-full px-5 sm:w-[500px] sm:px-0">
          <h1
            className={`mb-3 sm:text-left text-[23px] sm:mt-7 ${banglaFont.className}`}
          >
            গৌরনদী ব্লাড ডোনার্স ক্লাব পরিবারে আপনাকে স্বাগতম।{' '}
          </h1>
          <div
            className={` text-justify text-lg sm:w-[450px] ${banglaFont.className}`}
          >
            গৌরনদী ব্লাড ডোনার্স ক্লাব GBDC একটি অরাজনৈতিক ও অলাভজনক সেচছাসেবী
            সংগঠন। "নতুন প্রজন্মের নতুন পৃথিবী" এই স্লোগানকে আঁকড়ে ধরে এগিয়ে
            চলা। তাই আপনিও আসুন আমাদের সাথে, আসুন মানবতার কাজে, ঐক্যবদ্ধ হয়ে
            পাশে দাঁড়াই গরিব দুস্হ-অসহায় অতি দরিদ্র শ্রেণীর মানুষের পাশে।
          </div>
        </div>
        <div className="w-96">
          {' '}
          <Image
            src={groupPhoto}
            className=" w-96 rounded bg-contain"
            alt="Group Photo "
            height={800}
            width={800}
          />{' '}
        </div>
      </div>
    </div>
  );
}
