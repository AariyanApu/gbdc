/* eslint-disable react/no-unescaped-entities */

//  spell-checker: disable

import Container from '@/components/Container'
import { TypingText, TypingTitle } from '@/components/CustomText'
import MotionDiv from '@/components/MotionDiv'
import { banglaFont } from '@/utils/fonts'
import { fadeIn } from '@/utils/motion'
import Image from 'next/image'

export default function About() {
  return (
    <Container customStyle=" my-16 md:my-20 lg:my-20 xl:my-28 2xl:my-32 ">
      <TypingTitle title={'Our Lifesaving Mission'} />

      <div className={'  mt-10 flex flex-col justify-evenly sm:flex-row '}>
        <div className=" w-full px-5 sm:w-[300px] sm:px-0 lg:w-[500px]">
          <TypingText
            title={[
              'GBDC',
              ' family',
              ' extends',
              ' a',
              ' warm',
              ' welcome',
              ' t',
              'o',
              ' y',
              'o',
              'u',
            ]}
            textStyles="mb-3 text-[22px] sm:mt-7 text-center sm:text-left font-semibold"
          />
          <MotionDiv
            variants={fadeIn('up', 'tween', 1, 0.7)}
            customStyle=" w-full text-center text-lg sm:tracking-normal sm:text-justify sm:w-[290px] lg:w-[480px]  "
          >
            The Gournadi Blood Donors Club (GBDC) is a non-political and
            non-profit service organization. Embracing the slogan "A new world
            for a new generation," it forges ahead with determination. So, come
            join us, engage in humanitarian work, stand alongside and support
            the impoverished, disadvantaged, and extremely underprivileged
            members of society.
          </MotionDiv>
        </div>
        <MotionDiv
          variants={fadeIn('up', 'tween', 1.2, 0.7)}
          customStyle="mx-4 mt-5 sm:mx-0 md:mt-6 lg:mt-0"
        >
          {' '}
          <Image
            src={'/assets/about.webp'}
            className=" mx-auto h-[250px] w-full rounded-md object-cover object-center drop-shadow md:h-[300px] md:w-[350px] lg:h-[250px] lg:w-[450px] "
            alt="Group Photo "
            height={800}
            width={800}
          />{' '}
        </MotionDiv>
      </div>
    </Container>
  )
}
