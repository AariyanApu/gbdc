import FooterCards from '@/components/FooterCards'
import { FooterLinkCard } from '@/components/FooterLinkCard'
import { footerLink, secondFooterLink } from '@/utils/data'
import { banglaFont } from '@/utils/fonts'
import Image from 'next/image'

export default function Footer() {
  return (
    <div className="mb-5 mt-10 text-slate-800">
      <div className="flex flex-row justify-around">
        <div
          className={` mx-auto flex w-60 flex-col items-center justify-center gap-y-2 text-center sm:mx-0 sm:items-start sm:justify-start sm:text-start ${banglaFont.className}`}
        >
          <Image
            src={'/logo.png'}
            alt="Logo of GBDC"
            height={300}
            width={300}
            className=" mb-2 w-32 object-contain"
          />
          <div className="ml-1 pt-2">
            প্রধান কার্যালয়ঃ গৌরনদী ব্লাড ডোনার্স ক্লাব, গৌরনদী উপজেলা,
            গৌরনদী,বরিশাল।
          </div>
          <FooterCards />
        </div>
        {/* Footer links */}
        <FooterLinkCard footerLink={footerLink} />
        <FooterLinkCard footerLink={secondFooterLink} />
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
