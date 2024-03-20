import CloudImage from '@/components/CloudImage'
import Container from '@/components/Container'
import { TypingTitle } from '@/components/CustomText'
import MotionDiv from '@/components/MotionDiv'
import PaginationControls from '@/components/PaginationControls'
import { activitiesData } from '@/types/randomTypes'
import { getDataNoStoreLocal } from '@/utils/getData'
import { fadeIn } from '@/utils/motion'

export default async function AllDonors({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const data: activitiesData[] = await getDataNoStoreLocal('donors')

  const page = searchParams['page'] ?? '1'
  const per_page = searchParams['per_page'] ?? '10'

  const start = (Number(page) - 1) * Number(per_page)
  const end = start + Number(per_page)
  const filterData = data?.reverse().slice(start, end)
  return (
    <Container customStyle=" my-8 sm:my-16 max-w-7xl mx-auto">
      <TypingTitle title={'Lifesaving Contributors'} />
      <div className="mt-8 flex flex-row flex-wrap items-center justify-center gap-4">
        {filterData?.map((item, idx) => (
          <div
            className="h-60 w-40 rounded-lg bg-slate-200 p-2 shadow  sm:h-96 sm:w-60"
            key={idx}
          >
            <CloudImage
              width={500}
              height={500}
              src={item.imgUrl}
              alt={'donor'}
              customStyles="h-full w-full rounded-xl bg-gray-900/5 object-cover shadow-lg object-center"
            />
          </div>
        ))}
      </div>
      <PaginationControls
        hasNextPage={end < data?.length}
        hasPrevPage={start > 0}
        totalPosts={data?.length}
        perPage={per_page}
      />
    </Container>
  )
}
