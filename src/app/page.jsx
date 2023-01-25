import Image from 'next/image'
import { Inter } from '@next/font/google'
import { NavBar } from '@/components'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
<div className='max-w-screen-2xl bg-purple-500'>
<NavBar />

</div>
  )
}
