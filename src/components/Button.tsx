'use client'
import { ButtonProps } from '@/types/randomTypes'
import { motion } from 'framer-motion'

export default function Button({
  customStyle,
  variants,
  text,
  link,
  icon,
}: ButtonProps) {
  return (
    <motion.a
      variants={variants}
      whileTap={{ scale: 0.9 }}
      href={link}
      className={`btn btn-outline flex  items-center justify-center ${customStyle}`}
    >
      <button className=" text-center">{text}</button>
      {icon}
    </motion.a>
  )
}
