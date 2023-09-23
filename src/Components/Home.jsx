import React from 'react'
import TheNavbar from './Navbar'
import Mainpage from './Mainpage'
import Dishes from './Dishes';
import About from './About';
import Contact from './Contact';

function Home() {
  return (
    <div>
        <TheNavbar/>
        <Mainpage/>
        <Dishes/>
        <About/>
        <Contact />
    </div>
  )
}
export default Home;