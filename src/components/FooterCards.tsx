import Link from 'next/link'
export default function FooterCards() {
  return (
    <>
      <Link
        href={{ pathname: 'tel:+8801918184091' }}
        className="link_styles cursor-pointer"
      >
        +8801918184091
      </Link>
      <Link
        href={{ pathname: 'mailto:info@gbdcbd.org' }}
        className="link_styles cursor-pointer"
      >
        info@gbdcbd.org
      </Link>
      <Link
        className="link_styles"
        href={'https://www.facebook.com/groups/525407151272779'}
      >
        Facebook.com/GBDC
      </Link>
    </>
  )
}
