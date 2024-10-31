import Image from 'next/image'
import React from 'react'
import HeroImg from '/public/Rectangle 2.png'

const Hero = () => {
  return (
    <div className='relative flex items-center justify-center w-full px-[64px] max-w-[1240px] h-[500px]'>
      <Image src={HeroImg} className='absolute w-full h-full' alt='hero image' />
      <div></div>
    </div>
  )
}

export default Hero
