import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    // const [name, setName] =useState('')
    const [email, setEmail] =useState('')
    const [password, setPassword] =useState('')

    const submitHandle=(e)=>{
        e.preventDefault();
        // console.log()
    }
  return (
    <div className="Login">
        <h1>Login</h1>
        <form action="">
            {/* <label htmlFor="">Name</label>
            <input type="text" value={name} placeholder='enter name' onChange={(e)=>{e.target.value}}/> */}

            <label htmlFor="">Email</label>
            <input type="email" placeholder='email' value={email} onCanPlay={(e)=>{e.target.value}} />

            <label htmlFor="">password</label>
            <input type="text" placeholder='password' value={password} onChange={(e)=>{e.target.value}} />

            <button onClick={()=>{submitHandle()}} type='submit'>Login</button>
            <span>Don't have an Account?
              <Link to='/Signup'>Signup</Link></span>
        </form>
    </div>
  )
}

export default Login