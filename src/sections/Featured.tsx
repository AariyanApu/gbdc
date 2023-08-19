"use client";

import { TypingTitle } from "@/components/CustomText";
import { staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

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

      <div className="mt-16 ">
        <div className=" h-36 w-96 cursor-pointer overflow-hidden rounded-lg bg-slate-200 p-2 drop-shadow-lg">
          <Link href="https://aariyanapu.com">
            <Image
              src={"/assets/featured/sonaliSomoy.jpg"}
              alt="GBDC Featured on Sonali Somoy"
              width={500}
              height={500}
              className="h-[128px] w-96 rounded-xl object-cover object-center grayscale  filter transition-all duration-500 ease-in-out hover:scale-105 hover:grayscale-0"
            />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
