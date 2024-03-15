'use client'

import cn from '@/libs/cn'
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
        className={cn('rounded-lg bg-sky-400 px-4 py-2 text-white', {
          hidden: !hasPrevPage,
        })}
        onClick={() => {
          router.push(
            `${pathname}?page=${Number(page) - 1}&per_page=${per_page}`,
          )
        }}
      >
        Prev Page
      </button>

      <div className="rounded-lg px-4 py-1.5 text-center ring ring-sky-400">
        {page}
      </div>

      <button
        className={cn('rounded-lg bg-sky-400 px-4 py-2 text-white', {
          hidden: !hasNextPage,
        })}
        onClick={() => {
          router.push(
            `${pathname}?page=${Number(page) + 1}&per_page=${per_page}`,
          )
        }}
      >
        Next Page
      </button>
    </div>
  )
}

export default PaginationControls
