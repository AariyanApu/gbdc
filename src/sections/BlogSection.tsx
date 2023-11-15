import BlogPostCard from '@/components/BlogPostCard'
import Container from '@/components/Container'
import { TypingTitle } from '@/components/CustomText'
import { activitiesData } from '@/types/randomTypes'
import { getDataNoStore } from '@/utils/getData'
import React from 'react'

export default async function BlogSection() {
  const data: activitiesData[] = await getDataNoStore('posts')
  const latestItem = data.reverse().slice(0, 1)

  return (
    <Container>
      <TypingTitle title={'Our Recent Blog'} />
      <div className="mb-5 mt-10">
        {Array.isArray(latestItem) &&
          latestItem?.map((item: activitiesData) => (
            <BlogPostCard item={item} key={item.id} />
          ))}
      </div>
    </Container>
  )
}
