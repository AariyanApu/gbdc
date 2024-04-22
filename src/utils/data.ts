import { LinkProps, Review } from '@/types/randomTypes'

export const navigation: Array<LinkProps> = [
  { name: 'Donate Helpless People', href: '/donate', current: false },
  { name: 'Upcoming Events', href: '/upevents', current: false },
  { name: 'Current Events', href: '/events', current: false },
  { name: 'About Us', href: '/about-us', current: false },
]
export const navigationForMobile: Array<LinkProps> = [
  { name: 'Home', href: '', current: false },
  { name: 'Donate Helpless People', href: '/donate', current: false },
  { name: 'Upcoming Events', href: '/upevents', current: false },
  { name: 'Current Events', href: '/events', current: false },
  { name: 'About Us', href: '/about-us', current: false },
  { name: 'Notice Board', href: '/notice', current: false },
  { name: 'Blog', href: '/blog', current: false },
]
export const banner = [
  {
    img: '/assets/banner/banner.webp',
    alt: 'GBDC celebrating 3 years of success',
  },
  {
    img: '/assets/banner/banner-1.webp',
    alt: 'GBDC giving people wheelchairs',
  },
  { img: '/assets/banner/banner-2.webp', alt: 'GBDC meet the volunteers' },
  { img: '/assets/banner/banner-3.webp', alt: 'GBDC accepting awards' },
  { img: '/assets/banner/banner-4.webp', alt: 'GBDC rally in Gourndadi' },
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
  { imgUrl: '/assets/testimonial/1.jpeg' },
  { imgUrl: '/assets/testimonial/2.webp' },
  { imgUrl: '/assets/testimonial/3.jpeg' },
  { imgUrl: '/assets/testimonial/4.jpeg' },
  { imgUrl: '/assets/testimonial/5.jpeg' },
  { imgUrl: '/assets/testimonial/1.jpeg' },
  { imgUrl: '/assets/testimonial/6.jpeg' },
  { imgUrl: '/assets/testimonial/4.jpeg' },
  { imgUrl: '/assets/testimonial/7.webp' },
  { imgUrl: '/assets/testimonial/5.jpeg' },
  { imgUrl: '/assets/testimonial/3.jpeg' },
]

