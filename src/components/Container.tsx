'use client'
import { staggerContainer } from '@/utils/motion'
import { motion } from 'framer-motion'

export default function Container({
  children,
  customStyle,
}: {
  children: React.ReactNode
  customStyle?: string
}) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      className={customStyle}
    >
      {children}
    </motion.div>
  )
}
