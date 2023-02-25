'use client';

import { DonateBloodIcon } from '@/utils/icons';
import DashLIne from './DashLIne';

export default function SectionHeading() {
  return (
    <div className="mx-auto flex justify-center">
      <DashLIne />

      <div className="px-2 text-xl text-red-700 ">
        <DonateBloodIcon />
      </div>
      <DashLIne />
    </div>
  );
}
