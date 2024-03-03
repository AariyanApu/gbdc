import { emergencyContactProps } from '@/types/randomTypes'
import Image from 'next/image'
import Link from 'next/link'
import { BiSolidPhoneCall } from 'react-icons/bi'
import { IoIosMailUnread } from 'react-icons/io'
import { MdPerson } from 'react-icons/md'

export default function ContactCard({ item }: { item: emergencyContactProps }) {
  return (
    <div className=" w-full rounded-lg bg-white pb-4 shadow-lg sm:p-2 lg:w-72">
      <Image
        src={item.imgUrl}
        alt={item.name}
        height={300}
        width={300}
        className="w-full rounded-xl object-cover object-center"
      />
      <div className=" mt-4 flex  w-full flex-col gap-y-2 px-4 text-start text-lg sm:px-0">
        <p className=" flex  flex-row gap-x-2 text-2xl ">
          {' '}
          <MdPerson className=" text-3xl" />
          {item.name}
        </p>
        <Link
          href={{ pathname: `tel:${item.phone}` }}
          className="link_styles flex flex-row gap-x-2 "
        >
          <BiSolidPhoneCall className="text-2xl" />
          {item.phone}
        </Link>
        <Link
          href={{ pathname: `mailto:${item.email}` }}
          className="link_styles flex flex-row gap-x-2 "
        >
          <IoIosMailUnread className="mt-0.5 text-2xl" />
          {item.email}
        </Link>
      </div>
    </div>
  )
}
