import { LinkProps, Review } from '@/types/randomTypes'

export const navigation: Array<LinkProps> = [
  { name: 'About Us', href: '/about-us', current: false },
  { name: 'Activities', href: '/activities', current: false },
  { name: 'Achievements', href: '/achievements', current: false },
  { name: 'Blog', href: '/blog', current: false },
]
export const navigationForMobile: Array<LinkProps> = [
  { name: 'Home', href: '', current: false },
  { name: 'About Us', href: '/about-us', current: false },
  { name: 'Activities', href: '/activities', current: false },
  { name: 'Achievements', href: '/achievements', current: false },
  { name: 'Blog', href: '/blog', current: false },
]
export const banner = [
  { img: '/assets/banner/banner.webp', alt: 'All members of GBDC' },
  {
    img: '/assets/banner/banner-1.webp',
    alt: 'GBDC giving people wheelchairs',
  },
  { img: '/assets/banner/banner-2.webp', alt: 'GBDC accepting awards' },
  { img: '/assets/banner/banner-3.webp', alt: 'GBDC celebrating success' },
  { img: '/assets/banner/banner-4.webp', alt: 'GBDC celebrating success' },
  {
    img: '/assets/banner/banner-5.webp',
    alt: 'GBDC celebrating 3 years of success',
  },
]

export const achievementsData = [
  {
    src: '/assets/achievements/1.webp',
  },
  {
    src: '/assets/achievements/2.webp',
  },

  {
    src: '/assets/achievements/3.webp',
  },
  {
    src: '/assets/achievements/4.webp',
  },
  {
    src: '/assets/achievements/5.webp',
  },
  {
    src: '/assets/achievements/6.webp',
  },
  {
    src: '/assets/achievements/7.webp',
  },
  {
    src: '/assets/achievements/8.webp',
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
  { imgUrl: '/assets/testimonial/5.jpeg' },
  { imgUrl: '/assets/testimonial/6.jpeg' },
  { imgUrl: '/assets/testimonial/7.jpeg' },
  { imgUrl: '/assets/testimonial/8.jpeg' },
  { imgUrl: '/assets/testimonial/9.jpeg' },
  { imgUrl: '/assets/testimonial/10.jpeg' },
  { imgUrl: '/assets/testimonial/6.jpeg' },
  { imgUrl: '/assets/testimonial/7.jpeg' },
  { imgUrl: '/assets/testimonial/8.jpeg' },
]

export const footerLink: Array<LinkProps> = [
  { name: 'Contact Us', href: '/about-us' },
  { name: 'All About Us', href: '/about-us' },
  { name: 'Our Admin Panel', href: '/about-us' },
  { name: 'Our All Activities', href: '/activities' },
]
export const secondFooterLink: Array<LinkProps> = [
  { name: 'Volunteer to GBDC', href: '/' },
  { name: 'Donate to GBDC', href: '/about-us' },
  { name: 'Latest Blog Post', href: '/blog' },
  { name: 'Feature News', href: '/blog' },
]
export const adminPanel = [
  {
    speakers: [
      {
        name: ' ইমরান  ইবনে  আমিন ',
        role: ' পরিচালক',
        image: '/assets/admin/amin.jpg',
      },
      {
        name: ' কামরুল  ইসলাম  আপন ',
        role: ' পরিচালক ',
        image: '/assets/admin/kamrul.jpg',
      },
      {
        name: ' কাজী  সুজন ',
        role: ' সাধারণ সম্পাদক',
        image: '/assets/admin/sujan.jpg',
      },
      {
        name: ' জহিরুল  ইসলাম ',
        role: ' যুগ্ন সাধারণ সম্পাদক',
        image: '/assets/admin/jahir.jpg',
      },
      {
        name: ' তানভীর  আহমেদ ',
        role: ' সহ  সভাপতি  ',
        image: '/assets/admin/tanvir.jpg',
      },
      {
        name: ' শ্রাবণী দাস',
        role: ' অর্থ সম্পাদক ',
        image: '/assets/admin/sraboni.jpg',
      },
      {
        name: ' ইমরান হোসেন',
        role: ' প্রচার  সম্পাদক ',
        image: '/assets/admin/imran.jpg',
      },
      {
        name: ' ইব্রাহীম  খলিলুল্লাহ ',
        role: ' সহ  দপ্তর সম্পাদক',
        image: '/assets/admin/ibrahim.jpg',
      },
    ],
  },
]
