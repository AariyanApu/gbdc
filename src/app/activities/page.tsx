import Container from '@/components/Container'
import { TypingTitle } from '@/components/CustomText'
import { activitiesData } from '@/types/randomTypes'
import { getDataNoStore } from '@/utils/getData'
import Image from 'next/image'

export default async function Activities() {
  const activitiesData: activitiesData[] = await getDataNoStore('activities')

  return (
    <Container customStyle=" my-8 sm:my-16 max-w-7xl mx-auto">
      <TypingTitle title={'Our Activities'} />

      <div className="mt-8 flex flex-row flex-wrap-reverse items-center justify-center gap-4">
        {activitiesData?.map((item) => (
          <div
            key={item.id}
            className="flex w-72 flex-col items-center rounded-lg bg-slate-300 text-center "
          >
            <Image
              src={item.imgUrl}
              alt="donate blood"
              width={500}
              height={500}
              className="h-96 w-72 rounded-tl-lg rounded-tr-lg object-cover object-center"
            />
            <div className="py-4">{item.title}</div>
          </div>
        ))}
      </div>
    </Container>
  )
}
