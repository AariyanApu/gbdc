import Container from '@/components/Container'
import { TypingTitle } from '@/components/CustomText'
import { activitiesData } from '@/types/randomTypes'
import { getDataNoStore } from '@/utils/getData'
import Image from 'next/image'

export default async function Achievements() {
  const achievementsData: activitiesData[] = await getDataNoStore(
    'achievements',
  )
  return (
    <Container customStyle=" my-8 sm:my-16 max-w-7xl mx-auto">
      <TypingTitle title={'Our Achievements'} />

      <div className="mt-8 flex flex-row flex-wrap items-center justify-center gap-4">
        {achievementsData?.map((item) => (
          <div
            key={item.id}
            className="flex w-96 flex-col items-center rounded-lg bg-slate-300 text-center "
          >
            <Image
              src={item.imgUrl}
              alt="donate blood"
              width={500}
              height={500}
              className="h-96 w-96 rounded-tl-lg rounded-tr-lg object-cover object-center"
            />
            <div className="py-4">{item.title}</div>
          </div>
        ))}
      </div>
    </Container>
  )
}
