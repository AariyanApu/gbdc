import Image from 'next/image'
import Link from 'next/link'
import { BiSolidPhoneCall } from 'react-icons/bi'
import { IoIosMailUnread } from 'react-icons/io'
import { MdPerson } from 'react-icons/md'

export default function ContactCard() {
  return (
    <div className=" w-full rounded-lg bg-white pb-4 shadow-lg sm:px-2 lg:w-72">
      <Image
        src={'/assets/emergency/sujan.jpg'}
        alt="Sujan"
        height={300}
        width={300}
        className="w-full rounded object-cover object-center"
      />
      <div className=" mx-auto  mt-4 flex w-52 flex-col gap-y-2 text-start text-lg">
        <p className=" flex  flex-row gap-x-2 text-2xl ">
          {' '}
          <MdPerson className=" text-3xl" />
          Kazi Sujan
        </p>
        <Link
          href={{ pathname: 'tel:+8801918184091' }}
          className="link_styles flex flex-row gap-x-2 "
        >
          <BiSolidPhoneCall className="text-2xl" />
          +8801918184091
        </Link>
        <Link
          href={{ pathname: 'mailto:gbdc2018@gmail' }}
          className="link_styles flex flex-row gap-x-2 "
        >
          <IoIosMailUnread className="mt-0.5 text-2xl" />
          gbdc2018@gmail
        </Link>
      </div>
    </div>
  )
}
