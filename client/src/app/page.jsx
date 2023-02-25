'use client';

import Hero from '@/sections/Hero';
import About from '@/sections/About';
import { inter } from '@/utils/fonts';
import 'swiper/css/bundle';

export default function Home() {
  return (
    <main
      className={`${inter.variable} mx-auto max-w-screen-2xl bg-violet-200 font-sans text-gray-50`}
    >
      <Hero />
      <About />
    </main>
  );
}
