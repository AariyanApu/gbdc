import Image from 'next/image'
import MotionDiv from './MotionDiv'
import { fadeIn } from '@/utils/motion'

export default function DonorCard({ imgUrl }: { imgUrl: string }) {
  return (
    <MotionDiv
      variants={fadeIn('left', 'tween', 1.2, 0.7)}
      customStyle=" relative h-60 w-40 rounded-xl bg-slate-200 p-2 shadow  sm:h-72 sm:w-48"
    >
      <Image
        src={imgUrl}
        alt="donors"
        // width={400}
        // height={400}
        fill
        priority
        className="h-full w-full rounded-xl bg-gray-900/5 object-cover shadow-lg "
      />
    </MotionDiv>
  )
}
