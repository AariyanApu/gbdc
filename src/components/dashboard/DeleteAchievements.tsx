'use client'
import useSWR, { SWRResponse } from 'swr'
import CloudImage from '@/components/CloudImage'

export default function DeleteAchievements() {
  const fetcher = async (...args: Parameters<typeof fetch>) => {
    const res = await fetch(...args)
    return res.json()
  }
  const { data, error, mutate }: SWRResponse<activitiesData, any> = useSWR(
    '/api/achievements',
    fetcher,
  )
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  const deletePost = async (id: string) => {
    try {
      const response = await fetch(`/api/achievements/${id}`, {
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
    <div className="mt-10 max-w-6xl font-bold">
      <h1 className="text-center text-3xl">Delete achievements Image</h1>
      <div className="flex flex-row flex-wrap gap-2">
        {data?.map((item) => (
          <div
            className="flex h-32 w-32 flex-row items-center justify-center rounded-lg  p-2 shadow  "
            key={item.id}
          >
            <div className="h-28 w-28 rounded-lg p-2 shadow">
              <CloudImage
                width={100}
                height={100}
                src={item.imgUrl}
                alt={'donor'}
                customStyles="h-full w-full rounded-xl bg-gray-900/5 object-cover shadow-lg object-center"
              />
            </div>
            <button
              onClick={() => deletePost(item.id)}
              className="ml-1 h-8  w-8 rounded-md  bg-red-500 text-white"
            >
              x
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
