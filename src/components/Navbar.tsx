'use client'

import { navigation, navigationForMobile } from '@/utils/data'
import { titleFont } from '@/utils/fonts'
import { staggerContainer, textContainer, textVariant2 } from '@/utils/motion'
import { Disclosure } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { RiMenu3Line } from 'react-icons/ri'

export default function NavBar() {
  return (
    <Disclosure
      as="nav"
      className=" mx-auto mt-2 max-w-7xl rounded-lg border-y-4 border-sky-400 px-2 shadow-lg"
    >
      {({ open }) => (
        <>
          <motion.nav
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className={'mx-auto max-w-7xl'}
          >
            <div className="relative flex h-16 items-center justify-between">
              {/* Mobile menu button */}
              <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
                <Disclosure.Button className="animation_color inline-flex items-center justify-center rounded-md p-2 text-sky-400   focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <RiMenu3Line className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              {/* Laptop Screen Start */}

              <div className="flex flex-1 items-center justify-center sm:items-stretch lg:justify-between">
                <Link href="/" className="flex flex-shrink-0 items-center">
                  <Image
                    className=" h-10 w-auto lg:hidden"
                    src="/logo.png"
                    alt="Logo of GBDC"
                    width={100}
                    height={100}
                  />
                  <Image
                    className="hidden h-16 w-auto lg:block"
                    src="/logo.png"
                    alt="Logo of GBDC"
                    width={200}
                    height={200}
                  />
                  <div
                    className={` ml-1 mt-1 items-center text-center text-4xl font-normal text-sky-400 ${titleFont.className}`}
                  >
                    GBDC
                  </div>
                </Link>

                {/* Here Nav LINK */}

                <motion.div
                  variants={textContainer}
                  className="hidden sm:ml-6 lg:block"
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
                            'animation_color rounded-md border-b  border-b-sky-400 px-2 py-1 text-lg font-medium text-sky-400 hover:border-white hover:bg-sky-400 hover:text-white '
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

          <Disclosure.Panel
            className=" lg:hidden"
            as={motion.div}
            initial="collapsed"
            animate={open ? 'open' : 'collapsed'}
            variants={{
              open: { height: 'auto' },
              collapsed: { height: 0 },
            }}
            transition={{ duration: 0.9 }}
          >
            <div className="-mt-24 flex h-screen flex-col items-center justify-center space-y-4  px-2 pb-3 text-center">
              {navigationForMobile.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className="animation_color block rounded-md  border-b border-sky-400 px-3 py-2  text-3xl font-bold uppercase text-sky-400 "
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
