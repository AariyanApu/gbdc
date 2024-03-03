import { TypingTitle } from '@/components/CustomText'
import FooterCards from '@/components/FooterCards'

export default function Contact() {
  return (
    <div className="mx-auto my-12 max-w-7xl px-4 sm:px-6 lg:px-8">
      <TypingTitle title={'Contact Us'} />
      {/* Contact Info */}
      <div className=" my-5 flex flex-col justify-around sm:flex-row">
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
            className=""
          ></iframe>
        </div>
      </div>
    </div>
  )
}
