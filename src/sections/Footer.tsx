import FooterCards from '@/components/FooterCards'
import { FooterLinkCard } from '@/components/FooterLinkCard'
import { footerLink, secondFooterLink } from '@/utils/data'
import { banglaFont } from '@/utils/fonts'
import Image from 'next/image'

export default function Footer() {
  return (
    <div className="mb-5 mt-10 text-slate-800">
      <div className="ml-4 flex flex-row justify-between sm:justify-around">
        <div
          className={` flex flex-col items-start  justify-start gap-y-2 text-start sm:w-60 sm:text-start ${banglaFont.className}`}
        >
          <Image
            src={'/logo.png'}
            alt="Logo of GBDC"
            height={300}
            width={300}
            className=" mb-2 w-32 object-cover"
          />
          <div className="w-48 pt-2 sm:w-full">
            প্রধান কার্যালয়ঃ গৌরনদী ব্লাড ডোনার্স ক্লাব, গৌরনদী উপজেলা,
            গৌরনদী,বরিশাল।
          </div>
          <FooterCards />
        </div>
        {/* Footer links */}
        {/* <FooterLinkCard footerLink={footerLink} /> */}
        <FooterLinkCard
          footerLink={secondFooterLink}
          customStyles="first:border-sky-400  first:text-sky-400 first:font-semibold"
        />
      </div>

      {/* Footer credits of developer */}
      <div className="mt-6 text-center text-sm tracking-wide md:mr-4 md:text-end">
        Design and Developed by{' '}
        <a href="https://aariyanapu.com" className="link_styles ">
          Aariyan Apu
        </a>{' '}
      </div>
    </div>
  )
}
