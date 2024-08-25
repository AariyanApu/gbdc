import PostCard from '@/components/PostCard'
import { getData } from '@/hooks/fetchData'
import { PostProps } from '@/types/randomTypes'
import { banglaFont } from '@/utils/fonts'

export default async function Blog() {
  const data: PostProps[] = await getData('posts')

  return (
    <div
      className={`mx-auto my-6 flex max-w-5xl flex-col gap-y-8 sm:gap-y-4 ${banglaFont.className}`}
    >
      {/* Blog Post Card */}

      {Array.isArray(data) &&
        data
          ?.reverse()
          .map((item) => <PostCard item={item} key={item.id} section="blog" />)}
    </div>
  )
}
