"use client";

import { TypingTitle } from "@/components/CustomText";
import FeaturedCard from "@/components/FeaturedCard";
import { featuredData } from "@/utils/data";
import { staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion";

export default function Featured() {
  return (
    <motion.div
      className=" my-16  xl:my-20 2xl:my-20 "
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <TypingTitle title={" We are featured on"} />

      <div className="mt-8 flex flex-col items-center justify-center gap-x-4 gap-y-3 px-4 md:mt-10 md:flex-row lg:mt-16">
        {featuredData?.map((item, index) => (
          <FeaturedCard key={index} imgUrl={item.imgUrl} link={item.link} />
        ))}
      </div>
    </motion.div>
  );
}
