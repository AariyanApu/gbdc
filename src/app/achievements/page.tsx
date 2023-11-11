import CloudImage from '@/components/CloudImage'
import Container from '@/components/Container'
import { TypingTitle } from '@/components/CustomText'
import { activitiesData } from '@/types/randomTypes'
import { getDataNoStore } from '@/utils/getData'

export default async function Achievements() {
  const data: activitiesData[] = await getDataNoStore('achievements')

  return (
    <Container customStyle=" my-8 sm:my-16 max-w-7xl mx-auto">
      <TypingTitle title={'Our Achievements'} />

      <div className="mt-8 flex flex-row flex-wrap items-center justify-center gap-4">
        {Array.isArray(data) &&
          data?.map((item: activitiesData) => (
            <div
              key={item.id}
              className="flex w-96 flex-col items-center rounded-lg bg-slate-300 px-4 text-center lg:px-0 "
            >
              <CloudImage
                width={800}
                height={800}
                src={item.imgUrl}
                alt={item.title}
              />

              <div className=" py-6  text-base font-medium tracking-tight text-slate-900">
                {item.title}
              </div>
            </div>
          ))}
      </div>
    </Container>
  )
}
