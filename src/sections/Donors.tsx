import Button from '@/components/Button'
import Container from '@/components/Container'
import { TypingText, TypingTitle } from '@/components/CustomText'
import DonorCard from '@/components/DonorCard'
import { donorData } from '@/utils/data'
import { fadeIn } from '@/utils/motion'
import { HiArrowTopRightOnSquare } from 'react-icons/hi2'

export default function Donors() {
  return (
    <Container customStyle="my-16 md:my-20 lg:my-20">
      <TypingTitle title={'Our Dedicated Donors'} />
      <div className="flex items-center justify-center text-center sm:items-baseline sm:justify-between">
        <TypingText
          title={['What', ' We', ' Got', ' For', ' Our', ' Performance']}
          textStyles={`text-2xl font-bold tracking-tight text-slate-900 text-center lg:text-start  my-8`}
        />
        <Button
          variants={fadeIn('left', 'tween', 1.1, 0.6)}
          text="Our All Donors "
          link="/achievements"
          icon={<HiArrowTopRightOnSquare size={20} aria-hidden="true" />}
          customStyle="hidden sm:flex"
        />
      </div>
      <div className="flex flex-row flex-wrap items-center justify-center gap-4">
        {donorData?.map((item, idx) => (
          <DonorCard key={idx} imgUrl={item.imgUrl} />
        ))}
      </div>
      <Button
        variants={fadeIn('left', 'tween', 1.1, 0.6)}
        text="View More"
        link="/achievements"
        icon={<HiArrowTopRightOnSquare size={20} aria-hidden="true" />}
        customStyle="flex sm:hidden w-[133px] mx-auto mt-5"
      />
    </Container>
  )
}
