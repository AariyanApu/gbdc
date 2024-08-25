'use client'
import useSWR, { SWRResponse } from 'swr'
import { toast } from 'react-hot-toast'
import DeleteComponent from './DeleteComponent'
import { fetcher } from '@/hooks/useFetcher'

export default function DeleteDonor() {
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
    <div className="mt-2 max-w-6xl rounded-box bg-base-200 py-5  font-bold">
      <h1 className="text-center text-3xl">Delete Donor Image</h1>
      <div className="mt-4 flex flex-row flex-wrap gap-2">
        {data?.map((item: any) => (
          <DeleteComponent item={item} deletePost={deletePost} key={item.id} />
        ))}
      </div>
    </div>
  )
}
