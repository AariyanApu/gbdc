import PostCard from '@/components/PostCard'
import { getData } from '@/hooks/fetchData'
import { banglaFont } from '@/utils/fonts'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Events - Blood Donation Campaigns & Activities',
  description: 'Join GBDC\'s blood donation events and campaigns across Bangladesh. Find upcoming blood donation drives, workshops, and community activities.',
  keywords: [
    'blood donation events',
    'blood donation campaigns',
    'GBDC events',
    'blood drive',
    'community events',
    'blood donation activities',
    'Bangladesh blood events'
  ],
  openGraph: {
    title: 'GBDC Events - Blood Donation Campaigns & Community Activities',
    description: 'Participate in life-saving blood donation events organized by GBDC across Bangladesh. Join our mission to save lives.',
  },
}

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
