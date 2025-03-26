import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, BrowserRouter, Router, RouterProvider, useNavigate, createRoutesFromElements, Route, Link} from 'react-router-dom'
import Hero from './components/Hero.jsx'
import Courses from './Pages/Courses.jsx'

import About from './Pages/About.jsx'
import LoginForm from './Pages/LoginForm.jsx'
import SignUpForm from './Pages/SignUpForm.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Hero/>}/>
      <Route path='Courses' element={<Courses/>}/>
      <Route path='Login' element={<LoginForm />}/>
      <Route path='SignUp' element={<SignUpForm />}/>
      <Route path='Contact' element={<LoginForm />}/>
      <Route path='About' element={<About/>}/>
      
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
