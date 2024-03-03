import { TypingTitle } from '@/components/CustomText'
import FooterCards from '@/components/FooterCards'

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
        <FooterCards />
      </div>
      {/* Google Map */}
      <div className=""></div>
    </div>
  )
}
