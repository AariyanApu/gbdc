import { banglaFont } from '@/utils/fonts'
import Image from 'next/image'

export default function Footer() {
  return (
    <div className="mb-5 mt-10">
      <div className={`flex w-60 flex-col gap-y-1 ${banglaFont.className}`}>
        <Image
          src={'/logo.png'}
          alt="Logo of GBDC"
          height={300}
          width={300}
          className="w-28 object-contain"
        />
        <div>
          প্রধান কার্যালয়ঃ গৌরনদী ব্লাড ডোনার্স ক্লাব, গৌরনদী উপজেলা,
          গৌরনদী,বরিশাল।
        </div>
        <div>ফোনঃ ০১৭১১১১১১১১</div>
        <div>ইমেইলঃ gbdc@gmail.com </div>
      </div>
      <div className="text-end text-sm tracking-wide">
        Design and Developed by{' '}
        <a
          href="https://aariyanapu.com"
          className="transition-colors duration-500 ease-in-out hover:text-sky-400 "
        >
          Aariyan Apu
        </a>{' '}
      </div>
    </div>
  )
}
