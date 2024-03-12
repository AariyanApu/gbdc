'use client'

import { useRouter, useSearchParams, usePathname } from 'next/navigation'
import { FC } from 'react'

interface PaginationControlsProps {
  hasNextPage: boolean
  hasPrevPage: boolean
}
const PaginationControls: FC<PaginationControlsProps> = ({
  hasNextPage,
  hasPrevPage,
}) => {
  const router = useRouter()
  const pathname = usePathname()

  const searchParams = useSearchParams()
  const page = searchParams.get('page') ?? '1'
  const per_page = searchParams.get('per_page') ?? '6'

  return (
    <div className="mt-8 flex items-center justify-center gap-x-2 ">
      <button
        className="rounded-lg bg-sky-400 px-4 py-2 text-white"
        disabled={!hasPrevPage}
        onClick={() => {
          router.push(
            `${pathname}?page=${Number(page) - 1}&per_page=${per_page}`,
          )
        }}
      >
        prev page
      </button>

      <div className="">
        {page}/{Math.ceil(10 / Number(per_page))}
      </div>

      <button
        className="rounded-lg bg-sky-400 px-4 py-2 text-white"
        disabled={!hasNextPage}
        onClick={() => {
          router.push(
            `${pathname}?page=${Number(page) + 1}&per_page=${per_page}`,
          )
        }}
      >
        next page
      </button>
    </div>
  )
}

export default PaginationControls
