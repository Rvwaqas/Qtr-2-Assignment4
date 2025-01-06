import React from 'react'
import Homepage from './components/Homepage'
import Hero from './components/Hero'
import NewArrival from './components/NewArrival'
import Browsestyle from './components/Browsestyle'
const Home = () => {
  return (
    <div className="w-[100%] h-screen bg-white">
  <Homepage/>
  <Hero/>
  <NewArrival/>
<Browsestyle/>


    </div>
  )
}

export default Home
