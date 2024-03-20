import { Nunito } from 'next/font/google'
import localFont from 'next/font/local'

// export const titleFont = localFont({ src: "./balivia.ttf" });
export const titleFont = localFont({
  src: './Revans-Medium.ttf',
})

export const banglaFont = localFont({
  src: './BalooDa2-Regular.ttf',
  variable: '--font-bangla',
})
// Remove if no longer needed

export const regularFont = Nunito({
  weight: ['400', '700'],
  subsets: ['latin'],
})
