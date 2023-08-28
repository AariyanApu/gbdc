import FooterCards from '@/components/FooterCards'
import { banglaFont } from '@/utils/fonts'
import Image from 'next/image'

export default function Footer() {
  return (
    <div className="mb-5 mt-10 text-slate-800">
      <div className="flex flex-row justify-between">
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
        {/* Footer links */}
        <div className="flex_center flex-col ">
          <a
            href="https://www.facebook.com/groups/525407151272779"
            className="rounded-md border border-slate-200 px-4 py-2 text-sm transition-colors duration-500 ease-in-out hover:border-sky-500 hover:text-sky-500"
          >
            Become a Volunteer
          </a>
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
