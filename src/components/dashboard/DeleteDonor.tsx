'use client'
import useSWR, { SWRResponse } from 'swr'
import CloudImage from '@/components/CloudImage'
import { toast } from 'react-hot-toast'

export default function DeleteDonor() {
  const fetcher = async (...args: Parameters<typeof fetch>) => {
    const res = await fetch(...args)
    return res.json()
  }
  const { data, error, mutate }: SWRResponse<any> = useSWR(
    '/api/donors',
    fetcher,
  )
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  const deletePost = async (id: string) => {
    try {
      const response = await fetch(`/api/donors/${id}`, {
        method: 'DELETE',
      })

      if (response.ok) {
        const result = await response.json()
        // setDeleteMessage(result.message)
        toast.success('Image deleted successfully')
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
    <div className="mt-2 max-w-6xl rounded-box bg-base-200 pt-5  font-bold">
      <h1 className="text-center text-3xl">Delete Donor Image</h1>
      <div className="mt-4 flex flex-row flex-wrap gap-2">
        {data?.map((item: any) => (
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
