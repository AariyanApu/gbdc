import Container from '@/components/Container'
import { TypingTitle } from '@/components/CustomText'
import FeaturedCard from '@/components/FeaturedCard'
import { featuredData } from '@/utils/data'

export default function Featured() {
  return (
    <Container customStyle=" py-16 rounded-lg bg-slate-100">
      <TypingTitle title={' We are featured on'} />

      <div className="mt-8 flex flex-col items-center justify-center gap-x-4 gap-y-3 px-4  md:mt-10 md:flex-row lg:pb-20">
        {featuredData?.map((item, index) => (
          <FeaturedCard key={index} imgUrl={item.imgUrl} link={item.link} />
        ))}
      </div>
    </Container>
  )
}
