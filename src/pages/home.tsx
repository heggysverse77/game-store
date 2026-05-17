import React, { useState } from 'react'
import Navbar from '../components/nav'
import Hero_section from '../components/ui/hereo section'
import Games from '../components/games';
import Footer from '../components/footer';


function Home() {

  return (
    <>
    <Navbar />
    <Hero_section/>
    <Games/>
    <Footer/>
    </>
  )

}

export default Home