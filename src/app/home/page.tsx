import React from 'react'
import Navbar from '../components/navbar'
import Hero from '../components/hero'
import Vacation from '../components/vacation'
import Inspiration from '../components/inspiration'
import Hotels from '../components/hotel'
import Download from '../components/download'
import Footer from '../components/footer'

const HomePage = () => {
  return (
    <div className='relative px-[64px]'>
      <Navbar />
      <Hero />
      <Vacation />
      <Inspiration />
      <Hotels/> 
      <Download />
      <Footer />
    </div>
  )
}

export default HomePage
