'use client'
import Container from '@/components/Container'
import { TypingTitle } from '@/components/CustomText'
import { activitiesData } from '@/types/randomTypes'
import { getData, getDataNoStore } from '@/utils/getData'
import { CldImage } from 'next-cloudinary'
import Image from 'next/image'
import useSWR, { SWRResponse } from 'swr'

export default function Achievements() {
  // const achievementsData: activitiesData[] = await getData('achievements')
  interface UserData {
    title: string
    imgUrl: string
    // Add other properties based on the actual structure of your API response
  }

  const fetcher = async (...args: Parameters<typeof fetch>) => {
    const res = await fetch(...args)
    return res.json()
  }

  const { data, error }: SWRResponse<UserData, any> = useSWR(
    '/api/achievements',
    fetcher,
  )

  return (
    <Container customStyle=" my-8 sm:my-16 max-w-7xl mx-auto">
      <TypingTitle title={'Our Achievements'} />

      <div className="mt-8 flex flex-row flex-wrap items-center justify-center gap-4">
        {Array.isArray(data) &&
          data?.map((item: any) => (
            <div
              key={item._id}
              className="flex w-96 flex-col items-center rounded-lg bg-slate-300 px-4 text-center lg:px-0 "
            >
              <CldImage
                width={800}
                height={800}
                src={item.imgUrl}
                alt={item.title}
                className="mt-4  h-96 w-96 rounded-tl-lg rounded-tr-lg object-cover object-center shadow-md sm:mt-2 sm:h-[390px] sm:w-[370px] "
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
