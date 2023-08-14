import { ActivitiesCardProps } from "@/types/randomTypes";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ActivitiesCard({
  imgUrl,
  title,
  description,
  variants,
  customStyle,
  imgSize,
}: ActivitiesCardProps) {
  return (
    <motion.div
      variants={variants} // need to change
      className={` group relative  overflow-hidden rounded-lg ${customStyle}  `}
    >
      <Image
        src={imgUrl}
        height={800}
        width={800}
        alt={title + " এর ছবি "}
        className={` object-cover object-center group-hover:scale-105  group-hover:transition-transform group-hover:duration-300 group-hover:ease-in ${imgSize} sm:absolute sm:inset-0 sm:h-full sm:w-full `}
      />
      <div
        aria-hidden="true"
        className="bg-gradient-to-b from-transparent to-black opacity-80 sm:absolute sm:inset-0"
      />
      <div className="flex items-end p-6 sm:absolute sm:inset-0 ">
        <div>
          <h3 className="text-2xl font-semibold text-white">
            <a href="/activities">
              <span className="absolute inset-0" />
              {title}
            </a>
          </h3>
          <p aria-hidden="true" className="mt-1 text-sm text-white">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
