import CloudImage from '@/components/CloudImage'
import { getDataNoStore, getDataNoStoreLocal } from '@/utils/getData'
import Image from 'next/image'

export default async function SingleBlog({ params }: any) {
  // const { slug } = params

  // const getData = async () => {
  //   const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
  //     cache: 'no-store',
  //   })
  //   if (!res.ok) {
  //     throw new Error('Failed to fetch data')
  //   }
  //   return res.json()
  // }

  // const data = await getData()

  return (
    // <div className="mx-auto my-4 max-w-5xl px-4 lg:px-0">
    //   <CloudImage
    //     src={data.imgUrl}
    //     alt={data.title}
    //     height={800}
    //     width={800}
    //     customStyles="w-full rounded object-cover object-center lg:h-96 lg:w-[700px]"
    //   />

    //   <div className="flex flex-col gap-y-4">
    //     <p className="mt-8">{data.createdAt.substring(0, 10)}</p>
    //     <h1 className="text-2xl sm:text-3xl">{data.title} </h1>
    //     <div
    //       className="md:text-sm lg:text-base"
    //       dangerouslySetInnerHTML={{
    //         __html: data.desc,
    //       }}
    //     />
    //   </div>
    // </div>
    <div>hi</div>
  )
}
