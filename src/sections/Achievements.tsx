import AchievementCard from '@/components/AchievementCard'
import Container from '@/components/Container'
import { TypingText, TypingTitle } from '@/components/CustomText'
import { achievementsData } from '@/utils/data'
import { banglaFont } from '@/utils/fonts'

export default function Achievements() {
  return (
    <Container customStyle=" rounded bg-slate-100 py-16 md:my-20 lg:my-20 xl:my-28 2xl:my-32">
      <TypingTitle title={'Our Achievements'} />
      <div className=" w-full px-4 sm:px-6 lg:px-8">
        <TypingText
          title={['What', ' Gave', ' Us', ' For', ' Our', ' Performance']}
          textStyles={`text-2xl font-bold tracking-tight text-slate-900 text-center lg:text-start ${banglaFont.className}} my-8`}
        />
        <div className="flex flex-row flex-wrap items-center justify-center gap-4 lg:justify-start">
          {achievementsData?.map((item, idx) => (
            <AchievementCard key={idx} src={item.src} />
          ))}
        </div>
      </div>
    </Container>
  )
}
