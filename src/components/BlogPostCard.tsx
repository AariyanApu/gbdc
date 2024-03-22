import { activitiesData } from '@/types/randomTypes'
import Link from 'next/link'
import CloudImage from './CloudImage'

export default function BlogPostCard({ item }: { item: activitiesData }) {
  return (
    <div
      key={item.id}
      className="mx-4 flex flex-col justify-around rounded-md bg-slate-200/70 transition-colors duration-300 ease-in-out hover:bg-slate-200 sm:flex-row xl:mx-0"
    >
      <CloudImage
        src={item.imgUrl}
        alt={item.title}
        height={500}
        width={500}
        customStyles="h-72 w-[550px] rounded-t-md object-cover opacity-95 transition-opacity duration-300 ease-in-out hover:opacity-100 sm:rounded-s-md sm:rounded-tr-none md:h-80"
      />
      <div className=" mt-8 flex flex-col gap-y-2  px-4 pb-1 sm:pl-8 ">
        <p className="mt-4 text-sm">{item.createdAt.substring(0, 10)}</p>
        <h1 className="text-3xl font-semibold md:text-2xl">{item.title}</h1>
        <div
          className="md:text-sm lg:text-base"
          dangerouslySetInnerHTML={{
            __html: item.desc.substring(0, 250),
          }}
        />
        <Link href={`/blog/${item.slug}`} className="link_styles mt-2">
          ... Read More
        </Link>
      </div>
    </div>
  )
}
