import Container from '@/components/Container'
import { TypingTitle } from '@/components/CustomText'
import { noticeProps } from '@/types/randomTypes'
import { banglaFont } from '@/utils/fonts'
import { getData, getDataNoStore } from '@/utils/getData'

export default async function SingleNotice({ params }: any) {
  const { slug } = params
  const data: noticeProps = await getData(`notice/${slug}`)
  return (
    <Container
      customStyle={`mx-auto my-4 max-w-4xl px-4 lg:px-0 ${banglaFont.className}`}
    >
      <TypingTitle title={'Notice Board'} />

      <div className="flex flex-col gap-y-4">
        <p className="mt-8">{data.createdAt.substring(0, 10)}</p>
        <h1 className="text-2xl sm:text-3xl">{data.title} </h1>
        <div
          className="md:text-sm lg:text-lg"
          dangerouslySetInnerHTML={{
            __html: data.desc,
          }}
        />
      </div>
    </Container>
  )
}
