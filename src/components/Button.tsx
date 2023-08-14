import { ButtonProps } from "@/types/randomTypes";
import { motion } from "framer-motion";

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
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      href={link}
      className={` flex-row items-center gap-x-1 rounded-md border border-sky-400 px-3 py-1 text-center text-sm font-semibold text-sky-400 hover:text-sky-500 sm:justify-center ${customStyle}`}
    >
      <p className="mt-1.5 text-center">{text}</p>
      {icon}
    </motion.a>
  );
}
