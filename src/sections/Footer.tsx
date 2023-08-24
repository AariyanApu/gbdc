import FooterCards from '@/components/FooterCards'
import { banglaFont } from '@/utils/fonts'
import Image from 'next/image'

export default function Footer() {
  return (
    <div className="mb-5 mt-10">
      <div className="flex flex-col sm:flex-row">
        <div className={`flex w-60 flex-col gap-y-2 ${banglaFont.className}`}>
          <Image
            src={'/logo.png'}
            alt="Logo of GBDC"
            height={300}
            width={300}
            className="w-28 object-contain"
          />
          <div className="ml-1">
            প্রধান কার্যালয়ঃ গৌরনদী ব্লাড ডোনার্স ক্লাব, গৌরনদী উপজেলা,
            গৌরনদী,বরিশাল।
          </div>
          <FooterCards />
        </div>
      </div>
      {/* Footer credits of developer */}
      <div className="text-end text-sm tracking-wide">
        Design and Developed by{' '}
        <a href="https://aariyanapu.com" className="link_styles ">
          Aariyan Apu
        </a>{' '}
      </div>
    </div>
  )
}
