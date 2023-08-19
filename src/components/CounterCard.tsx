import { titleFont } from "@/utils/fonts";
import Image from "next/image";
import CountUp, { useCountUp } from "react-countup";

interface counterCardProps {
  end: number;
  imgSrc: string;
  desc: string;
}

export default function CounterCard({
  end,
  imgSrc,

  desc,
}: counterCardProps) {
  useCountUp({
    ref: "counter",
    end: 1234567,
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
  });
  return (
    <CountUp enableScrollSpy start={0} end={end} delay={0} duration={2.75}>
      {({ countUpRef }) => (
        <div
          className={`${titleFont.className} item-center mx-auto mt-8 flex w-full flex-col justify-center gap-y-1 rounded-md bg-slate-200 p-10 text-center  shadow-md sm:mt-16 md:h-64 md:w-[230px] lg:h-72 lg:w-[330px]`}
        >
          <Image
            src={imgSrc}
            height={200}
            width={200}
            alt={desc}
            className="mx-auto mb-2 w-32 drop-shadow-md md:w-24 lg:w-32 "
          />
          <div className="mx-auto flex gap-x-1">
            <span
              className="text-7xl text-red-700 md:text-4xl"
              ref={countUpRef}
            />

            <span className="text-7xl text-red-700 md:text-4xl">+</span>
          </div>
          <span className="text-2xl md:text-xl">{desc}</span>
        </div>
      )}
    </CountUp>
  );
}
