import { LinkProps } from '@/types/randomTypes'

export const FooterLinkCard = ({ footerLink }: { footerLink: LinkProps[] }) => {
  return (
    <div className="mb-2 hidden flex-col items-center justify-end gap-y-2 md:flex">
      {footerLink?.map((link, index) => (
        <a
          key={index}
          href={link.href}
          className="w-44 rounded-md border border-slate-200/70 px-4 py-2 text-center text-sm  transition-colors duration-500 ease-in-out hover:border-sky-500 hover:text-sky-500 hover:shadow-md"
        >
          {link.name}
        </a>
      ))}
    </div>
  )
}
