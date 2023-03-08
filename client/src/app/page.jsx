'use client';

import { banglaFont } from '@/utils/fonts';
import { About, Achievements, Hero, SuccessRate, Work } from '@/sections';

export default function Home() {
  return (
    <main
      className={`${banglaFont.variable} mx-auto max-w-screen-2xl bg-violet-200 font-sans text-gray-900`}
    >
      <Hero />
      <About />
      <Work />
      <SuccessRate />
      <Achievements />
    </main>
  );
}
