import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/navbar/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Service from './Pages/Service'
import Menu from './Pages/Menu'
import Pages from './Pages/Pages'
import Contact from './Pages/Contact'
import Ourteam from './Pages/Ourteam'
import Testimonial from './Pages/Testimonial'
import Booking from './Pages/Booking'
import Footer from './Components/footer/Footer'
import ScrollTop from './Components/scrollTop/ScrollTop'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/service' element={<Service />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/pages' element={<Pages />} />
          <Route path='/ourteam' element={<Ourteam />} />
          <Route path='/testimonial' element={<Testimonial />} />
          <Route path='/booking' element={<Booking />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <ScrollTop />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
