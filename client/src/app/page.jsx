'use client';

import { Nunito_Sans } from '@next/font/google';
import Hero from '@/sections/Hero';

import 'swiper/css/bundle';

const inter = Nunito_Sans({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['200', '400', '700'],
});

export default function Home() {
  return (
    <main className={`${inter.variable} font-sans mx-auto max-w-screen-2xl text-gray-50`}>
      <Hero />
    </main>
  );
}
