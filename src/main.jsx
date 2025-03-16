import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, BrowserRouter, Router, RouterProvider, createRoutesFromElements, Route} from 'react-router-dom'
import Hero from './components/Hero.jsx'
import Courses from './Pages/Courses.jsx'
import Login from './Pages/Login.jsx'
import Signup from './Pages/Signup.jsx'
import About from './Pages/About.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Hero/>}/>
      <Route path='Courses' element={<Courses/>}/>
      <Route path='Login' element={<Login/>}/>
      <Route path='Signup' element={<Signup/>}/>
      <Route path='About' element={<About/>}/>


    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
