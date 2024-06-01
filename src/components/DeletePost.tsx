'use client'
import { activitiesData } from '@/types/randomTypes'
import useSWR, { SWRResponse } from 'swr'

export default function DeletePost() {
  const fetcher = async (...args: Parameters<typeof fetch>) => {
    const res = await fetch(...args)
    return res.json()
  }
  const { data, error, mutate }: SWRResponse<activitiesData, any> = useSWR(
    '/api/posts',
    fetcher,
  )
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  const deletePost = async (slug: string) => {
    try {
      const response = await fetch(`/api/posts/${slug}`, {
        method: 'DELETE',
      })

      if (response.ok) {
        const result = await response.json()
        // setDeleteMessage(result.message)
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
    <div>
      <h1 className="text-center text-3xl font-bold">Delete Blog Post</h1>
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
