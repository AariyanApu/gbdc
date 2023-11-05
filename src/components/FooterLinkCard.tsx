import { LinkProps } from '@/types/randomTypes'

export const FooterLinkCard = ({
  footerLink,
  customStyles,
  hiddenItem,
}: {
  footerLink: LinkProps[]
  customStyles?: string
  hiddenItem?: string
}) => {
  return (
    <div
      className={`${hiddenItem} mb-2 mr-2 flex flex-col items-center justify-end gap-y-2 sm:mr-0`}
    >
      {footerLink?.map((link, index) => (
        <a
          key={index}
          href={link.href}
          className={` ${customStyles} w-[150px] rounded-md border border-slate-300/80 px-2 py-1.5 text-center text-sm transition-colors duration-500 ease-in-out  hover:border-sky-500 hover:text-sky-500 hover:shadow-md  sm:w-44 sm:px-4 sm:py-2`}
        >
          {link.name}
        </a>
      ))}
    </div>
  )
}
