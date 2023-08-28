import { LinkProps, Review } from '@/types/randomTypes'

export const navigation: Array<LinkProps> = [
  { name: 'About Us', href: '/about-us', current: false },
  { name: 'Activities', href: '#', current: false },
  { name: 'Achievements', href: '#', current: false },
  { name: 'Become Volunteer', href: '/join-us', current: false },
]

export const banner = [
  { img: '/assets/banner/banner.jpg', alt: 'All members of GBDC' },
  { img: '/assets/banner/banner-1.jpg', alt: 'GBDC giving people wheelchairs' },
  { img: '/assets/banner/banner-2.jpg', alt: 'GBDC accepting awards' },
  { img: '/assets/banner/banner-3.jpg', alt: 'GBDC celebrating success' },
  { img: '/assets/banner/banner-4.jpg', alt: 'GBDC celebrating success' },
]

export const achievementsData = [
  {
    src: '/assets/achievements/1.jpg',
  },
  {
    src: '/assets/achievements/2.jpg',
  },

  {
    src: '/assets/achievements/3.jpg',
  },
  {
    src: '/assets/achievements/4.jpg',
  },
  {
    src: '/assets/achievements/5.jpg',
  },
  {
    src: '/assets/achievements/6.jpg',
  },
  {
    src: '/assets/achievements/7.jpg',
  },
  {
    src: '/assets/achievements/8.jpg',
  },
]

export const featuredData = [
  {
    imgUrl: '/assets/featured/sonaliSomoy.jpg',
    link: 'http://sonalisomoy24.com/%E0%A6%97%E0%A7%8C%E0%A6%B0%E0%A6%A8%E0%A6%A6%E0%A7%80-%E0%A6%AC%E0%A7%8D%E0%A6%B2%E0%A6%BE%E0%A6%A1-%E0%A6%A1%E0%A7%8B%E0%A6%A8%E0%A6%BE%E0%A6%B0%E0%A7%8D%E0%A6%B8-%E0%A6%95%E0%A7%8D%E0%A6%B2/?fbclid=IwAR3KztrLQAtIgF-OtU3X4k3FEgXpZQ0C4CiYANqPX2XmxPLusZ9vtoULYTs',
  },
  {
    imgUrl: '/assets/featured/report71.png',
    link: 'https://report71.com/2021/12/24/%e0%a6%97%e0%a7%8c%e0%a6%b0%e0%a6%a8%e0%a6%a6%e0%a7%80%e0%a6%a4%e0%a7%87-%e0%a6%b8%e0%a7%8d%e0%a6%ac%e0%a7%87%e0%a6%9a%e0%a7%8d%e0%a6%9b%e0%a6%be%e0%a6%b8%e0%a7%87%e0%a6%ac%e0%a7%80%e0%a6%a6%e0%a7%87/?fbclid=IwAR3UL9WJtkwjLw_FHX1sAtnY_2-tTbbHNooe4bf-ottTlnMWF8rQP7VYijQ',
  },
  {
    imgUrl: '/assets/featured/bangladeshSomoy.png',
    link: 'https://www.facebook.com/photo/?fbid=843640510171872&set=gm.1499948843818600&idorvanity=525407151272779',
  },
  {
    imgUrl: '/assets/featured/TBT-Logo.png',
    link: 'https://www.facebook.com/photo/?fbid=835198967244209&set=pcb.1038287263318096',
  },
]

export const reviews: Array<Review> = [
  { imgUrl: '/assets/testimonial/1.jpeg' },
  { imgUrl: '/assets/testimonial/2.jpeg' },
  { imgUrl: '/assets/testimonial/3.jpeg' },
  { imgUrl: '/assets/testimonial/4.jpeg' },
  { imgUrl: '/assets/testimonial/5.jpeg' },
  { imgUrl: '/assets/testimonial/1.jpeg' },
  { imgUrl: '/assets/testimonial/2.jpeg' },
  { imgUrl: '/assets/testimonial/3.jpeg' },
  { imgUrl: '/assets/testimonial/4.jpeg' },
  { imgUrl: '/assets/testimonial/5.jpeg' },
]

export const footerLink: Array<LinkProps> = [
  { name: 'Become a Volunteer', href: '/join-us' },
  { name: 'Our Admin Panel', href: '/about-us' },
  { name: 'Our All Activities', href: '/activities' },
  { name: 'All Abou Us', href: '/about-us' },
]
