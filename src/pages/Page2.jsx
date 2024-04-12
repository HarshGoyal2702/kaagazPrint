import React from 'react'
import TBanner from '../components/Terms/TBanner'
import A_of_Terms from '../components/sub/A_of_Terms'
import ServicesOverview from '../components/sub/ServicesOverview'
import Eligibility from '../components/sub/Eligiblity'
import Communication from '../components/sub/Communication'
import Privacy from '../components/sub/Privacy'
import OrderLimit from '../components/sub/OrderLimit'
import OrderCancel from '../components/sub/OrderCancel'
import PrintingService from '../components/sub/PrintingService'
import License from '../components/sub/License'
import Navbar from '../components/sub/Navbar'
import T_U from "../components/sub/T_U"
import Footer from '../components/main/Footer'


const Page2 = () => {
  return (
    <div>
      <Navbar/>
      <TBanner/>
      <T_U/>
      <A_of_Terms/>
      <ServicesOverview/>
      <Eligibility/>
      <License/>
      <Communication/>
      <Privacy />
      <OrderLimit/>
      <OrderCancel/>
      <PrintingService/>
      {/* <Footer/> */}
    </div>
  )
}

export default Page2
