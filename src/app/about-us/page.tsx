'use client'
import AboutUsBgSvg from '@/components/AboutUsBgSvg'
import AboutUsImageCard from '@/components/AboutUsImageCard'
import { Admin } from '@/components/Admin'
import { TypingTitle } from '@/components/CustomText'
import { banglaFont, titleFont } from '@/utils/fonts'
import { staggerContainer } from '@/utils/motion'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AboutUs() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={` bg-white`}
    >
      <main className="isolate mx-auto max-w-7xl">
        {/* Hero section */}
        <div className="relative isolate -z-10">
          <AboutUsBgSvg />
          <div className="mx-4 max-w-7xl py-5 sm:mx-auto ">
            <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
              <div className="w-full text-center sm:w-[630px] sm:text-start lg:shrink-0 xl:max-w-2xl">
                <h1
                  className={` text-4xl font-medium tracking-tight text-gray-900 sm:text-6xl ${titleFont.className}`}
                >
                  We’re changing the way of donating blood.
                </h1>
                <p
                  className={`relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none ${banglaFont.className}`}
                >
                  গৌরনদী ব্লাড ডোনার্স ক্লাব পরিবারে আপনাকে স্বাগতম। গৌরনদী
                  ব্লাড ডোনার্স ক্লাব GBDC একটি অরাজনৈতিক ও অলাভজনক সেচছাসেবী
                  সংগঠন। &quot;নতুন প্রজন্মের নতুন পৃথিবী&quot; এই স্লোগানকে
                  আঁকড়ে ধরে এগিয়ে চলা। তাই আপনিও আসুন আমাদের সাথে, আসুন
                  মানবতার কাজে, ঐক্যবদ্ধ হয়ে পাশে দাঁড়াই গরিব দুস্হ-অসহায় অতি
                  দরিদ্র শ্রেণীর মানুষের পাশে।
                </p>
              </div>
              <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                <div className="ml-auto h-80  w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                  {/* First Image */}
                  <div className="relative hidden md:flex">
                    <Image
                      height={600}
                      width={600}
                      src={'/assets/about/1.webp'}
                      alt="about photo 1"
                      className=" h-60 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 h-60 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </div>
                {/* 2nd image */}
                <AboutUsImageCard
                  imgSrc="/assets/about/2.webp"
                  customStyle=" mr-auto  sm:mr-0 sm:pt-52 lg:pt-36"
                  imgSrc2="/assets/about/3.webp"
                />
                {/* 3rd Image */}
                <AboutUsImageCard
                  imgSrc="/assets/about/4.webp"
                  imgSrc2="/assets/about/5.webp"
                  customStyle="pt-32 sm:w-44 sm:pt-0"
                />
              </div>
            </div>
          </div>
        </div>

        {/* All members Picture  */}

        <Image
          src={'/assets/banner/banner-3.webp'}
          alt="All members of GBDC"
          height={600}
          width={1200}
          className="  my-20 w-full rounded-lg object-cover object-center px-4 shadow-md sm:h-[500px] lg:px-0"
        />
        {/* All member Introduction */}
        <div>
          {/* TODO: Add Title for Mobile  */}
          <TypingTitle title="The Admin Panel" />
          <Admin />
        </div>

        {/* Values section */}

        {/* Team section */}
      </main>

      {/* Footer */}
    </motion.div>
  )
}
