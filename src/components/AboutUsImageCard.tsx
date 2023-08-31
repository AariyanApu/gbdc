import Image from 'next/image'

interface aboutUsImageCardProps {
  customStyle?: string
  imgSrc: string
  imgSrc2: string
}

export default function AboutUsImageCard({
  customStyle,
  imgSrc,
  imgSrc2,
}: aboutUsImageCardProps) {
  return (
    <div className={`w-40  flex-none space-y-8 sm:w-44 ${customStyle} `}>
      <div className="relative">
        <Image
          height={600}
          width={600}
          src={imgSrc}
          alt="about photo "
          className="w-full rounded-xl bg-gray-900/5 object-cover shadow-lg sm:h-60"
        />
        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10 sm:h-60" />
      </div>
      <div className="relative">
        <Image
          height={600}
          width={600}
          src={imgSrc2}
          alt="about photo 1"
          className=" w-full rounded-xl bg-gray-900/5 object-cover shadow-lg sm:h-60"
        />
        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10 sm:h-60" />
      </div>
    </div>
  )
}
