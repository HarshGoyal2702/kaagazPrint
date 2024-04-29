import React from 'react'
import About from './About'
import Banner from './Banner'
import Procedure from './Procedure'
import Process from './Process'
import Seal from './Seal'
const Home = () => {
  return (
    <div>
      <Banner/>
      <Procedure/>
      <Process />
      <About/>
      {/* <Seal/> */}
    </div>
  )
}

export default Home
