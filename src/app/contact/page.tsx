import { TypingTitle } from '@/components/CustomText'
import FooterCards from '@/components/FooterCards'
import Image from 'next/image'
import Link from 'next/link'
import { MdPerson } from 'react-icons/md'
import { BiSolidPhoneCall } from 'react-icons/bi'
import { IoIosMailUnread } from 'react-icons/io'

export default function Contact() {
  return (
    <div className="mx-auto my-12 max-w-7xl px-4 sm:px-6 lg:px-8">
      <TypingTitle title={'Contact Us'} />
      {/* Contact Info */}
      <div className=" my-8 flex flex-col justify-around gap-y-5 sm:flex-row sm:gap-y-0">
        <div className="flex w-full flex-col gap-2 sm:w-60 lg:mt-8 lg:text-lg">
          <p className="">
            Head Office: Gournadi Blood Donor Club, Gournadi Bus Stand,
            Gournadi, Barisal.
          </p>
          <FooterCards />
        </div>
        {/* Google Map */}
        <div className="">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117541.79317610354!2d90.16393647250959!3d22.980369397066216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375541967f155531%3A0x8eb0488eb2adbd33!2sGaurnadi%20Upazila!5e0!3m2!1sen!2sbd!4v1709479726645!5m2!1sen!2sbd"
            width="400"
            height="300"
            loading="lazy"
            className="w-full"
          ></iframe>
        </div>
      </div>
      {/* Emergency Contact */}
      <div className="pt-8">
        <TypingTitle title={'Emergency Contact'} />
        <div className=" mt-8">
          <div className=" w-full  rounded-lg bg-white pb-4 shadow-lg ">
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
        </div>
      </div>
    </div>
  )
}
