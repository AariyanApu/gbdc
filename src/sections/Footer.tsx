import FooterCards from '@/components/FooterCards'
import { FooterLinkCard } from '@/components/FooterLinkCard'
import { footerLink, footerLink2, footerLink3 } from '@/utils/data'
import Image from 'next/image'

export default function Footer() {
  return (
    <div className="mx-auto mb-5 mt-10 max-w-7xl text-slate-800">
      <div className="ml-4 flex flex-row justify-between text-base sm:ml-0 sm:justify-between">
        <div
          className={
            ' flex flex-col items-start  justify-start gap-y-2 text-start sm:w-60 sm:text-start '
          }
        >
          <Image
            src={'/logo.png'}
            alt="Logo of GBDC"
            height={300}
            width={300}
            className=" mb-2 w-32 object-cover"
          />
          <div className="w-[190px] pt-2 sm:w-full">
            Head Office : Gournadi Blood Donor Club, Gournadi, Barishal
          </div>
          <FooterCards />
        </div>
        {/* Footer links */}

        {/* TODO: Need to convert the btn to daisyUI */}
        <FooterLinkCard footerLink={footerLink} hiddenItem="hidden sm:flex" />
        <FooterLinkCard footerLink={footerLink2} hiddenItem="hidden sm:flex" />
        <div className=" mr-2 flex flex-col items-center justify-end gap-y-2 sm:mr-0">
          <FooterLinkCard
            footerLink={footerLink3}
            customStyles="first:border-primary  first:text-primary first:font-semibold"
          />
          {/* Footer for Only Mobile */}
          <a
            href={'/contact'}
            className={
              ' animation_color  w-[150px] rounded-md border-b border-slate-300/80 px-2 py-1.5 text-center  text-sm hover:border-primary hover:text-primary  hover:shadow-md sm:hidden sm:w-44 sm:px-4 sm:py-2'
            }
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Footer credits of developer */}
      <div className="mt-6 text-center text-xs tracking-wide md:text-end">
        Design and Developed by{' '}
        <a href="https://aariyan.info" className="link_styles">
          Aariyan Apu
        </a>{' '}
      </div>
    </div>
  )
}
