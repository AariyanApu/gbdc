import AchievementCard from '@/components/AchievementCard'
import Button from '@/components/Button'
import Container from '@/components/Container'
import { TypingText, TypingTitle } from '@/components/CustomText'
import { achievementsData } from '@/utils/data'
import { fadeIn } from '@/utils/motion'
import { HiArrowTopRightOnSquare } from 'react-icons/hi2'

export default function Achievements() {
  return (
    <Container customStyle=" rounded bg-slate-100 py-16 md:my-20 lg:my-20 xl:my-28 2xl:my-32">
      <TypingTitle title={'Notable Achievements'} />
      <div className=" w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center text-center sm:items-baseline sm:justify-between">
          <TypingText
            title={['What', ' We', ' Got', ' For', ' Our', ' Performance']}
            textStyles={`text-2xl font-bold tracking-tight text-slate-900 text-center lg:text-start  my-8`}
          />
          <Button
            variants={fadeIn('left', 'tween', 1.1, 0.6)}
            text="Our All Achievements "
            link="/achievements"
            icon={<HiArrowTopRightOnSquare size={20} aria-hidden="true" />}
            customStyle="hidden sm:flex"
          />
        </div>
        <div className="flex flex-row flex-wrap items-center justify-center gap-4 lg:justify-start">
          {achievementsData?.map((item, idx) => (
            <AchievementCard key={idx} src={item.src} />
          ))}
        </div>
        <Button
          variants={fadeIn('left', 'tween', 1.1, 0.6)}
          text="View More"
          link="/achievements"
          icon={<HiArrowTopRightOnSquare size={20} aria-hidden="true" />}
          customStyle="flex sm:hidden w-[133px] mx-auto mt-5"
        />
      </div>
    </Container>
  )
}
