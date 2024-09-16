import {
  AiFillHome,
  AiOutlineHome,
  AiFillInfoCircle,
  AiOutlineInfoCircle,
  AiOutlineCalendar,
  AiFillCalendar,
} from 'react-icons/ai'
import { RiArticleFill, RiArticleLine } from 'react-icons/ri'
import { MdAnnouncement, MdCampaign, MdOutlineCampaign } from 'react-icons/md'
import { FaHandsHelping } from 'react-icons/fa'
import { BiDonateHeart, BiSolidDonateHeart } from 'react-icons/bi'

export const appBarItems = [
  {
    href: '/',
    label: 'Home',
    filledIcon: <AiFillHome className="app_bar_icon" />,
    outlineIcon: <AiOutlineHome className="app_bar_icon" />,
  },
  {
    href: '/about-us',
    label: 'About',
    filledIcon: <AiFillInfoCircle className="app_bar_icon" />,
    outlineIcon: <AiOutlineInfoCircle className="app_bar_icon" />,
  },
  // {
  //   href: '/blog',
  //   label: 'Blog',
  //   filledIcon: <RiArticleFill className="app_bar_icon" />,
  //   outlineIcon: <RiArticleLine className="app_bar_icon" />,
  // },
  {
    href: '/events',
    label: 'Events',
    filledIcon: <AiFillCalendar className="app_bar_icon" />,
    outlineIcon: <AiOutlineCalendar className="app_bar_icon" />,
  },
  {
    href: '/notice',
    label: 'Notice',

    outlineIcon: <MdOutlineCampaign className="app_bar_icon" />,
    filledIcon: <MdCampaign className="app_bar_icon" />,
  },
  {
    href: '/donate',
    label: 'Donate',

    outlineIcon: <BiDonateHeart className="app_bar_icon" />,
    filledIcon: <BiSolidDonateHeart className="app_bar_icon" />,
  },
]

export const navItems = [
  { href: '/', label: 'Home', width: 'w-7' },
  { href: '/blog', label: 'Blog', width: 'w-7' },
  { href: '/about', label: 'About Us', width: 'w-12' },
]
