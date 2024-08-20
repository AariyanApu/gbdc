'use client'
import { activitiesData } from '@/types/randomTypes'
import { toast } from 'react-hot-toast'
import useSWR, { SWRResponse } from 'swr'

export default function DeleteNotice() {
  const fetcher = async (...args: Parameters<typeof fetch>) => {
    const res = await fetch(...args)
    return res.json()
  }
  const { data, error, mutate }: SWRResponse<activitiesData, any> = useSWR(
    '/api/notice',
    fetcher,
  )
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  const deletePost = async (slug: string) => {
    try {
      const response = await fetch(`/api/notice/${slug}`, {
        method: 'DELETE',
      })

      if (response.ok) {
        const result = await response.json()
        // setDeleteMessage(result.message)
        toast.success('Notice deleted successfully')
      } else {
        const errorResult = await response.json()
        console.error('Error deleting post:', errorResult)
        // setDeleteMessage('Error deleting post')
      }
      mutate()
    } catch (error) {
      console.error('Error deleting post:', error)
    }
  }

  return (
    <div className="rounded-box bg-base-200  pt-5">
      <h1 className="text-center text-3xl font-bold">Delete Notice</h1>
      {Array.isArray(data) &&
        data?.map((item: activitiesData) => (
          <div
            key={item.id}
            className="flex flex-row items-center justify-start gap-x-8 p-4"
          >
            <p>{item.title.substring(0, 60)}</p>
            <button
              onClick={() => deletePost(item.slug)}
              className=" rounded-md bg-red-500 px-4 py-2 text-white"
            >
              Delete
            </button>
          </div>
        ))}
    </div>
  )
}
