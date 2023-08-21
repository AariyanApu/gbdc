'use client'

import { TypingText, TypingTitle } from '@/components/CustomText'
import { banglaFont } from '@/utils/fonts'
import { staggerContainer } from '@/utils/motion'
import clsx from 'clsx'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useMemo, useRef, useState } from 'react'

interface Review {
  imgUrl: string
}

const reviews: Array<Review> = [
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

function Review({
  imgUrl,
  className,
  ...props
}: Omit<React.ComponentPropsWithoutRef<'figure'>, keyof Review> & Review) {
  let animationDelay = useMemo(() => {
    let possibleAnimationDelays = ['0s', '0.1s', '0.2s', '0.3s', '0.4s', '0.5s']
    return possibleAnimationDelays[
      Math.floor(Math.random() * possibleAnimationDelays.length)
    ]
  }, [])

  return (
    <div
      className={clsx(
        'animate-fade-in rounded-2xl bg-white p-3 opacity-0 shadow-md shadow-gray-900/5',
        className,
      )}
      style={{ animationDelay }}
      {...props}
    >
      <Image
        src={imgUrl}
        width={500}
        height={500}
        alt="Review"
        className="h-36 w-full rounded-4xl object-cover object-center"
      />
    </div>
  )
}

function splitArray<T>(array: Array<T>, numParts: number) {
  let result: Array<Array<T>> = []
  for (let i = 0; i < array.length; i++) {
    let index = i % numParts
    if (!result[index]) {
      result[index] = []
    }
    result[index].push(array[i])
  }
  return result
}

function ReviewColumn({
  reviews,
  className,
  reviewClassName,
  msPerPixel = 0,
}: {
  reviews: Array<Review>
  className?: string
  reviewClassName?: (reviewIndex: number) => string
  msPerPixel?: number
}) {
  let columnRef = useRef<React.ElementRef<'div'>>(null)
  let [columnHeight, setColumnHeight] = useState(0)
  let duration = `${columnHeight * msPerPixel}ms`

  useEffect(() => {
    if (!columnRef.current) {
      return
    }

    let resizeObserver = new window.ResizeObserver(() => {
      setColumnHeight(columnRef.current?.offsetHeight ?? 0)
    })

    resizeObserver.observe(columnRef.current)

    return () => {
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <div
      ref={columnRef}
      className={clsx('animate-marquee space-y-8 py-4', className)}
      style={{ '--marquee-duration': duration } as React.CSSProperties}
    >
      {reviews.concat(reviews).map((review, reviewIndex) => (
        <Review
          key={reviewIndex}
          aria-hidden={reviewIndex >= reviews.length}
          className={reviewClassName?.(reviewIndex % reviews.length)}
          {...review}
        />
      ))}
    </div>
  )
}

function ReviewGrid() {
  let containerRef = useRef<React.ElementRef<'div'>>(null)
  let isInView = useInView(containerRef, { once: true, amount: 0.4 })
  let columns = splitArray(reviews, 3)
  let column1 = columns[0]
  let column2 = columns[1]
  let column3 = splitArray(columns[2], 2)

  return (
    <div
      ref={containerRef}
      className="relative -mx-4 mt-16 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3"
    >
      {isInView && (
        <>
          <ReviewColumn
            reviews={[...column1, ...column3.flat(), ...column2]}
            reviewClassName={(reviewIndex) =>
              clsx(
                reviewIndex >= column1.length + column3[0].length &&
                  'md:hidden',
                reviewIndex >= column1.length && 'lg:hidden',
              )
            }
            msPerPixel={10}
          />
          <ReviewColumn
            reviews={[...column2, ...column3[1]]}
            className="hidden md:block"
            reviewClassName={(reviewIndex) =>
              reviewIndex >= column2.length ? 'lg:hidden' : ''
            }
            msPerPixel={15}
          />
          <ReviewColumn
            reviews={column3.flat()}
            className="hidden lg:block"
            msPerPixel={10}
          />
        </>
      )}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-slate-100" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-100" />
    </div>
  )
}

export function Testimonial() {
  return (
    <section id="reviews" aria-labelledby="reviews-title">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="rounded-sm bg-slate-100 px-4 py-16 md:py-20 lg:px-8"
      >
        <TypingTitle
          title={[
            'What ',
            ' ',
            'P',
            'e',
            'o',
            'p',
            'le ',
            ' ',
            ' Are',
            ' ',
            ' Saying',
          ]}
        />
        <TypingText
          title={'এমন ভাবে হাজারো মানুষের সেবা করতে পেরে আমরা ধন্য।'}
          textStyles={`sm:text-2xl text-lg font-bold tracking-tight text-slate-900 text-center lg:text-start ${banglaFont.className}} my-8`}
        />
        <ReviewGrid />
      </motion.div>
    </section>
  )
}