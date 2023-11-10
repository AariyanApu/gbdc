import Image from 'next/image'
import Link from 'next/link'

export default function BlogPostCard() {
  return (
    <Link
      href={'/'}
      className="mx-4 flex flex-col justify-around rounded-md bg-slate-200/70 transition-colors duration-300 ease-in-out hover:bg-slate-200 sm:flex-row xl:mx-0"
    >
      <Image
        src={'/assets/about.webp'}
        alt=""
        height={500}
        width={500}
        className="h-72 w-[450px] rounded-t-md object-cover opacity-95 transition-opacity duration-300 ease-in-out hover:opacity-100 sm:rounded-s-md sm:rounded-tr-none md:h-80"
      />
      <div className=" flex flex-col gap-y-2 pb-1 pl-1 sm:pl-8">
        <p className="mt-4 text-sm">11/11/2023</p>
        <h1 className="text-3xl font-semibold md:text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
          deserunt!
        </h1>
        <p className=" md:text-sm lg:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
          asperiores, nam esse quo dolor illum voluptatum possimus quas
          inventore veniam, ipsa eveniet voluptatem! Excepturi dicta itaque
          similique assumenda, corrupti obcaecati?
        </p>
      </div>
    </Link>
  )
}
