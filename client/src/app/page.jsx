'use client';

// eslint-disable-next-line camelcase
import { Nunito_Sans } from '@next/font/google';
import Hero from '@/sections/Hero';

import 'swiper/css/bundle';
import About from '@/sections/About';

const inter = Nunito_Sans({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['200', '400', '700'],
});

export default function Home() {
  return (
    <main className={`${inter.variable} font-sans mx-auto max-w-screen-2xl text-gray-50 bg-violet-200`}>
      <Hero />
      <About />
    </main>
  );
}
