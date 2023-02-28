'use client';

import { motion } from 'framer-motion';
import { titleFont } from '@/utils/fonts';
import { textContainer, textContainer2, textVariant2 } from '@/utils/motion';

export const TypingTitle = ({ title }) => (
  <motion.p
    variants={textContainer}
    className={`text-center text-gray-900 text-5xl font-extrabold ${titleFont.className}`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>
);

export const TypingText = ({ title, textStyles }) => (
  <motion.p variants={textContainer2} className={` ${textStyles}`}>
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>
);

