import Container from '@/components/Container'
import { TypingTitle } from '@/components/CustomText'
import Image from 'next/image'

export default function Donate() {
  return (
    <Container>
      <div className="mx-auto my-12 max-w-7xl px-4 sm:px-6 lg:px-8">
        <TypingTitle title={"Support GBDC's Mission"} />
        <div className="mt-12 flex flex-col items-start justify-around gap-y-6 text-gray-900 sm:gap-y-0 lg:mt-16 lg:flex-row">
          <div>
            <p className=" mt-5 pl-1 text-xl ">
              You can Donate Money to GBDC By :
            </p>

            <div className="relative mt-2 overflow-x-auto">
              <table className="w-full text-left text-base  rtl:text-right lg:w-80 ">
                <tbody>
                  <tr className="border-b bg-white">
                    <th scope="row" className="table_header">
                      Bkash
                    </th>
                    <td className="px-6 py-4">+8801234567890</td>
                  </tr>
                  <tr className="border-b bg-white ">
                    <th scope="row" className="table_header">
                      Nagad
                    </th>
                    <td className="px-6 py-4">+8801234567890</td>
                  </tr>
                  <tr className="bg-white ">
                    <th scope="row" className="table_header ">
                      Rocket
                    </th>
                    <td className="px-6 py-4">+8801234567890</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className=" flex w-full flex-col items-center justify-center text-center  lg:w-96">
            <p className=" text-2xl font-bold ">
              Scan the QR Code to Donate Money through Bkash:
            </p>

            <Image
              src={'/assets/bkash.webp'}
              width={300}
              height={300}
              alt={'bkash'}
              className=" h-64 w-64"
            />
          </div>
        </div>
      </div>
    </Container>
  )
}
