import { AchievementCardProps } from '@/types/randomTypes'
import Image from 'next/image'
import MotionDiv from './MotionDiv'
import { fadeIn } from '@/utils/motion'

export default function AchievementCard({ src }: AchievementCardProps) {
  return (
    <MotionDiv
      variants={fadeIn('up', 'tween', 1.2, 0.7)}
      customStyle="sm:w-72 w-64 rounded-lg bg-white p-2 shadow"
    >
      <div className="relative h-72 w-60 cursor-pointer overflow-hidden rounded-xl bg-black sm:h-96 sm:w-[270px]">
        <Image
          src={src}
          alt="GBDC accepting award"
          fill
          priority
          className=" h-full w-full rounded-xl object-cover object-center transition-all duration-500 ease-in-out  hover:scale-105 hover:opacity-100 lg:opacity-70"
        />
      </div>
    </MotionDiv>
  )
}
