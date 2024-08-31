import Container from '@/components/Container'
import { TypingTitle } from '@/components/CustomText'
import PostCard from '@/components/PostCard'
import { getData } from '@/hooks/fetchData'
import { PostProps } from '@/types/randomTypes'

export default async function EventSection() {
  const data: PostProps[] = await getData('events')
  const latestItem = data.reverse().slice(0, 1)

  return (
    <Container customStyle="py-20 ">
      <TypingTitle title={'Latest Event'} />
      <div className="mb-5 mt-5">
        {Array.isArray(latestItem) &&
          latestItem?.map((item) => (
            <PostCard item={item} key={item.id} section="events" />
          ))}
      </div>
    </Container>
  )
}
