import SlideBar from "@/components/SlideBar";
import About from "@/sections/About";
import Activities from "@/sections/Activities";

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl ">
      <SlideBar />
      <About />
      <Activities />
    </div>
  );
}
