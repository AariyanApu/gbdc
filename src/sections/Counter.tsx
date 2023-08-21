'use client'

import CounterCard from '@/components/CounterCard'
import { TypingTitle } from '@/components/CustomText'
import { staggerContainer } from '@/utils/motion'
import { motion } from 'framer-motion'

export default function Counter() {
  return (
    <motion.div
      className=" my-16 md:my-20 lg:my-20 xl:my-28 2xl:my-32 "
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <TypingTitle title={'We have arranged'} />
      <div className="flex flex-col items-center justify-evenly px-6 sm:px-0 md:flex-row">
        <CounterCard
          end={800}
          imgSrc="/assets/bloodBags.png"
          desc="Bags Blood"
        />
        <CounterCard
          end={200}
          imgSrc="/assets/donor.png"
          desc="Active Blood Donors"
        />
        <CounterCard
          end={50}
          imgSrc="/assets/camp.png"
          desc="Blood Donation Camps"
        />
      </div>
    </motion.div>
  )
}
