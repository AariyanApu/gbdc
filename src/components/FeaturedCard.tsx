import Image from 'next/image'
import Link from 'next/link'

interface featuredCardProps {
  imgUrl: string
  link: string
}
export default function FeaturedCard({ imgUrl, link }: featuredCardProps) {
  return (
    <div className=" flex h-28 w-80 cursor-pointer items-center justify-center  overflow-hidden rounded-2xl bg-base-300 hover:shadow ">
      <div className="relative mx-auto my-auto h-24 w-72">
        <Link href={link}>
          <Image
            src={imgUrl}
            alt="GBDC Featured on Newspaper"
            fill
            priority
            className=" rounded-xl object-fill grayscale filter transition-all duration-500 ease-in-out hover:scale-105 hover:grayscale-0"
          />
        </Link>
      </div>
    </div>
  )
}
