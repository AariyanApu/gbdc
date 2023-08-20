"use client";

import AchievementCard from "@/components/AchievementCard";
import { TypingText, TypingTitle } from "@/components/CustomText";
import { achievementsData } from "@/utils/data";
import { banglaFont } from "@/utils/fonts";
import { staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion";

export default function Achievements() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.05 }}
      className=" rounded bg-slate-100 py-16 md:my-20 lg:my-20 xl:my-28 2xl:my-32"
    >
      <TypingTitle title={"Our Achievements"} />
      <div className=" w-full px-4 sm:px-6 lg:px-8">
        <TypingText
          title={["আমাদের ", "অর্জন ", "স", "মূ", "হ"]}
          textStyles={`text-2xl font-bold tracking-tight text-slate-900 text-center lg:text-start ${banglaFont.className}} my-8`}
        />
        <div className="flex flex-row flex-wrap items-center justify-center gap-4 lg:justify-start">
          {achievementsData?.map((item, idx) => (
            <AchievementCard key={idx} src={item.src} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
