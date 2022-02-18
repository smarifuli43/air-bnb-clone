import React from 'react'
import Image from 'next/image'
// import logo from '../image/airbnb.svg'
import {
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  SearchIcon,
} from '@heroicons/react/solid'

const Header = () => {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white p-5 shadow-md md:px-10 ">
      {/* left */}
      <div className="relative my-auto flex h-10 cursor-pointer items-center ">
        <Image
          src="https://cdn.worldvectorlogo.com/logos/airbnb.svg"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      {/* Middle */}
      <div className=" flex items-center rounded-full  py-2 px-2 duration-300 hover:shadow-md md:border-2 md:shadow-sm">
        <input
          type="text"
          placeholder="Start your search"
          className="ps-3 flex-grow bg-transparent p-1 text-gray-600 placeholder-gray-400 outline-none"
        />
        <SearchIcon className="hidden h-8 w-8 cursor-pointer rounded-full bg-red-400 p-2 text-white md:mx-2 md:inline-flex" />
      </div>
      {/* Right */}
      <div className=" flex items-center justify-end space-x-4 text-gray-500">
        <p className='hidden md:inline cursor-pointer'>Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex items-center space-x-2 rounded-full border-2 p-2">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  )
}

export default Header
