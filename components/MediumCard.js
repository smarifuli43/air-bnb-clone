import Image from 'next/image'
import React from 'react'

const MediumCard = ({ img, title }) => {
  return (
    <div className="transform cursor-pointer transition duration-300 hover:scale-105">
      <div className="relative h-80 w-80">
        <Image src={img} layout="fill" className='rounded-xl'/>
      </div>
      <h3 className="mt-3 text-2xl">{title}</h3>
    </div>
  )
}

export default MediumCard
