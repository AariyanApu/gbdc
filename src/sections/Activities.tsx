//  spell-checker: disable
import ActivitiesCard from '@/components/ActivitiesCard'
import Button from '@/components/Button'
import Container from '@/components/Container'
import { TypingText, TypingTitle } from '@/components/CustomText'
import { fadeIn } from '@/utils/motion'
import { HiArrowTopRightOnSquare } from 'react-icons/hi2'
export default function Activities() {
  return (
    <Container customStyle="overflow-x-hidden rounded  bg-slate-100 pt-8  lg:pt-20 ">
      <TypingTitle title={'Life-Sustaining Projects'} />

      <div className={'  w-full px-4 py-8 sm:px-6 lg:px-8'}>
        {/* Activities Headline */}
        <div className="flex items-center justify-center text-center sm:items-baseline sm:justify-between">
          <TypingText
            title={['What', ' We', ' Do', ' For', ' Humanity']}
            textStyles="text-2xl font-bold tracking-tight"
          />

          {/* All Activities button for desktop */}

          <Button
            variants={fadeIn('left', 'tween', 1.1, 0.6)}
            text="Our All Activities "
            link="/activities"
            icon={<HiArrowTopRightOnSquare size={20} aria-hidden="true" />}
            customStyle="hidden sm:flex"
          />
        </div>

        <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
          <ActivitiesCard
            imgUrl={'/assets/activities/donateBlood.jpg'}
            title={'Voluntary Blood Donation'}
            description={
              'We engage in voluntary blood donation to help patients and encourage others to donate blood.'
            }
            variants={fadeIn('right', 'tween', 0.8, 0.7)}
            customStyle={'h-[400px] sm:h-[550px] sm:row-span-2'}
            imgSize="h-[400px] sm:h-[550px]"
          />

          <ActivitiesCard
            imgUrl={'/assets/activities/bloodGroup.jpg'}
            title={'Free Blood Group Determination'}
            description={
              'We conduct free blood group determination camps at various times and locations.'
            }
            variants={fadeIn('left', 'tween', 1.1, 0.6)}
            customStyle="h-full"
            imgSize="h-[300px]"
          />

          <ActivitiesCard
            imgUrl={'/assets/activities/wheelChair.jpg'}
            title={'Distribution of Wheelchairs and Clothing'}
            description={
              'We provide wheelchairs and distribute warm clothing to the impoverished and needy individuals.'
            }
            variants={fadeIn('left', 'tween', 1.5, 0.7)}
            customStyle="h-full"
            imgSize="h-[300px]"
          />
        </div>
        <Button
          variants={fadeIn('left', 'tween', 1.1, 0.6)}
          text="View More"
          link="/activities"
          icon={<HiArrowTopRightOnSquare size={20} aria-hidden="true" />}
          customStyle="flex sm:hidden w-[133px] mx-auto mt-5"
        />
      </div>
    </Container>
  )
}
