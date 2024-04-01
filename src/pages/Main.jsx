// import React from 'react'
import Home from "../components/main/Home"
import Pricing from '../components/sub/Pricing'
import Communication from "../components/sub/Communication";
import Privacy from '../components/sub/Privacy';
import OrderLimit from '../components/sub/OrderLimit';
import OrderCancel from '../components/sub/OrderCancel';
import PrintingService from '../components/sub/PrintingService';
import Footer from '../components/main/Footer';
import Banner from '../components/main/Banner'
import About  from "../components/main/About";
import Procedure from "../components/main/Procedure";
const Main = () => {
  return (
    <div className='w-full h-screen'>
      
      <Banner/>
      <Procedure/>
      <About/>
      <Home/>
      <Pricing/>
      <Communication/>
      <Privacy />
      <OrderLimit/>
      <OrderCancel/>
      <PrintingService/>
      <Footer/>
    </div>
  )
}

export default Main
