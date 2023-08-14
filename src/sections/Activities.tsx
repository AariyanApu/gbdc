"use client";

import { TypingText, TypingTitle } from "@/components/CustomText";
import TitleBottomLine from "@/components/TitleBottomLine";
import { banglaFont } from "@/utils/fonts";
import { fadeIn, staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Activities() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.35 }}
      className="rounded  bg-gray-100 pt-20 "
    >
      <TypingTitle title={["Our", " Acti", "vit", "ies"]} />
      <TitleBottomLine />
      <div
        className={` ${banglaFont.className} w-full px-4 py-10 sm:px-6 sm:py-8 lg:px-8`}
      >
        {/* Activities Headline */}
        <div className="sm:flex sm:items-baseline sm:justify-between">
          <TypingText
            title={["আমাদের ", "কার্যক্রম ", "সমূহ"]}
            textStyles="text-2xl font-bold tracking-tight"
          />

          {/* All Activities for Large Screen  */}
          <motion.a
            variants={fadeIn("left", "tween", 1.1, 0.6)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href="/activities"
            className="hidden text-sm font-semibold text-[#60BAF9] hover:text-[#85D7FC] sm:block"
          >
            সকল কার্যক্রম
            <span aria-hidden="true"> &rarr;</span>
          </motion.a>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
          <motion.div
            variants={fadeIn("right", "tween", 0.8, 0.7)}
            className="group relative h-[500px] overflow-hidden rounded-lg sm:row-span-2"
          >
            <Image
              src="/assets/activities/donateBlood.jpg"
              height={800}
              width={800}
              alt="demo alt text."
              className="h-full object-cover object-center group-hover:scale-105  group-hover:transition-transform group-hover:duration-300 group-hover:ease-in "
            />
            <div
              aria-hidden="true"
              //   className="bg-gradient-to-b from-transparent to-black opacity-80"
              className="bg-gradient-to-b from-transparent to-black opacity-80 sm:absolute sm:inset-0"
            />
            <div className="absolute inset-0 flex items-end p-6 ">
              <div>
                <h3 className="text-2xl font-semibold text-white">
                  <a href="/activities">
                    <span className="absolute inset-0" />
                    স্বেছায় রক্ত দান
                  </a>
                </h3>
                <p aria-hidden="true" className="mt-1 text-sm text-white">
                  রোগীকে রক্ত দান করে থাকি এবং অন্যকে রক্তদানে আগ্রহী করে থাকি।
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("left", "tween", 1.1, 0.6)}
            className=" group overflow-hidden rounded-lg sm:relative sm:h-full"
          >
            <Image
              src={"/assets/activities/bloodGroup.jpg"}
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
                  <a href="/activities">
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
            variants={fadeIn("left", "tween", 1.5, 0.7)}
            className="group overflow-hidden rounded-lg sm:relative sm:h-full"
          >
            <Image
              src={"/assets/activities/wheelChair.jpg"}
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
                  <a href="/activities">
                    <span className="absolute inset-0" />
                    হুইলচেয়ার এবং শীতবস্ত্র বিতান
                  </a>
                </h3>
                <p aria-hidden="true" className="mt-1 text-sm text-white">
                  গরিব অসহায় মানুষকে হুইলচেয়ার এবং শীতবস্ত্র বিতান করে থাকি।
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
            href="/activities"
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
