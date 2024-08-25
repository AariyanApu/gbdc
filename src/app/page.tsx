import SlideBar from '@/components/SlideBar'
import About from '@/sections/About'
import Achievements from '@/sections/Achievements'
import Activities from '@/sections/Activities'
import BlogSection from '@/sections/BlogSection'
import Counter from '@/sections/Counter'
import Donors from '@/sections/Donors'
import EventSection from '@/sections/EventSection'
import Featured from '@/sections/Featured'
import { Testimonial } from '@/sections/Testimonial'

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl overflow-x-hidden">
      <SlideBar />
      <About />
      <Activities />
      <Counter />
      <Achievements />
      <Donors />
      <Featured />
      <BlogSection />
      <EventSection />
      <Testimonial />
    </div>
  )
}
