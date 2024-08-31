'use client'

import cn from '@/libs/cn'
import { useRouter, useSearchParams, usePathname } from 'next/navigation'
import { FC } from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6'

interface PaginationControlsProps {
  hasNextPage: boolean
  hasPrevPage: boolean
  totalPosts: number
  perPage: any
}
const PaginationControls: FC<PaginationControlsProps> = ({
  hasNextPage,
  hasPrevPage,
  totalPosts,
  perPage,
}) => {
  const router = useRouter()
  const pathname = usePathname()

  const searchParams = useSearchParams()
  const page = searchParams.get('page') ?? '1'
  const per_page: any = searchParams.get('per_page') ?? perPage
  let allPages = []
  for (let i = 1; i <= Math.ceil(totalPosts / per_page); i++) {
    allPages.push(i)
  }

  return (
    <div className="join mt-8 flex items-center justify-center  ">
      <button
        className={cn('btn join-item', {
          'btn-disabled': !hasPrevPage,
        })}
        onClick={() => {
          router.push(
            `${pathname}?page=${Number(page) - 1}&per_page=${per_page}`,
          )
        }}
        disabled={!hasPrevPage}
      >
        <FaAngleLeft className="text-lg" />
      </button>

      {allPages
        .slice(Math.max(0, Number(page) - 3), Number(page) + 2)
        .map((item) => (
          <div
            key={item}
            className={cn('btn join-item', {
              'btn-active': item === Number(page),
            })}
            onClick={() => {
              router.push(`${pathname}?page=${item}&per_page=${per_page}`)
            }}
          >
            {item}
          </div>
        ))}

      <button
        className={cn('btn join-item', {
          'btn-disabled': !hasNextPage,
        })}
        onClick={() => {
          router.push(
            `${pathname}?page=${Number(page) + 1}&per_page=${per_page}`,
          )
        }}
        disabled={!hasNextPage}
      >
        <FaAngleRight className="text-lg" />
      </button>
    </div>
  )
}

export default PaginationControls
