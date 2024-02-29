import React from 'react'
import {BrowserRouter, Routes,Route} from 'react-router-dom'

//Pages
import Home from '../pages/Home/Home'
import About from '../pages/About/About'
import Contact from '../pages/Contact/Contact'
import Portfolio from '../pages/Portfolio/Portfolio'

//Componants
import Nav from '../componants/Nav/Nav'
import Theme from '../componants/Theme/Theme'


const Router = () => {
  return (
   <BrowserRouter>
    <Nav />
    <Theme />
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/portfolio' element={<Portfolio />} />
        
    </Routes>
   </BrowserRouter>
  )
}

export default Router