import React, { useEffect } from 'react'
import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import {Outlet} from 'react-router-dom'


function App() {
  const [theme, setTheme] = useState('light')
  
  
  return (
    
    <>
    <Navbar theme={theme} setTheme={setTheme}/>
    <Outlet/>
    <Footer/>
    </>
     )
}

export default App
