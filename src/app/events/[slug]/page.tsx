import CloudImage from '@/components/CloudImage'
import { getData } from '@/hooks/fetchData'
import { banglaFont } from '@/utils/fonts'

export default async function SingleBlog({ params }: any) {
  const { slug } = params
  const data = await getData(`events/${slug}`)

  return (
    <div
      className={`mx-auto my-4 max-w-4xl px-4 lg:px-0 ${banglaFont.className}`}
    >
      <CloudImage
        src={data.imgUrl}
        alt={data.title}
        height={800}
        width={800}
        customStyles="w-full rounded object-cover object-center lg:h-96 lg:w-[700px]"
      />

      <div className="flex flex-col gap-y-4">
        <p className="mt-8">{data.createdAt.substring(0, 10)}</p>
        <h1 className="text-2xl sm:text-3xl">{data.title} </h1>
        <div
          className="pr-4 md:text-sm lg:text-lg "
          dangerouslySetInnerHTML={{
            __html: data.desc,
          }}
        />
      </div>
    </div>
  )
}
