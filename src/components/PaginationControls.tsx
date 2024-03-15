'use client'

import cn from '@/libs/cn'
import { useRouter, useSearchParams, usePathname } from 'next/navigation'
import { FC } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6'

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
        className={cn('rounded-lg bg-sky-400 p-3 text-white', {
          'bg-slate-200': !hasPrevPage,
          'text-slate-400': !hasPrevPage,
        })}
        onClick={() => {
          router.push(
            `${pathname}?page=${Number(page) - 1}&per_page=${per_page}`,
          )
        }}
        disabled={!hasPrevPage}
      >
        <FaArrowLeft className="text-lg" />
      </button>

      <div className="rounded-lg px-4 py-1.5 text-center text-sky-400 ring ring-sky-400">
        {page}
      </div>

      <button
        className={cn('rounded-lg bg-sky-400 p-3 text-white', {
          'bg-slate-200': !hasNextPage,
          'text-slate-400': !hasNextPage,
        })}
        onClick={() => {
          router.push(
            `${pathname}?page=${Number(page) + 1}&per_page=${per_page}`,
          )
        }}
        disabled={!hasNextPage}
      >
        <FaArrowRight className="" />
      </button>
    </div>
  )
}

export default PaginationControls
