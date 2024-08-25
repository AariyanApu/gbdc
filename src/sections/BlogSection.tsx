import Container from '@/components/Container'
import { TypingTitle } from '@/components/CustomText'
import PostCard from '@/components/PostCard'
import { getData } from '@/hooks/fetchData'
import { PostProps } from '@/types/randomTypes'

export default async function BlogSection() {
  const data: PostProps[] = await getData('posts')
  const latestItem = data.reverse().slice(0, 1)

  return (
    <Container customStyle="py-20 ">
      <TypingTitle title={'Latest Stories'} />
      <div className="mb-5 mt-10">
        {Array.isArray(latestItem) &&
          latestItem?.map((item) => (
            <PostCard item={item} key={item.id} section="blog" />
          ))}
      </div>
    </Container>
  )
}
