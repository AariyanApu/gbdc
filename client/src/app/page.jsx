'use client';

import Hero from '@/sections/Hero';
import About from '@/sections/About';
import { banglaFont } from '@/utils/fonts';
import 'swiper/css/bundle';

export default function Home() {
  return (
    <main
      className={`${banglaFont.variable} mx-auto max-w-screen-2xl bg-violet-200 font-sans text-gray-50`}
    >
      <Hero />
      <About />
    </main>
  );
}
