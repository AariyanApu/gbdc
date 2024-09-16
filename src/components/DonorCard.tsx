import Image from 'next/image'
import MotionDiv from './MotionDiv'
import { fadeIn } from '@/libs/motion'

export default function DonorCard({ imgUrl }: { imgUrl: string }) {
  return (
    <MotionDiv
      variants={fadeIn('left', 'tween', 1.2, 0.7)}
      customStyle=" relative h-60 w-40 rounded-box bg-base-300 sm:h-72 sm:w-48"
    >
      <Image
        src={imgUrl}
        alt="donors"
        fill
        className="h-full w-full rounded-box object-cover p-2"
      />
    </MotionDiv>
  )
}
