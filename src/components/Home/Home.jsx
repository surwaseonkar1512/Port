import React from 'react'

import Banner from '../Common/Banner';
import { Suspense } from 'react';
// import Footer from '../Common/Footer';
const Footer = React.lazy(()=> import ("../Common/Footer"))
const About = React.lazy(()=> import ("../About/About"))

const Home = () => {
  return (
    <div>
     <Banner/>
    
    <Suspense fallback={<div>Loading....</div>}>
    <About/>
     <Footer/>
    </Suspense>
   </div>
  )
}

export default Home
