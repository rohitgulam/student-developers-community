import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import IconSection from '../components/IconSection';
import Benefits from '../components/Benefits';

function Home() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <IconSection/>
        <Benefits/>
    </div>
  )
}

export default Home