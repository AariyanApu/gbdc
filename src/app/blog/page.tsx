import PostCard from '@/components/PostCard'
import { getData } from '@/hooks/fetchData'
import { PostProps } from '@/types/randomTypes'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog - Blood Donation Stories & Updates',
  description: 'Read inspiring stories, updates, and news from GBDC. Stay informed about blood donation events, success stories, and community impact in Bangladesh.',
  keywords: [
    'blood donation blog',
    'blood donation stories',
    'GBDC news',
    'blood donation updates',
    'humanitarian stories',
    'blood donor experiences',
    'community impact'
  ],
  openGraph: {
    title: 'GBDC Blog - Blood Donation Stories & Community Updates',
    description: 'Discover inspiring stories and latest updates from Bangladesh\'s leading blood donation organization. Read about lives saved and community impact.',
  },
}

export default async function Blog() {
  const data: PostProps[] = await getData('posts')

  return (
    <div className={`mx-auto my-6 flex max-w-7xl flex-col gap-y-8 sm:gap-y-4 `}>
      {/* Blog Post Card */}
      {Array.isArray(data) &&
        data
          ?.reverse()
          .map((item) => <PostCard item={item} key={item.id} section="blog" />)}
    </div>
  )
}
