'use client'
import { appBarItems } from '@/utils/navbar-data'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function AppBar() {
  const pathname = usePathname()

  return (
    <div className="btm-nav z-50 flex bg-base-100 px-2   lg:hidden">
      <div className=" mb-2 flex h-[70px] flex-row justify-between rounded-box border border-primary bg-base-100  px-8   sm:h-24">
        {appBarItems.map(({ href, label, filledIcon, outlineIcon }) => (
          <Link href={href} key={href} className="flex flex-col items-center">
            {pathname === href ? filledIcon : outlineIcon}
            <span className="text-[11px] text-neutral/60">{label}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
