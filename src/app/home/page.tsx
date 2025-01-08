import React from 'react'
import Navbar from '../components/navbar'
import Hero from '../components/hero'
import Vacation from '../components/vacation'
import Inspiration from '../components/inspiration'

const HomePage = () => {
  return (
    <div className='relative px-[64px]'>
      <Navbar />
      <Hero />
      <Vacation />
      <Inspiration />
    </div>
  )
}

export default HomePage
