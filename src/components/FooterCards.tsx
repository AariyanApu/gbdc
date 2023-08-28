import Link from 'next/link'
import { HiOutlineDevicePhoneMobile } from 'react-icons/hi2'
import { IoMailOutline } from 'react-icons/io5'
import { PiFacebookLogo } from 'react-icons/pi'

export default function FooterCards() {
  return (
    <>
      <div className="link_styles flex cursor-pointer  gap-x-1">
        <HiOutlineDevicePhoneMobile className=" h-6 w-6" />
        +880 1234 567 890
      </div>
      <div className="link_styles flex cursor-pointer  gap-x-1 ">
        <IoMailOutline className=" h-6 w-6" />
        mail@gbdc.com
      </div>
      <div className="link_styles flex  gap-x-1 ">
        <PiFacebookLogo className=" h-6 w-6" />
        <Link href="https://www.facebook.com/groups/525407151272779">
          facebook.com/gbdc
        </Link>
      </div>
    </>
  )
}
