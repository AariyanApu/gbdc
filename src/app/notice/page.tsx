import Container from '@/components/Container'
import { TypingTitle } from '@/components/CustomText'
import { getData } from '@/hooks/fetchData'
import { noticeProps } from '@/types/randomTypes'
import { banglaFont } from '@/utils/fonts'
import Link from 'next/link'

export default async function Notice() {
  const data: noticeProps[] = await getData('notice')
  return (
    <Container
      customStyle={`mx-auto my-6 flex max-w-3xl flex-col gap-y-8 sm:gap-y-4 ${banglaFont.className}`}
    >
      <TypingTitle title={'Notice Board'} />
      <div className="flex flex-row  px-2 lg:px-0">
        {data?.reverse().map((item: noticeProps) => (
          <div
            key={item.id}
            className="mx-auto my-4 flex flex-row rounded-lg bg-white p-4 shadow-lg lg:mx-0"
          >
            {/* for Mobile */}
            <p className="flex lg:hidden">{item.title.substring(0, 35)} ...</p>
            {/* for Larger Screen */}
            <p className="hidden lg:flex">{item.title.substring(0, 100)}</p>
            <Link href={`/notice/${item.slug}`}>
              <p className="link_styles"> ... Read More</p>
            </Link>
          </div>
        ))}
      </div>
    </Container>
  )
}
