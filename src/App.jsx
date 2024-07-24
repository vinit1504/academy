/* eslint-disable no-unused-vars */
import React from 'react'
<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HeroSection from './components/HeroSection';
import Course from './components/pages/course/Course';
import Masterclass from './components/pages/Masterclass/Masterclass';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hirefromus from './components/pages/Hirefromus/Hirefromus';
import About from './components/pages/About/About';

const App = () => {
  return (
    // <>
    //   <HeroSection />
    // </>
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/course" element={<Course />} />
          <Route path="/masterclass" element={<Masterclass />} />
          <Route path="/Hire" element={<Hirefromus />} />
          <Route path="/Aboutus" element={<About />} />
        </Routes>
      <Footer />
      </BrowserRouter>

    </>
=======
// import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';

const App = () => {
  return (
    <div>
      <HeroSection />
    </div>
>>>>>>> 5033de5fc5afca103ca2528b3c6decd6c4303508
  )
}

export default App
