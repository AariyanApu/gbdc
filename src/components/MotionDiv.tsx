'use client'
import { motion } from 'framer-motion'

export default function MotionDiv({
  children,
  customStyle,
  variants,
}: {
  children: React.ReactNode
  customStyle?: string
  variants?: any
}) {
  return (
    <motion.div variants={variants} className={customStyle}>
      {children}
    </motion.div>
  )
}
