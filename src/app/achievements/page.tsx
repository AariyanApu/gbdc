import Container from '@/components/Container'
import { TypingTitle } from '@/components/CustomText'
import Image from 'next/image'
import React from 'react'

export default function Achievements() {
  const image = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  return (
    <Container customStyle=" my-8 sm:my-16 max-w-7xl mx-auto">
      <TypingTitle title={'Our Achievements'} />

      <div className="mt-8 flex flex-row flex-wrap items-center justify-center gap-4">
        {image?.map((item, idx) => (
          <div
            key={idx}
            className="flex w-96 flex-col items-center rounded-lg bg-slate-300 text-center "
          >
            <Image
              src={'/assets/activities/donateBlood.jpg'}
              alt="donate blood"
              width={500}
              height={500}
              className="h-96 w-96 rounded-tl-lg rounded-tr-lg object-cover object-center"
            />
            <div className="py-4">We donate Blood regularly</div>
          </div>
        ))}
      </div>
    </Container>
  )
}
