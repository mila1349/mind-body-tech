import React from 'react'
import Hero from './Hero'
import './style.scss'
import Process from './Process'
import Platform from './Platform'
import Review from './Review'
import Portfolio from './Portfolio'
import Services from './Services'

function Home() {
  return (
    <div>
        <Hero />
        <Services/>
        <Process />
        <Platform />
        <Review />
        <Portfolio />
    </div>
  )
}

export default Home