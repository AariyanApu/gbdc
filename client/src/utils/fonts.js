// eslint-disable-next-line camelcase
import { Nunito } from '@next/font/google';
import localFont from '@next/font/local';

export const titleFont = localFont({ src: './balivia.ttf' });
export const inter = Nunito({
  subsets: ['latin'],
  variable: '--font-inter',
});
