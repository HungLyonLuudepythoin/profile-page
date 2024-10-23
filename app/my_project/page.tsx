import React from 'react'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
import Footer from '../components/Footer'

export default async function page() {
  return(
    <div>
    <Navbar/>
    <Projects/>
    <Footer />
  </div>
  )

}