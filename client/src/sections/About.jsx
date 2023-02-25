'use client';

import { groupPhoto } from '@/assets';
import SectionHeading from '@/components/SectionHeading';
import { titleFont } from '@/utils/fonts';
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
      <div className="mt-10 flex justify-around">
        <div className="w-[500px]">
          <h1 className="mb-3 mt-7 text-[25px]">
            গৌরনদী ব্লাড ডোনার্স ক্লাব পরিবারে আপনাকে স্বাগতম।{' '}
          </h1>
          <div className="w-[450px] text-justify text-xl">
            গৌরনদী ব্লাড ডোনার্স ক্লাব GBDC একটি অরাজনৈতিক ও অলাভজনক সেচছাসেবী
            সংগঠন। নতুন প্রজন্মের নতুন পৃথিবী এই স্লোগানকে আঁকড়ে ধরে এগিয়ে
            চলা। তাই আপনিও আসুন আমাদের সাথে, আসুন মানবতার কাজে, ঐক্যবদ্ধ হয়ে
            পাশে দাঁড়াই গরিব দুস্হ-অসহায় অতি দরিদ্র শ্রেণীর মানুষের পাশে
          </div>
        </div>
        <div>
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
