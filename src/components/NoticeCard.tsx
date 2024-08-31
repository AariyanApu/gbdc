import DOMPurify from 'isomorphic-dompurify'
import { noticeProps } from '@/types/randomTypes'
import React from 'react'
import { banglaFont } from '@/utils/fonts'
import Link from 'next/link'
import { FaAngleRight } from 'react-icons/fa6'

export const NoticeCard = ({ item }: { item: noticeProps }) => {
  const htmlContent = item.desc.substring(0, 300)
  const sanitizedHtmlContent = DOMPurify.sanitize(htmlContent)

  return (
    <div
      key={item.id}
      className="mx-4 flex flex-col justify-around rounded-box bg-base-200 transition-colors duration-300 ease-in-out hover:bg-base-300 sm:flex-row xl:mx-0"
    >
      <div
        className={`my-4 flex flex-col justify-center gap-y-2  px-4 pb-1 sm:pl-8 ${banglaFont.className}`}
      >
        <p className="mb-2 mt-4 border-l-2 border-l-base-content/40 pl-2 text-sm text-base-content/50 ">
          {item.createdAt.substring(0, 10)}
        </p>
        <h1 className="text-3xl font-semibold md:text-2xl">{item.title}</h1>
        <div
          className="md:text-sm lg:text-base"
          dangerouslySetInnerHTML={{
            __html: sanitizedHtmlContent,
          }}
        />
        <Link
          href={`/notice/${item.slug}`}
          className=" link-hover link flex items-center text-lg text-sky-400"
        >
          Read Notice <FaAngleRight className="ml-1 h-3 w-3" />
        </Link>
      </div>
    </div>
  )
}
