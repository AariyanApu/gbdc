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
      className={`${hiddenItem}  flex flex-col items-center justify-end gap-y-2 sm:mr-0`}
    >
      {footerLink?.map((link, index) => (
        <a
          key={index}
          href={link.href}
          className={` ${customStyles} animation_color w-[150px] rounded-btn border-b border-base-300 px-2 py-1.5 text-center text-sm hover:border hover:border-primary hover:text-primary sm:w-44 sm:px-4 sm:py-2`}
        >
          {link.name}
        </a>
      ))}
    </div>
  )
}
