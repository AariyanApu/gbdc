import Link from 'next/link'
import { HiOutlineDevicePhoneMobile } from 'react-icons/hi2'
import { IoMailOutline } from 'react-icons/io5'
import { PiFacebookLogo } from 'react-icons/pi'

export default function FooterCards() {
  return (
    <>
      <div className="link_styles    cursor-pointer ">
        {/* <HiOutlineDevicePhoneMobile className=" h-6 w-6" /> */}
        +8801918184091
      </div>
      <div className="link_styles cursor-pointer ">
        {/* <IoMailOutline className=" h-6 w-6" /> */}
        gbdc2018@gmail.com
      </div>
      <div className="link_styles  cursor-pointer ">
        {/* <PiFacebookLogo className=" h-6 w-6" /> */}
        <Link href="https://www.facebook.com/groups/525407151272779">
          facebook.com/gbdc
        </Link>
      </div>
    </>
  )
}
