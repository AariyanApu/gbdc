import Container from '@/components/Container'
import CounterCard from '@/components/CounterCard'
import { TypingTitle } from '@/components/CustomText'

export default function Counter() {
  return (
    <Container customStyle=" my-16 md:my-20 lg:my-20 xl:my-28 2xl:my-32 ">
      <TypingTitle title={'Our Organized Efforts'} />
      <div className="flex flex-col items-center justify-evenly px-6 sm:px-0 md:flex-row">
        <CounterCard
          end={800}
          imgSrc="/assets/bloodBags.png"
          desc="Bags Blood"
        />
        <CounterCard
          end={200}
          imgSrc="/assets/donor.png"
          desc="Active Blood Donors"
        />
        <CounterCard
          end={50}
          imgSrc="/assets/camp.png"
          desc="Blood Donation Camps"
        />
      </div>
    </Container>
  )
}
