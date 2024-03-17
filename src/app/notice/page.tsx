import Container from '@/components/Container'
import { TypingTitle } from '@/components/CustomText'
import { noticeProps } from '@/types/randomTypes'
import { banglaFont } from '@/utils/fonts'
import { getDataNoStore } from '@/utils/getData'
import Link from 'next/link'

export default async function Notice() {
  const data: noticeProps[] = await getDataNoStore('notice')
  return (
    <Container
      customStyle={`mx-auto my-6 flex max-w-4xl flex-col gap-y-8 sm:gap-y-4 ${banglaFont.className}`}
    >
      <TypingTitle title={'Notice Board'} />
      <div className="">
        {Array.isArray(data) &&
          data?.reverse().map((item: noticeProps) => (
            <div
              key={item.id}
              className="my-4 flex flex-row rounded-lg bg-white p-4 shadow-lg "
            >
              {item.title.substring(0, 100)}...
              <Link href={`/notice/${item.slug}`}>
                <p className="link_styles">Read More</p>
              </Link>
            </div>
          ))}
      </div>
    </Container>
  )
}
