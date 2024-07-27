/* eslint-disable no-unused-vars */
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HeroSection from './components/HeroSection';
import Course from './components/pages/course/Course';
import Masterclass from './components/pages/Masterclass/Masterclass';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hirefromus from './components/pages/Hirefromus/Hirefromus';
import About from './components/pages/About/About';
import Pricing from './components/pages/pricing/Pricing';

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/course" element={<Course />} />
          <Route path="/masterclass" element={<Masterclass />} />
          <Route path="/Hire" element={<Hirefromus />} />
          <Route path="/Aboutus" element={<About />} />
          <Route path='/pricing' element={<Pricing/>}/>
        </Routes>
      <Footer />
      </BrowserRouter>

    </>
  )
}

export default App
