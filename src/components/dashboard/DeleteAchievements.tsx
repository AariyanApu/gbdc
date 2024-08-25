'use client'
import useSWR, { SWRResponse } from 'swr'
import CloudImage from '@/components/CloudImage'
import { toast } from 'react-hot-toast'
import { fetcher } from '@/hooks/useFetcher'
import DeleteComponent from './DeleteComponent'

export default function DeleteAchievements() {
  const { data, error, mutate }: SWRResponse<any> = useSWR(
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
        toast.success('Image deleted successfully')
      } else {
        const errorResult = await response.json()
        console.error('Error deleting post:', errorResult)
      }
      mutate()
    } catch (error) {
      console.error('Error deleting post:', error)
    }
  }
  return (
    <div className="mt-2 max-w-6xl rounded-box bg-base-200 py-5  font-bold">
      <h1 className="text-center text-3xl">Delete achievements Image</h1>
      <div className="flex flex-row flex-wrap gap-2">
        {data?.map((item: any) => (
          <DeleteComponent item={item} deletePost={deletePost} key={item.id} />
        ))}
      </div>
    </div>
  )
}
