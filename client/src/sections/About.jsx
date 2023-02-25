'use client';

import SectionHeading from '@/components/SectionHeading';
import { titleFont } from '@/utils/fonts';

export default function About() {
  return (
    <div className="text-gray-900 mt-8">
      <div className={`text-center text-5xl font-extrabold ${titleFont.className}`}>About Us</div>
      <SectionHeading />
    </div>
  );
}