export const footerLink: Array<LinkProps> = [
  { name: 'Contact Us', href: '/contact' },
  { name: 'Notice Board', href: '/notice' },
  { name: 'All Donors', href: '/donors' },
]
export const secondFooterLink: Array<LinkProps> = [
  {
    name: 'Volunteer to GBDC',
    href: 'https://docs.google.com/forms/d/e/1FAIpQLSdKqIpsTlYF7F5liN8-ftSN2VnSGDL-vPx18dmbWslMUhk3cg/viewform?usp=pp_url',
  },
  { name: 'Donate Helpless ', href: '/donate' },
  { name: 'Terms & Condition', href: '/terms' },
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

export const conditionData: Array<termsProps> = [
  { text: 'মাসিক চাঁদা পরিশোধ করতে হবে। ' },
  { text: 'মিটিং এ হাজির থাকা' },
  {
    text: 'জিবিডিসির টি-শার্ট পরিহিত অবস্থায় কোন ধরনের অনৈতিক, অসামাজিক ও রাজনৈতিক কার্যকলাপে লিপ্ত হওয়া যাবে না, প্রমানিত হলে তার বিরুদ্ধে কঠোর আইনি ব্যবস্থা নেয়া হবে ।',
  },
  {
    text: 'সংগঠনের কোন সদস্য মাদক কিংবা নারী ঘটিত কোন কেলেঙ্কারিতে লিপ্ত হতে পারবে না। যদি লিপ্ত হয় আর প্রমানিত হয় তবে তাকে বেইজ্জতি করে বহিস্কার করা হবে।',
  },
  {
    text: 'যদি কেউ গ্রুপ থেকে লিভ নেয় তাকে অবশ্যই নির্দিষ্ট নিয়ম অনুসরন করে গ্রুপে এড হওয়ার জন্য আবেদন করতে হবে। কার্যনির্বাহী পরিষদ অনুমোদন দিলে তাকে পুনরায় এড করা হবে।',
  },
  {
    text: 'নতুন কোন ভলান্টিয়ার এড দেয়ার জন্য অবশ্যই কার্যনির্বাহী পরিষদের অনুমোদন নিতে হবে। ',
  },
  {
    text: 'সংগঠন ও সংগঠনের সদস্যদের বিরুদ্ধে সংগঠনের বাইরে হিংসাত্মক প্রচারনা থেকে বিরত থাকতে হবে। ',
  },
  {
    text: 'সংগঠনের আদর্শ, উদ্দেশ্য ও এর গঠন তন্ত্রের পরিপন্থী কোন কাজে লিপ্ত হওয়া যাবে না । ',
  },
  {
    text: 'কার্যনিবাহী পরিষদের সকল সিদ্ধান্ত বাধ্যতামূলক মেনে চলতে হবে এবং কার্যনিবাহী পরিষদের নির্দেশিত সকল কাজ সর্বশক্তি দিয়ে পালন করতে হবে। ',
  },
  {
    text: 'সংগঠন থেকে কোন ব্লাড ডোনেট এর ক্ষেত্রে ডোনেট এর পূর্বে তা অবশ্যই দ্বায়িত্বশীলদের অবহিত করতে হবে। গৌরনদীর বাইরে ডোনার নিয়ে গেলে দ্বায়িত্বশীলদের বাধ্যতামূলক অবগত করতে হবে। সকল ডোনেটের সময় জিবিডিসির নির্ধারিত ফরম পুরন করতে হবে। ',
  },
  {
    text: 'জিবিডিসি এর সদস্যদের অবশ্যই টি-শার্ট পরিহিত অবস্থায় রক্তদান করতে হবে। ডোনেশনের ছবিতে অবশ্যই লোগো বসিয়ে পোষ্ট করতে হবে।',
  },
  {
    text: 'প্রচার বিভাগ কর্তৃক প্রকাশিত নোটিশ কে সর্বোচ্চ গুরুত্ব দিতে হবে এবং প্রচার বিভাগ কর্তৃক প্রকাশিত পোষ্টার ব্যানার ব্যতীত অন্য কিছু শেয়ার করা যাবে না। ',
  },
  { text: 'সাংগঠনিক কার্যক্রম ব্যতীত জিবিডিসির টি-শার্ট পরিধান করা নিষিদ্ধ ।' },
  { text: 'কোন বিষয়ে কাউকে ব্যাক্তিগত অ্যাটাক করা যাবে না। ' },
  {
    text: 'এমন কোন পোষ্ট অথবা ছবি ফেইসবুকের টাইমলাইনে শেয়ার করা যাবে না, যেটা আপনি আপনার সংগঠন এবং আপনার সেচ্ছাসেবী নামটা বিতর্কিত হয় । ',
  },
  {
    text: 'সকলের সম্মান রক্ষায় এখানে ছোট হোক আর বড় হোক সবার সাথে বিনয়ী ভাবে কথা বলতে হবে, মনে রাখতে হবে আমার কথায় ব্যবহারে কোন সদস্য যেন কোন প্রকার আঘাত কিংবা কষ্ট না পায় ',
  },
  {
    text: 'ধর্মীয় অনুশাসন মেনে চলতে হবে। ধর্মীয় অনুভুতিতে আঘাত লাগে এমন কোন কাজ করা যাবে না অনলাইনে কিংবা অফলাইনে । ',
  },
]

export const membershipCancel: Array<termsProps> = [
  {
    text: 'কোন ব্যক্তি সেচ্ছায় পদত্যাগ করলে এবং তা কার্যনির্বাহী পরিষদ কর্তৃক অনুমোদিত হলে। ',
  },
  { text: 'মৃত্যু হলে বা অনৈতিক অপরাধে অভিযুক্ত হলে। ' },
  { text: 'প্রতিষ্ঠানের স্বার্থ ও আদর্শের পরিপন্থী কার্যকলাপে লিপ্ত হলে।' },
  {
    text: 'কোন সদস্য প্রতিষ্ঠানের মাসিক চাঁদা একনাগাড়ে ৬ মাস প্রদান না করলে । ',
  },
  {
    text: 'প্রতিষ্ঠানের কাজে পর পর ৬ (ছয়) মাস নিষ্ক্রিয় ও অকর্মন্য হয়ে পড়লে। ',
  },
  { text: 'আদালত কর্তৃক অপরাধী ঘোষিত হলে। ' },
  {
    text: 'সংগঠন কে কাজে লাগিয়ে দূর্নীতি, অবৈধ চাঁদাবাজি করলে এবং কার্যনির্বাহী পরিষদের অনুমোদন ব্যতীত জনগনের কাছ থেকে ডোনেসন বা অনুদান সংগ্রহ করলে। ',
  },
  { text: 'সংগঠনের সেচ্ছাসেবী, অরাজনৈতিক ও অলাভজনক ভাবমূর্তি ক্ষুন্ন করলে। ' },
  {
    text: 'সংগঠনের মূল্যবান রেকর্ডপত্র স্বেচ্ছাচারীভাবে কুক্ষিগত করে সংস্থার কার্যক্রমে প্রতিবন্ধকতা সৃষ্টি করলে। ',
  },
  {
    text: 'জিবিডিসি রক্তের বিনিময়ে কোন ধরনের অর্থ লেনদেন করে না যদি কোন সদস্য রক্তের বিনিময় অর্থলেনদেন কোনো প্রমান মিলে তার বিরুদ্ধে আইনগত ব্যবস্থা গ্রহন করা হবে।',
  },
  {
    text: 'পাশাপাশি থানার মধ্যে একই সাথে দুটি সংগঠনের কার্যনির্বাহী পরিষদের দায়িত্বশীল হওয়া যাবে না। (আলোচনা সাপেক্ষে) তবে উপদেষ্টা পরিষদে থাকতে পারবে। ',
  },
  {
    text: 'কার্যনির্বাহী পরিষদের প্রধান হবেন সভাপতি। সকল ক্ষেত্রেই কার্যনির্বাহী পরিষদের পরিষদের সংখ্যা গরিষ্ঠ সিদ্ধান্তই চূড়ান্ত । ',
  },
]

export const emergencyContactData = [
  {
    name: 'Kazi sujan',
    phone: '+8801918184091',
    email: 'gbdc2018@gmail',
    imgUrl: '/assets/emergency/sujan.jpg',
  },
  {
    name: 'Imran ibn Amin',
    phone: '+8801918184091',
    email: 'gbdc2018@gmail',
    imgUrl: '/assets/emergency/amin.jpg',
  },
  {
    name: 'Tanveer Ahammed',
    phone: '+8801918184091',
    email: 'gbdc2018@gmail',
    imgUrl: '/assets/emergency/tanvir.jpg',
  },
]

export const donorData = [
  { imgUrl: '/assets/about/1.webp' },
  { imgUrl: '/assets/about/2.webp' },
  { imgUrl: '/assets/about/3.webp' },
  { imgUrl: '/assets/about/4.webp' },
  { imgUrl: '/assets/about/5.webp' },
  { imgUrl: '/assets/about/6.webp' },
]
