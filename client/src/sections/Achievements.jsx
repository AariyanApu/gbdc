'use client';

import { motion } from 'framer-motion';

import { AchievementsCard, SectionHeading } from '@/components';
import { TypingTitle } from '@/components/CustomTexts';
import { staggerContainer } from '@/utils/motion';

export default function Achievements() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.35 }}
      className="bg-violet-100 pt-20 rounded "
    >
      <TypingTitle title="Achievements" />
      <SectionHeading />
      <AchievementsCard />
    </motion.div>
  );
}
