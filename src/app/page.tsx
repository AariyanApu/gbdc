import SlideBar from "@/components/SlideBar";
import About from "@/sections/About";
import Achievements from "@/sections/Achievements";
import Activities from "@/sections/Activities";
import Counter from "@/sections/Counter";

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl overflow-x-hidden">
      <SlideBar />
      <About />
      <Activities />
      <Counter />
      <Achievements />
    </div>
  );
}
