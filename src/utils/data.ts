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
  {
    img: '/assets/banner/banner-7.webp',
    alt: 'GBDC celebrating 3 years of success',
  },
  {
    img: '/assets/banner/banner-8.webp',
    alt: 'GBDC celebrating 3 years of success',
  },
  { img: '/assets/banner/banner.webp', alt: 'All members of GBDC' },
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
  // { name: 'Our All Activities', href: '/activities' },
]
export const secondFooterLink: Array<LinkProps> = [
  {
    name: 'Volunteer to GBDC',
    href: 'https://docs.google.com/forms/d/e/1FAIpQLSdKqIpsTlYF7F5liN8-ftSN2VnSGDL-vPx18dmbWslMUhk3cg/viewform?usp=pp_url',
  },
  { name: 'Donate to GBDC', href: '/about-us' },
  { name: 'Terms & Condition', href: '/blog' },
  // { name: 'Feature News', href: '/blog' },
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

interface termsProps {
  text: string
}
export const termsData: Array<termsProps> = [
  {
    text: 'এটি একটি অরাজনৈতিক, অলাভজনক, স্বেচ্ছাসেবী জনকল্যানমূলক সংগঠন হিসেবে জাতি, ধর্ম নির্বিশেষে সকলের সেবা করা । ',
  },
  {
    text: 'দরিদ্র এবং রক্তের প্রয়োজনে অসহায় মানুষের পাশে থেকে নি:স্বার্থ সেবা দান করা।',
  },
  {
    text: 'জনমনে রক্তদান বিষয়ে অহেতুক ভীতি দূর করে রক্তদানকে সার্বজনীন করা',
  },
  {
    text: 'রক্তদানে উৎসাহিত করার জন্য নিয়মিত ক্যাম্পেইন করে বিনামূল্য রক্তের গ্রুপ নির্ণয় ও জনসচেতনতার সৃষ্টি করা। ',
  },
  {
    text: ' গর্ভবতী মায়ের জন্য অন্তত দুজন রক্তদাতা প্রস্তুত করার জন্য সচেতন করা ।',
  },

  { text: 'থ্যালাসেমিয়া রোগ প্রতিরোধে জনমনে সচেতনতা সৃষ্টি ।' },
  {
    text: 'শিশুদের মধ্যে হাত ধোয়া কর্মসূচিসহ অন্যান্য স্বাস্থ্য সচেতনতা বৃদ্ধিমূলক বিভিন্ন কর্মসূচী পালন করা ।',
  },
  {
    text: 'প্রাকৃতিক দূর্যোগ মোকাবেলায় সচেতনতা বৃদ্ধির লক্ষ্যে প্রচারনা করা।',
  },
  {
    text: 'হেপাটাইসিস, হৃদরোগ, ডায়াবেটিকস, এইচআইভি, সিফিলিস, ম্যালেরিয়া, যক্ষা ইত্যাদি রোগের প্রতিরোধ প্রতিকারে সাধারন মানুষকে সচেতন করা। ',
  },
  {
    text: 'মাদক বিরোধী আন্দোলনের মাধ্যমে সমাজকে মাদকমুক্ত করা ।',
  },
  {
    text: 'মাদক ও ধুমপানের সম্পর্কে জনগনকে সচেতন করা।',
  },
  {
    text: 'এলাকায় স্বাস্থ্য সচেতনতা মূলক কার্যক্রম গ্রহন বাস্তবায়ন করা। ',
  },
  {
    text: 'বিভিন্ন সামাজিক সমস্যা সমাধানে সোচ্চার থাকা। ',
  },
  {
    text: 'সদস্যদের মধ্যে একাত্ববোধ, সৌহার্দ্য, ভ্রাতৃত্ববোধ ইত্যাদির উৎকর্ষ সাধন এবং প্রয়োজনে একে অপরকে সাহায্য করা। ',
  },
  {
    text: 'বিবাহে যৌতুক নিরোধ এর ব্যবস্থা করা। ',
  },
  {
    text: 'সংস্থার মাধ্যমে সকল প্রকার দূর্নীতি রোধ ও সরকারের সাথে সহযোগিতা করা। ',
  },
  {
    text: 'যে কোন স্থানে দূর্ভিক্ষ, মহামারী, বন্যা বা আকস্মিক দূর্ঘটনা ঘটলে সে স্থানে সাধ্যমত আর্থিক সহায়তা দান ও আর্থিক পূর্নবাসনে সাহায্য করা। ',
  },
  {
    text: 'পরিবার পরিকল্পনা বিষয়ে সচেতনতা বৃদ্ধির লক্ষে বিভিন্ন কর্মসূচী গ্রহন করা । ',
  },
  {
    text: ' জাতীয় দিবস সমূহ উদযাপন, পনর্মিলনী অনুষ্ঠানাদির আয়োজন। জাতীয় গুরুত্বপূর্ন অনুষ্ঠানাদির আয়োজন করা। ',
  },
  {
    text: 'সুবিধা বঞ্চিত মানুষের জন্য বিভিন্ন সময়ে বস্ত্র, খাদ্য ইত্যাদির ব্যবস্থা করা। ',
  },
  {
    text: ' নারী নির্যাতন ও যৌতুক প্রতিরোধে জনগনকে সহায়তা প্রদান।',
  },
  {
    text: 'এলাকাবাসীর স্বার্থে ক্ষুদ্র ও কুটির শিল্প স্থাপন ও কার্যক্রম সম্প্রসারন করা। ',
  },
  {
    text: 'কারিগরি প্রশিক্ষন ও সমাজকল্যান কার্যে প্রশিক্ষনের ব্যবস্থা করার। ',
  },
  {
    text: ' সদস্যদের আর্থিক উন্নয়নের জন্য আয় বৃদ্ধিমূলক প্রকল্প গ্রহন করা। ',
  },
  {
    text: 'সংস্থার উন্নয়নের জন্য বিভিন্ন উন্নয়নমূলক কর্মসূচি গ্রহন করা যেমন: মৎস্য চাষ, হাঁস-মুরগী প্রতিপালন সংক্রান্ত প্রকল্প গ্রহন',
  },
]
