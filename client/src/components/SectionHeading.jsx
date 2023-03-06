'use client';

import { motion } from 'framer-motion';

import { DonateBloodIcon } from '@/utils/icons';
import { zoomIn } from '@/utils/motion';
import DashLIne from './DashLIne';

export default function SectionHeading() {
  return (
    <motion.div
      variants={zoomIn(0.5, 0.7)}
      className="mx-auto flex justify-center"
    >
      <DashLIne />

      <div className="px-2">
        <DonateBloodIcon />
      </div>
      <DashLIne />
    </motion.div>
  );
}
