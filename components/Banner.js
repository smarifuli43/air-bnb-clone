import React from 'react'
import Image from 'next/image'
import heroImage from '../image/hero.png'

const Banner = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[650px]">
      <Image src={heroImage} objectFit="cover" layout="fill" />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm font-medium sm:text-xl">
          Not sure where to go? Perfect.
        </p>
        <button className="my-3 rounded-full bg-white px-8 py-4 font-bold text-purple-500 shadow-md transition duration-200 hover:shadow-xl active:scale-90">
          I'm flexible
        </button>
      </div>
    </div>
  )
}

export default Banner
