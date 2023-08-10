export type slides = {
  direction: "left" | "right" | "up" | "down";
  type: "slideInLeft" | "slideInRight" | "slideInUp" | "slideInDown";
  delay: number;
  duration: number;
};

export type staggerChild = {
  delayChildren: number;
  staggerChildren: number;
};
