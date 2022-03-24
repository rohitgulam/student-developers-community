import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import IconSection from '../components/IconSection';
import Benefits from '../components/Benefits';
import Footer from '../components/Footer';
import TopFooter from '../components/TopFooter';
import Testimonial from '../components/Testimonial';
import About from '../components/About';

function Home() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <IconSection/>
        <About/>
        <Benefits/>
        <Testimonial/>
        <TopFooter/>
        <Footer/>
    </div>
  )
}

export default Home