"use client";

import { TypingTitle } from "@/components/CustomText";
import FeaturedCard from "@/components/FeaturedCard";
import { featuredData } from "@/utils/data";
import { staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion";

export default function Featured() {
  return (
    <motion.div
      className=" my-16 md:my-20 lg:my-20 xl:my-28 2xl:my-32 "
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <TypingTitle title={" We are featured on"} />

      <div className="mt-16 flex flex-col justify-center gap-x-4 md:flex-row ">
        {featuredData?.map((item, index) => (
          <FeaturedCard key={index} imgUrl={item.imgUrl} link={item.link} />
        ))}
      </div>
    </motion.div>
  );
}
