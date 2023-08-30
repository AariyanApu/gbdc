import { banglaFont, titleFont } from '@/utils/fonts'
import Image from 'next/image'

export default function AboutUs() {
  return (
    <div className={` my-5 bg-white`}>
      <main className="isolate">
        {/* Hero section */}
        <div className="relative isolate -z-10">
          <svg
            className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
            />
          </svg>

          <div className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48">
            <svg
              viewBox="0 0 801 1036"
              aria-hidden="true"
              className="w-[50.0625rem]"
            >
              <path
                fill="url(#70656b7e-db44-4b9b-b7d2-1f06791bed52)"
                fillOpacity=".3"
                d="m282.279 843.371 32.285 192.609-313.61-25.32 281.325-167.289-58.145-346.888c94.5 92.652 277.002 213.246 251.009-45.597C442.651 127.331 248.072 10.369 449.268.891c160.956-7.583 301.235 116.434 351.256 179.39L507.001 307.557l270.983 241.04-495.705 294.774Z"
              />
              <defs>
                <linearGradient
                  id="70656b7e-db44-4b9b-b7d2-1f06791bed52"
                  x1="508.179"
                  x2="-28.677"
                  y1="-116.221"
                  y2="1091.63"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#9089FC" />
                  <stop offset={1} stopColor="#FF80B5" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="mx-4 max-w-7xl sm:mx-auto ">
            <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
              <div className="w-full text-center sm:w-[630px] sm:text-start lg:shrink-0 xl:max-w-2xl">
                <h1
                  className={` text-4xl font-medium tracking-tight text-gray-900 sm:text-6xl ${titleFont.className}`}
                >
                  We’re changing the way of donating blood.
                </h1>
                <p
                  className={`relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none ${banglaFont.className}`}
                >
                  গৌরনদী ব্লাড ডোনার্স ক্লাব পরিবারে আপনাকে স্বাগতম। গৌরনদী
                  ব্লাড ডোনার্স ক্লাব GBDC একটি অরাজনৈতিক ও অলাভজনক সেচছাসেবী
                  সংগঠন। &quot;নতুন প্রজন্মের নতুন পৃথিবী&quot; এই স্লোগানকে
                  আঁকড়ে ধরে এগিয়ে চলা। তাই আপনিও আসুন আমাদের সাথে, আসুন
                  মানবতার কাজে, ঐক্যবদ্ধ হয়ে পাশে দাঁড়াই গরিব দুস্হ-অসহায় অতি
                  দরিদ্র শ্রেণীর মানুষের পাশে।
                </p>
              </div>
              <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                  <div className="relative">
                    <Image
                      height={600}
                      width={600}
                      src={'/assets/aboutPhoto1.jpg'}
                      alt="about photo 1"
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </div>
                <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                  <div className="relative">
                    <Image
                      height={600}
                      width={600}
                      src={'/assets/aboutPhoto1.jpg'}
                      alt="about photo "
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div className="relative">
                    <Image
                      height={600}
                      width={600}
                      src={'/assets/aboutPhoto1.jpg'}
                      alt="about photo 1"
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </div>
                <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                  <div className="relative">
                    <Image
                      height={600}
                      width={600}
                      src={'/assets/aboutPhoto1.jpg'}
                      alt="about photo 1"
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div className="relative">
                    <Image
                      height={600}
                      width={600}
                      src={'/assets/aboutPhoto1.jpg'}
                      alt="about photo 1"
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content section */}

        {/* Image section */}

        {/* Values section */}

        {/* Team section */}
      </main>

      {/* Footer */}
    </div>
  )
}