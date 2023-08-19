"use client";

import { TypingTitle } from "@/components/CustomText";
import { titleFont } from "@/utils/fonts";
import { staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import CountUp, { useCountUp } from "react-countup";

export default function Counter() {
  useCountUp({
    ref: "counter",
    end: 1234567,
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
  });
  return (
    <motion.div
      className=" my-16 md:my-20 lg:my-20 xl:my-28 2xl:my-32 "
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <TypingTitle title={"We Have Arranged "} />
      <CountUp enableScrollSpy start={0} end={800} delay={0} duration={2.75}>
        {({ countUpRef }) => (
          <div className={`${titleFont.className}`}>
            <Image
              src="/assets/bloodBags.png"
              height={100}
              width={100}
              alt="Blood Bags"
            />
            <div className="flex gap-x-1">
              <span className="text-7xl text-red-700" ref={countUpRef} />

              <span className="text-7xl text-red-700">+</span>
            </div>
            <span className="text-2xl ">Bags Blood</span>
          </div>
        )}
      </CountUp>
    </motion.div>
  );
}
