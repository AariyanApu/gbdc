'use client';
import { NavBar, Slide } from '@/components';
import { Inter } from '@next/font/google';
import 'swiper/css/bundle';
const inter = Inter({ subsets: ['latin'] });
export default function Home() {
  return (
    <div className='max-w-screen-2xl'>
      <NavBar />
      <Slide />
    </div>
  );
}
