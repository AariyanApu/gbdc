import { AchievementCardProps } from '@/types/randomTypes'
import Image from 'next/image'

export default function AchievementCard({ src }: AchievementCardProps) {
  return (
    <div className="w-72 rounded-lg bg-white p-2 shadow-md">
      <div className="relative h-96 w-[270px] cursor-pointer overflow-hidden rounded-xl bg-black">
        <Image
          src={src}
          alt="GBDC accepting award"
          width={500}
          height={500}
          className="absolute inset-0 h-96 w-[270px] rounded-xl object-cover object-center transition-all   duration-500 ease-in-out  hover:scale-105 hover:opacity-100 lg:opacity-70"
        />
      </div>
    </div>
  )
}
