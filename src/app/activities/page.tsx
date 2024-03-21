import CloudImage from '@/components/CloudImage'
import Container from '@/components/Container'
import { TypingTitle } from '@/components/CustomText'
import PaginationControls from '@/components/PaginationControls'
import { activitiesData } from '@/types/randomTypes'
import { getDataNoStore } from '@/utils/getData'

export default async function Activities({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const data: activitiesData[] = await getDataNoStore('activities')

  const page = searchParams['page'] ?? '1'
  const per_page = searchParams['per_page'] ?? '6'

  const start = (Number(page) - 1) * Number(per_page)
  const end = start + Number(per_page)
  const filterData = data?.reverse().slice(start, end)

  return (
    <Container customStyle=" my-8 sm:my-16 max-w-7xl mx-auto">
      <TypingTitle title={'Our Activities'} />

      <div className="mt-8 flex flex-row flex-wrap items-center justify-center gap-4">
        {Array.isArray(data) &&
          filterData?.map((item: any) => (
            <div
              key={item.id}
              className="flex w-96 flex-col items-center rounded-lg bg-slate-300 px-4 text-center lg:px-0 "
            >
              <CloudImage
                width={800}
                height={800}
                src={item.imgUrl}
                alt={item.title}
                customStyles={
                  'mt-4  h-96 w-96 rounded-tl-lg rounded-tr-lg object-cover object-center shadow-md sm:mt-2 sm:h-[390px] sm:w-[370px] '
                }
              />

              <div className=" py-6  text-base font-medium tracking-tight text-slate-900">
                {item.title}
              </div>
            </div>
          ))}
      </div>
      <PaginationControls
        hasNextPage={end < data.length}
        hasPrevPage={start > 0}
        totalPosts={data.length}
        perPage={per_page}
      />
    </Container>
  )
}
