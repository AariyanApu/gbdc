export interface TypingTitleProps {
  title: string | string[]
  textStyles?: string
}

// Types For Activities Section
export interface ActivitiesCardProps {
  imgUrl: string
  title: string
  description: string
  variants: any
  customStyle?: string
  imgSize?: string
}

export interface ButtonProps {
  variants: any
  text: string
  link: string
  icon?: any
  customStyle?: string
}
export interface counterCardProps {
  end: number
  imgSrc: string
  desc: string
}
export interface AchievementCardProps {
  src: string
}
export interface ReviewProps {
  imgUrl: string
}

export interface LinkProps {
  name: string
  href: string
  customStyles?: string
  current?: boolean
}
// export interface activitiesData {
//   id: number
//   title: string
//   imgUrl: string
// }

export interface activitiesData {
  id: number
  title: string
  imgUrl: string
  desc: string
  createdAt: string
  slug: string
  views: number
}

export interface emergencyContactProps {
  name: string
  phone: string
  email: string
  imgUrl: string
}
export interface noticeProps {
  id: string
  title: string
  slug: string
  desc: string
  views: number
  createdAt: string
}
export interface PostProps {
  id: number
  title: string
  imgUrl: string
  desc: string
  createdAt: string
  slug: string
  views: number
  section: string
}
export interface EventData {
  name: string
  desc: string
  imgUrl: { [key: string]: string }
}

export interface UploadResult {
  info: {
    public_id: string
  }
}
