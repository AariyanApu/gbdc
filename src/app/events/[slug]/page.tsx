import CloudImage from '@/components/CloudImage'
import { getData } from '@/hooks/fetchData'
import { banglaFont } from '@/utils/fonts'

export default async function Event({ params }: any) {
  const { slug } = params
  const data = await getData(`events/${slug}`)

  if (!data) {
    return (
      <div className={`mx-auto my-4 max-w-4xl px-4 lg:px-0 ${banglaFont.className}`}>
        <div className="text-center py-12">
          <h1 className="text-2xl sm:text-3xl mb-4">Event not found</h1>
          <p className="text-gray-600">The event you&apos;re looking for doesn&apos;t exist or has been removed.</p>
        </div>
      </div>
    )
  }

  const formatDate = (dateString?: string | null) => {
    if (!dateString) return 'Date not available'
    try {
      return new Date(dateString).toLocaleDateString()
    } catch {
      return dateString.substring(0, 10)
    }
  }

  return (
    <div
      className={`mx-auto my-4 max-w-4xl px-4 lg:px-0 ${banglaFont.className}`}
    >
      <CloudImage
        src={data.imgUrl || ''}
        alt={data.title || 'Event image'}
        height={800}
        width={800}
        customStyles="w-full rounded object-cover object-center lg:h-96 lg:w-[700px]"
      />

      <div className="flex flex-col gap-y-4">
        <p className="mt-8">{formatDate(data.createdAt)}</p>
        <h1 className="text-2xl sm:text-3xl">{data.title || 'Untitled Event'}</h1>
        <div
          className="pr-4 md:text-sm lg:text-lg "
          dangerouslySetInnerHTML={{
            __html: data.desc || '<p>No description available.</p>',
          }}
        />
      </div>
    </div>
  )
}
