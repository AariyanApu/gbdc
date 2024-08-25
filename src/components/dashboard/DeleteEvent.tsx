'use client'
import { fetcher } from '@/hooks/useFetcher'
import { activitiesData } from '@/types/randomTypes'
import { toast } from 'react-hot-toast'
import useSWR, { SWRResponse } from 'swr'
import DeleteTextComponent from './DeleteTextComponent'

export default function DeleteEvent() {
  const { data, error, mutate }: SWRResponse<activitiesData, any> = useSWR(
    '/api/events',
    fetcher,
  )
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  const deletePost = async (slug: string) => {
    try {
      const response = await fetch(`/api/events/${slug}`, {
        method: 'DELETE',
      })

      if (response.ok) {
        const result = await response.json()
        toast.success('Post deleted successfully')
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
    <div className="rounded-box bg-base-200  pt-5">
      <h1 className="text-center text-3xl font-bold">Delete Event</h1>
      {Array.isArray(data) &&
        data?.map((item: activitiesData) => (
          <DeleteTextComponent
            item={item}
            deletePost={deletePost}
            key={item.id}
          />
        ))}
    </div>
  )
}
