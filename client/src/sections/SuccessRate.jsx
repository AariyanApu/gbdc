import { motion } from 'framer-motion';

import { bloodBags, camp, donator } from '@/assets';
import { SectionHeading, SuccessRateCard } from '@/components';
import { TypingTitle } from '@/components/CustomTexts';
import { fadeIn, staggerContainer } from '@/utils/motion';

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
          time={150}
          start={300}
          description="bags blood"
          src={bloodBags}
        />

        <SuccessRateCard
          target={200}
          time={90}
          start={50}
          description="Active donators"
          src={donator}
        />
        <SuccessRateCard
          target={50}
          time={50}
          start={2}
          src={camp}
          description="blood donating camp"
        />
      </motion.div>
    </motion.div>
  );
}
