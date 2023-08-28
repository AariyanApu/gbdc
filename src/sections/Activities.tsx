//  spell-checker: disable
'use client'

import ActivitiesCard from '@/components/ActivitiesCard'
import Button from '@/components/Button'
import { TypingText, TypingTitle } from '@/components/CustomText'
import { banglaFont } from '@/utils/fonts'
import { fadeIn, staggerContainer } from '@/utils/motion'
import { motion } from 'framer-motion'
import { HiArrowTopRightOnSquare } from 'react-icons/hi2'
export default function Activities() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.35 }}
      className="overflow-x-hidden rounded  bg-slate-100 pt-0  lg:pt-20 "
    >
      <TypingTitle title={'Our Activities'} />

      <div
        className={` ${banglaFont.className} w-full px-4 py-10 sm:px-6 sm:py-8 lg:px-8`}
      >
        {/* Activities Headline */}
        <div className="flex items-center justify-center text-center sm:items-baseline sm:justify-between">
          <TypingText
            title={['আমাদের ', 'কার্যক্রম ', 'সমূহ']}
            textStyles="text-2xl font-bold tracking-tight"
          />

          {/* All Activities button for desktop */}

          <Button
            variants={fadeIn('left', 'tween', 1.1, 0.6)}
            text="সকল কার্যক্রম সমূহ "
            link="/activities"
            icon={<HiArrowTopRightOnSquare size={20} aria-hidden="true" />}
            customStyle="hidden sm:flex"
          />
        </div>

        <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
          <ActivitiesCard
            imgUrl={'/assets/activities/donateBlood.jpg'}
            title={'স্বেছায় রক্ত দান'}
            description={
              'রোগীকে রক্ত দান করে থাকি এবং অন্যকে রক্তদানে আগ্রহী করে থাকি।'
            }
            variants={fadeIn('right', 'tween', 0.8, 0.7)}
            customStyle={'h-[400px] sm:h-[550px] sm:row-span-2'}
            imgSize="h-[400px] sm:h-[550px]"
          />

          <ActivitiesCard
            imgUrl={'/assets/activities/bloodGroup.jpg'}
            title={'বিনামূল্যে রক্তের গ্রুপ নির্ণয়'}
            description={
              'আমরা বিভিন্ন সময়ে, বিভিন্ন স্থানে ক্যাম্পেইং করে বিনামূল্যে রক্তের গ্রুপ নির্ণয় করে থাকি।'
            }
            variants={fadeIn('left', 'tween', 1.1, 0.6)}
            customStyle="h-full"
            imgSize="h-[300px]"
          />

          <ActivitiesCard
            imgUrl={'/assets/activities/wheelChair.jpg'}
            title={'হুইলচেয়ার এবং শীতবস্ত্র বিতান'}
            description={
              'গরিব অসহায় মানুষকে হুইলচেয়ার এবং শীতবস্ত্র বিতান করে থাকি।'
            }
            variants={fadeIn('left', 'tween', 1.5, 0.7)}
            customStyle="h-full"
            imgSize="h-[300px]"
          />
        </div>
        <Button
          variants={fadeIn('left', 'tween', 1.1, 0.6)}
          text="সকল কার্যক্রম সমূহ "
          link="/activities"
          icon={<HiArrowTopRightOnSquare size={20} aria-hidden="true" />}
          customStyle="flex sm:hidden w-40 mx-auto mt-5"
        />
      </div>
    </motion.div>
  )
}
