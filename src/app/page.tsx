import Slider from '@/components/Slider'
import About from '@/sections/About'
import Achievements from '@/sections/Achievements'
import Activities from '@/sections/Activities'
import Counter from '@/sections/Counter'
import Donors from '@/sections/Donors'
import Featured from '@/sections/Featured'
import { Testimonial } from '@/sections/Testimonial'

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl overflow-x-hidden">
      <Slider />
      <About />
      <Activities />
      <Counter />
      <Achievements />
      <Donors />
      <Featured />
      {/* <BlogSection /> */}
      {/* <EventSection /> */}
      <Testimonial />
    </div>
  )
}
