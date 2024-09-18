'use client'
import { appBarItems } from '@/utils/navbar-data'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function AppBar() {
  const pathname = usePathname()

  return (
    <div className="btm-nav z-50 flex px-2  lg:hidden">
      <div className="  flex h-[60px] flex-row justify-between rounded-box border border-primary px-8 shadow sm:h-24 ">
        {appBarItems.map(({ href, filledIcon, outlineIcon }) => (
          <Link href={href} key={href} className="flex flex-col items-center">
            {pathname === href ? filledIcon : outlineIcon}
          </Link>
        ))}
      </div>
    </div>
  )
}
