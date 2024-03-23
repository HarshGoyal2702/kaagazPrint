import React from 'react'
import Navbar from "../sub/Navbar"
import Hero from "../sub/Hero"
import T_U from '../sub/T_U'
import A_of_Terms from '../sub/A_of_Terms'
import ServicesOverview from '../sub/ServicesOverview'
import Eligibility from '../sub/Eligiblity'
import Licence from '../sub/License'
import Pricing from '../sub/Pricing'
const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <T_U/>
      <A_of_Terms/>
      <ServicesOverview/>
      <Eligibility/>
      <Licence/>
    </div>
  )
}

export default Home
