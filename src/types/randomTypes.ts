export interface TypingTitleProps {
  title: string | string[];
}

// Types For Activities Section
export interface ActivitiesCardProps {
  imgUrl: string;
  title: string;
  description: string;
  variants: any;
  customStyle?: string;
  imgSize?: string;
}

export interface ButtonProps {
  variants: any;
  text: string;
  link: string;
  icon?: any;
  customStyle?: string;
}
