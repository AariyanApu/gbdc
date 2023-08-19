"use client";

import { TypingText, TypingTitle } from "@/components/CustomText";
import { banglaFont } from "@/utils/fonts";
import { staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
export default function Achievements() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.35 }}
      className="overflow-x-hidden rounded  bg-slate-100 pt-0  lg:py-20 "
    >
      <TypingTitle title={"Our Achievements"} />

      <div className=" w-full px-4 sm:px-6 lg:px-8">
        <TypingText
          title={["আমাদের ", "অর্জন ", "স", "মূ", "হ"]}
          textStyles={`text-2xl font-bold tracking-tight ${banglaFont.className}} my-8`}
        />
        <div className="w-72 rounded-lg bg-white p-2 drop-shadow-lg">
          <Image
            src="/assets/achievements/2.jpg"
            alt="Picture of the awards"
            width={500}
            height={500}
            className="h-96 w-72 rounded-md object-cover object-center "
          />
        </div>
      </div>
    </motion.div>
  );
}
