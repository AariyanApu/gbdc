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
        href={{ pathname: 'mailto:gbdc2018@gmail' }}
        className="link_styles cursor-pointer"
      >
        Gbdc2018@gmail.com
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
