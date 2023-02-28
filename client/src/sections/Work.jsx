/* eslint-disable jsx-a11y/no-redundant-roles */

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import { files } from '@/assets/workImage';
import { TypingTitle } from '@/components/CustomTexts';
import SectionHeading from '@/components/SectionHeading';
import { staggerContainer, textContainer2, textVariant2 } from '@/utils/motion';

export default function Work() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="px-2"
    >
      <div className="mt-8 mb-16">
        <TypingTitle title="Our Activities" />
        <SectionHeading />
      </div>
      <motion.div variants={textContainer2}>
        <ul
          role="list"
          className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
        >
          {files.map((file) => (
            <li key={file.source} className="relative">
              <motion.div variants={textVariant2}>
                <div className="group aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                  <Image
                    width={800}
                    height={600}
                    src={file.source}
                    alt={file.title}
                    className="pointer-events-none object-cover group-hover:opacity-75"
                  />
                  <button
                    type="button"
                    className="absolute inset-0 focus:outline-none"
                  >
                    <span className="sr-only">
                      View details for {file.title}
                    </span>
                  </button>
                </div>
                <p className="pointer-events-none mt-1 block truncate text-lg ml-2 ">
                  {file.title}
                </p>
                {/* <p className="pointer-events-none block text-sm font-medium text-gray-500">
                  {file.size}
                </p> */}
              </motion.div>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
}
