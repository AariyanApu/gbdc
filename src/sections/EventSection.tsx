import BlogPostCard from '@/components/BlogPostCard'
import Container from '@/components/Container'
import { TypingTitle } from '@/components/CustomText'
import { getData } from '@/hooks/fetchData'
import { activitiesData } from '@/types/randomTypes'

export default async function EventSection() {
  const data: activitiesData[] = await getData('events')
  const latestItem = data.reverse().slice(0, 1)
  console.log(data)

  return (
    <Container customStyle="py-20 ">
      <TypingTitle title={'Latest Event'} />
      <div className="mb-5 mt-10">
        {Array.isArray(latestItem) &&
          latestItem?.map((item: activitiesData) => (
            <BlogPostCard item={item} key={item.id} />
          ))}
      </div>
    </Container>
  )
}
