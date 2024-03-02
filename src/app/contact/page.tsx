import { TypingTitle } from '@/components/CustomText'
import Link from 'next/link'

export default function Contact() {
  return (
    <div className="mx-auto my-12 max-w-7xl px-4 sm:px-6 lg:px-8">
      <TypingTitle title={'Contact Us'} />
      {/* Contact Info */}
      <div className="flex w-full flex-col gap-2 sm:w-60">
        <p className="">
          Head Office: Gournadi Blood Donor Club, Gournadi Bus Stand, Gournadi,
          Barisal.
        </p>
        <p className="link_styles cursor-pointer">+8801918184091</p>
        <p className="link_styles cursor-pointer">gbdc2018@gmail.com</p>
        <Link
          className="link_styles"
          href={'https://www.facebook.com/groups/525407151272779'}
        >
          Facebook.com/GBDC
        </Link>
      </div>
      {/* Google Map */}
      <div className=""></div>
    </div>
  )
}
