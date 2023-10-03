import Container from '@/components/Container'
import { TypingTitle } from '@/components/CustomText'
import { achievementsData } from '@/utils/data'
import Image from 'next/image'

export default function Activities() {
  const image = [1, 2, 3, 4, 5, 6, 7, 8]

  return (
    <Container customStyle=" my-8 sm:my-16 max-w-7xl mx-auto">
      <TypingTitle title={'Our Activities'} />

      <div className="mt-8 flex flex-row flex-wrap-reverse items-center justify-center gap-4">
        {achievementsData?.map((item, idx) => (
          <div
            key={idx}
            className="flex w-72 flex-col items-center rounded-lg bg-slate-300 text-center "
          >
            <Image
              src={item.src}
              alt="donate blood"
              width={500}
              height={500}
              className="h-96 w-72 rounded-tl-lg rounded-tr-lg object-cover object-center"
            />
            <div className="py-4">We donate Blood regularly</div>
          </div>
        ))}
      </div>
    </Container>
  )
}
