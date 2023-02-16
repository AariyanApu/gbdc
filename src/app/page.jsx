'use client';

import Hero from '@/sections/Hero';
import { Inter } from '@next/font/google';
import 'swiper/css/bundle';

const inter = Inter({ subsets: ['latin'] });
export default function Home() {
  return (
    <div className="mx-auto  max-w-screen-2xl bg-violet-200  ">
      <Hero />
    </div>
  );
}
