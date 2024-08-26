import PostCard from '@/components/PostCard'
import { getData } from '@/hooks/fetchData'
import { banglaFont } from '@/utils/fonts'

export default async function Events() {
  const data = await getData('events')
  console.log("EventData",data)

  return (
    <div
      className={`mx-auto my-6 flex max-w-5xl flex-col gap-y-8 sm:gap-y-4 ${banglaFont.className}`}
    >
      {Array.isArray(data) &&
        data
          ?.reverse()
          .map((item) => (
            <PostCard item={item} key={item.id} section="events" />
          ))}
    </div>
  )
}
