'use client'
import { TypingTitleProps } from '@/types/randomTypes'
import { titleFont } from '@/utils/fonts'
import { textContainer, textContainer2, textVariant2 } from '@/utils/motion'
import { motion } from 'framer-motion'
import TitleBottomLine from './TitleBottomLine'

export const TypingTitle = ({ title }: TypingTitleProps) => (
  <div>
    <motion.p
      variants={textContainer}
      className={` mx-auto flex w-[340px] flex-wrap items-center justify-center text-center  text-3xl font-medium sm:w-full sm:text-5xl ${titleFont.className}`}
    >
      {Array.from(title).map((letter, index) => (
        <motion.span variants={textVariant2} key={index}>
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.p>

    <TitleBottomLine />
  </div>
)

export const TypingText = ({ title, textStyles }: TypingTitleProps) => (
  <motion.p variants={textContainer2} className={` ${textStyles}`}>
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>
)
