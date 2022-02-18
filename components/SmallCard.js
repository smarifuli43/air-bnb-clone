import Image from 'next/image'
import React from 'react'

const SmallCard = ({ img, location, distance }) => {
  return (
    <div className=" m-2 flex cursor-pointer items-center space-x-4 rounded-xl transition transform ease-out duration-200 hover:scale-105 hover:bg-gray-100 ">
      <div className="relative h-16 w-16">
        <Image src={img} layout="fill" className="rounded-lg" />
      </div>
      <div className=" ">
        <h2>{location}</h2>
        <h3 className='text-gray-500'>{distance}</h3>
      </div>
    </div>
  )
}

export default SmallCard
