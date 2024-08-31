import Container from '@/components/Container'
import { TypingTitle } from '@/components/CustomText'
import { NoticeCard } from '@/components/NoticeCard'
import { getData } from '@/hooks/fetchData'
import { noticeProps } from '@/types/randomTypes'

export default async function Notice() {
  const data: noticeProps[] = await getData('notice')
  return (
    <Container customStyle=" mx-auto my-6 flex max-w-6xl flex-col gap-y-8 sm:gap-y-4 ">
      <TypingTitle title={'Notice Board'} />
      <div className="flex flex-row  px-2 lg:px-0">
        {data
          ?.reverse()
          .map((item: noticeProps) => <NoticeCard item={item} key={item.id} />)}
      </div>
    </Container>
  )
}
