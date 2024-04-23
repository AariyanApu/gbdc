import { TypingTitle } from '@/components/CustomText'
import { eventsData } from '@/utils/data'
import Image from 'next/image'

export default function Events() {
  return (
    <div className="container mx-auto my-8">
      <TypingTitle title="On Going Events" />

      <div className=" text-center">
        {eventsData?.map((data) => (
          <div key={data.name}>
            <div className="my-8">
              <div className="mb-2 text-3xl">{data.name}</div>
              <div className=" mx-auto text-lg lg:w-1/2">{data.desc}</div>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {Object.values(data.imgUrl).map((imgUrl) => (
                <Image
                  key={imgUrl}
                  src={imgUrl}
                  width={500}
                  height={500}
                  className="h-96 w-96 rounded-lg object-cover object-center shadow-md"
                  alt="Event Image"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
