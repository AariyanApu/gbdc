'use client';

import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import Image from 'next/image';

import { staggerContainer, textContainer, textVariant2 } from '@/utils/motion';
import { regularFont } from '@/utils/fonts';

const navigation = [
  { name: 'ABOUT US', href: '#', current: false },
  { name: 'ACTIVITIES', href: '#', current: false },
  { name: 'ACHIEVEMENTS', href: '#', current: false },
  { name: 'JOIN US', href: '#', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function NavBar() {
  return (
    <Disclosure as="nav" className="bg-violet-500 shadow-md">
      {({ open }) => (
        <>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={`lg:px-8" mx-auto max-w-7xl px-2 sm:px-6 ${regularFont.className}`}
          >
            <div className="relative flex h-16 items-center justify-between">
              {/* Mobile menu button */}
              <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-50 hover:bg-violet-600 hover:text-gray-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-violet-600">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              {/* Laptop Screen Start */}

              <div className="flex flex-1 items-center justify-center sm:items-stretch lg:justify-between">
                <div className="flex flex-shrink-0 items-center">
                  <Image
                    className=" h-6 w-auto lg:hidden"
                    src="/logo.png"
                    alt="Logo of GBDC"
                    width={40}
                    height={40}
                  />
                  <Image
                    className="hidden h-8 w-auto lg:block"
                    src="/logo.png"
                    alt="Logo of GBDC"
                    width={80}
                    height={80}
                  />
                  <div className="text-2xl text-gray-50">GBDC</div>
                </div>

                {/* Here Nav LINK */}

                <motion.div
                  variants={textContainer}
                  className="hidden sm:ml-6 lg:block"
                >
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <motion.a
                        variants={textVariant2}
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? 'bg-violet-500 text-gray-50'
                            : 'text-gray-50 hover:bg-violet-600 ',
                          'rounded-md px-3 py-2 text-sm font-medium',
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* NavLink for Mobile */}

          <Disclosure.Panel className="lg:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-violet-600 text-gray-50'
                      : 'text-gray-50 hover:bg-violet-600 ',
                    'block rounded-md px-3 py-2 text-base font-medium',
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
