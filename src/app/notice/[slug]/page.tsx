import Container from '@/components/Container'
import { TypingTitle } from '@/components/CustomText'
import { noticeProps } from '@/types/randomTypes'
import { banglaFont } from '@/utils/fonts'
import { getDataNoStore } from '@/utils/getData'

export default async function SingleNotice({ params }: any) {
  const { slug } = params
  const data: noticeProps = await getDataNoStore(`notice/${slug}`)
  return (
    <Container
      customStyle={`mx-auto my-4 max-w-5xl px-4 lg:px-0 ${banglaFont.className}`}
    >
      <TypingTitle title={'Notice Board'} />

      <div className="flex flex-col gap-y-4">
        <p className="mt-8">{data.createdAt.substring(0, 10)}</p>
        <h1 className="text-2xl sm:text-3xl">{data.title} </h1>
        <div
          className="md:text-sm lg:text-base"
          dangerouslySetInnerHTML={{
            __html: data.desc,
          }}
        />
      </div>
    </Container>
  )
}
