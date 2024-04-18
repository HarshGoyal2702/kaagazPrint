// import React from 'react'
import Home from "../components/main/Home"
import Footer from '../components/main/Footer';
import Navbar from "../components/sub/Navbar";
import Loader from "../components/main/Loader";
const Main = () => {
  return (
    <div className='w-screen h-screen'>
      <Navbar />
      <Loader />
      <Home />
      <Footer />
    </div>
  )
}

export default Main
