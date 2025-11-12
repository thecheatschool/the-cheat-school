import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes,Route } from 'react-router-dom'
import AboutUs from './components/About Us/AboutUs'
import Events from './components/Events/Events'
import Gallery from './components/Gallery/Gallery'
import ContactUs from './components/Contact Us/ContactUs'
import Footer from './components/Footer/Footer'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<AboutUs/>}></Route>
        <Route path='/events' element={<Events/>}></Route>
        <Route path='/gallery' element={<Gallery/>}></Route>
        <Route path='/contact us' element={<ContactUs/>}></Route>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
