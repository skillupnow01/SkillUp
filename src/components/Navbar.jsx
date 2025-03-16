import React, { useState } from 'react'
import Logo from '../assets/skill.png'
import search from '../assets/search.png'
import night from '../assets/night.png'
import day from '../assets/day.png'
import menu from '../assets/menu.png'
import cross from '../assets/close.png'
import {Link} from 'react-router-dom'


const Navbar = ({theme , setTheme}) => {
const [change , setChange] = useState('true')
const [isMenuOpen, setIsMenuOpen] = useState('open');

   
    const toggle = () => {
        // isMenuOpen == 'open' ? setIsMenuOpen('close'): setIsMenuOpen('open');  
        // console.log(isMenuOpen) 
        theme == 'light' ? setTheme('dark') : setTheme('light');
        console.log(theme)
    }
    const change_icon=()=>{
        change == 'true' ? setChange('false') : setChange('true')
    }

  return (
    <>
    <header theme={theme == 'light' ? 'dark' :'light'}>
        <div className="container">
            <img src={Logo} alt="Logo" />
            <h3>SkillUP<br/><span>Now</span></h3>
        </div>
        <div className="input">
           <img src={search} alt="" /> 
           <input type="text" placeholder='search' />
        </div>
        <div className="items">
            <ul>
                <Link to=''><li>Home</li></Link>
                 <Link to='/Courses'><li>Courses</li></Link>
                 <Link to='/About'><li>About</li></Link>
                {/* <button onClick={()=>{toggle()}}><img src={theme == 'light' ? day : night} alt="" /></button> */}
            </ul>
        </div>
        <div className={`items item-mobileview`}>
            <ul className={`${theme == 'light' ? 'dark' : 'light'}`}>
                <Link to=''><li>Home</li></Link>
                 <Link to='/About'><li>Courses</li></Link>
                 <Link to='/Contact'><li>Courses</li></Link>
                <button onClick={()=>{toggle()}}><img src={theme == 'light' ? day : night} alt="" /></button>
            </ul>
        </div>
        
        <div className="buttonlogin">
            <Link to='/Login'><button className='loginbtn'><h3>Login/Signup</h3></button></Link>
            
        </div>
        <div className='menu' onClick={()=>{change_icon()}} >
            <img src={change == 'true' ? menu : cross} alt="" />
        </div>
    </header>
    </>
  )
}

export default Navbar