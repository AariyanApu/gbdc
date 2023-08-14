import { TypingTitleProps } from "@/types/randomTypes";
import { titleFont } from "@/utils/fonts";
import { textContainer, textContainer2, textVariant2 } from "@/utils/motion";
import { motion } from "framer-motion";

export const TypingTitle = ({ title }: TypingTitleProps) => (
  <motion.p
    variants={textContainer}
    className={`text-center text-5xl font-medium  ${titleFont.className}`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === " " ? "\u00A0" : letter}
      </motion.span>
    ))}
  </motion.p>
);

interface TypingTextProps {
  title: string[];
  textStyles: string;
}

export const TypingText = ({ title, textStyles }: TypingTextProps) => (
  <motion.p variants={textContainer2} className={` ${textStyles}`}>
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === " " ? "\u00A0" : letter}
      </motion.span>
    ))}
  </motion.p>
);
