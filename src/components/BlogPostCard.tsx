import Image from 'next/image'
import Link from 'next/link'

export default function BlogPostCard() {
  return (
    <Link
      href={'/'}
      className="flex flex-row justify-around rounded-md bg-slate-200/70 transition-colors duration-300 ease-in-out hover:bg-slate-200"
    >
      <Image
        src={'/assets/about.webp'}
        alt=""
        height={500}
        width={500}
        className="h-72 w-[450px] rounded-s-md object-cover opacity-95 transition-opacity duration-300 ease-in-out hover:opacity-100"
      />
      <div className=" flex flex-col gap-y-2 pl-8">
        <p className="mt-4 text-sm">11/11/2023</p>
        <h1 className="text-3xl font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
          deserunt!
        </h1>
        <p className=" ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
          asperiores, nam esse quo dolor illum voluptatum possimus quas
          inventore veniam, ipsa eveniet voluptatem! Excepturi dicta itaque
          similique assumenda, corrupti obcaecati?
        </p>
      </div>
    </Link>
  )
}
