'use client'
import { activitiesData } from '@/types/randomTypes'
import useSWR, { SWRResponse } from 'swr'

export default function DeletePost() {
  const fetcher = async (...args: Parameters<typeof fetch>) => {
    const res = await fetch(...args)
    return res.json()
  }
  const { data, error }: SWRResponse<activitiesData, any> = useSWR(
    '/api/posts',
    fetcher,
  )
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  console.log(data)

  const deletePost = () => {}

  return (
    <div>
      {Array.isArray(data) &&
        data?.map((item: activitiesData) => (
          <div
            key={item.id}
            className="flex flex-row items-center justify-start gap-x-8 p-4"
          >
            <p>{item.title.substring(0, 60)}</p>
            <button
              onClick={() => deletePost()}
              className=" rounded-md bg-red-500 px-4 py-2 text-white"
            >
              Delete
            </button>
          </div>
        ))}
    </div>
  )
}
