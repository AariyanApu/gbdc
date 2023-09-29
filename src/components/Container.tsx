'use client'
import { staggerContainer } from '@/utils/motion'
import { motion } from 'framer-motion'

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className=" my-16 md:my-20 lg:my-20 xl:my-28 2xl:my-32 "
    >
      {children}
    </motion.div>
  )
}
