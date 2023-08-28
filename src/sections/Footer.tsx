import FooterCards from '@/components/FooterCards'
import { footerLink } from '@/utils/data'
import { banglaFont } from '@/utils/fonts'
import Image from 'next/image'

export default function Footer() {
  return (
    <div className="mb-5 mt-10 text-slate-800">
      <div className="flex flex-row justify-around">
        <div className={`flex w-60 flex-col gap-y-2 ${banglaFont.className}`}>
          <Image
            src={'/logo.png'}
            alt="Logo of GBDC"
            height={300}
            width={300}
            className="mb-2 w-32 object-contain"
          />
          <div className="ml-1 pt-2">
            প্রধান কার্যালয়ঃ গৌরনদী ব্লাড ডোনার্স ক্লাব, গৌরনদী উপজেলা,
            গৌরনদী,বরিশাল।
          </div>
          <FooterCards />
        </div>
        {/* Footer links */}
        <div className="mb-2 flex flex-col items-center justify-end gap-y-2">
          {footerLink?.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="w-44 rounded-md border border-slate-200 px-4 py-2 text-center text-sm transition-colors duration-500 ease-in-out hover:border-sky-500 hover:text-sky-500"
            >
              {link.name}
            </a>
          ))}
        </div>
        <div className="mb-2 flex flex-col items-center justify-end gap-y-2">
          {footerLink?.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="w-44 rounded-md border border-slate-200 px-4 py-2 text-center text-sm transition-colors duration-500 ease-in-out hover:border-sky-500 hover:text-sky-500"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
      {/* Footer credits of developer */}
      <div className="mt-6 text-end text-sm tracking-wide">
        Design and Developed by{' '}
        <a href="https://aariyanapu.com" className="link_styles ">
          Aariyan Apu
        </a>{' '}
      </div>
    </div>
  )
}
