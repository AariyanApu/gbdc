import { motion } from 'framer-motion';

import { SectionHeading, SuccessRateCard } from '@/components';
import { TypingTitle } from '@/components/CustomTexts';
import { fadeIn, staggerContainer } from '@/utils/motion';
import { bloodBags } from '@/assets';

export default function SuccessRate() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className=" my-16 md:my-20 lg:my-24 xl:my-28 2xl:my-32 "
    >
      <TypingTitle title="We Have Arrange:" />
      <SectionHeading />
      <motion.div
        variants={fadeIn('up', 'tween', 1, 0.7)}
        className="mt-10 flex flex-col justify-center gap-5 sm:flex-row"
      >
        <SuccessRateCard
          target={600}
          time={200}
          start={100}
          description="bags blood"
          src={bloodBags}
        />

        <SuccessRateCard
          target={300}
          time={200}
          start={100}
          description="blood donating camp"
        />

        <SuccessRateCard
          target={800}
          time={200}
          start={100}
          description="Social work"
        />
      </motion.div>
    </motion.div>
  );
}
