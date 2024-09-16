'use client'

import { navigation, navigationForMobile } from '@/utils/data'
import { titleFont } from '@/utils/fonts'
import { staggerContainer, textContainer, textVariant2 } from '@/libs/motion'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function NavBar() {
  return (
    <div className=" mx-2 mt-2 max-w-7xl rounded-box  shadow-sm shadow-primary lg:mx-auto lg:px-0">
      <>
        <motion.nav
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className={'mx-auto max-w-7xl '}
        >
          <div className="flex h-16 items-center justify-between">
            {/* Mobile menu button */}

            {/* Laptop Screen Start */}

            <div className="flex flex-1 items-center justify-center  px-1 sm:items-stretch lg:justify-between">
              <Link href="/" className="flex flex-shrink-0 items-center">
                <Image
                  className="h-10 w-full object-cover lg:h-16"
                  src="/logo.png"
                  alt="Logo of GBDC"
                  priority
                  width={200}
                  height={200}
                />
                <div
                  className={` ml-1 mt-1 items-center text-center text-4xl  text-primary  ${titleFont.className}`}
                >
                  GBDC
                </div>
              </Link>

              {/* Here Nav LINK */}

              <motion.div
                variants={textContainer}
                className="hidden lg:ml-6 lg:block"
              >
                <div className="flex items-center justify-center space-x-4">
                  {navigation.map((item) => (
                    <motion.div
                      variants={textVariant2}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.3 }} // set duration to 200 milliseconds
                      key={item.name}
                      aria-current={item.current ? 'page' : undefined}
                      className="my-4 "
                    >
                      <Link
                        href={item.href}
                        className={
                          'animation_color rounded-btn border-b border-b-base-300 px-4 py-2 text-lg  hover:border-white hover:border-b-primary hover:text-primary  '
                        }
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.nav>

        {/* NavLink for Mobile */}

        {/* <div className=" lg:hidden"> */}
        {/*   <div className="-mt-20 flex  flex-col items-center justify-center space-y-4  px-2 pb-3 text-center"> */}
        {/*     {navigationForMobile.map((item) => ( */}
        {/*       <a */}
        {/*         key={item.name} */}
        {/*         href={item.href} */}
        {/*         className="block rounded-btn border-b  px-8  py-4 text-3xl font-semibold uppercase  text-base-content" */}
        {/*       > */}
        {/*         {item.name} */}
        {/*       </a> */}
        {/*     ))} */}
        {/*   </div> */}
        {/* </div> */}
      </>
    </div>
  )
}
