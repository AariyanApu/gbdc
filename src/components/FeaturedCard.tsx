import Image from 'next/image'
import Link from 'next/link'

interface featuredCardProps {
  imgUrl: string
  link: string
}
export default function FeaturedCard({ imgUrl, link }: featuredCardProps) {
  return (
    <div className=" h-24 w-72 cursor-pointer overflow-hidden rounded-lg bg-slate-200 p-2 drop-shadow">
      <Link href={link} className="h-[80px] w-72">
        <Image
          src={imgUrl}
          alt="GBDC Featured on Newspaper"
          fill
          priority
          className=" rounded-xl object-fill grayscale filter transition-all duration-500 ease-in-out hover:scale-105 hover:grayscale-0"
        />
      </Link>
    </div>
  )
}
