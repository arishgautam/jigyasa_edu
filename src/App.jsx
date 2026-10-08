import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import OurTeam from './pages/OurTeam'
import Contact from './pages/Contact'


const App = () => {
  const [theme, setTheme] = useState('light')

  return (
    <div
      className={
        theme === 'dark'
          ? 'dark min-h-screen bg-gray-900 text-white'
          : 'min-h-screen bg-white text-gray-700'
      }
    >
      <Navbar theme={theme} setTheme={setTheme} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/contact" element={<Contact/>} />
              </Routes>

       <Footer />
    </div>
  )
}

export default App