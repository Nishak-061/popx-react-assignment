import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Login.css';

const Login = () => { 
  const navigate = useNavigate();
  return (
    <div className='login-page'>
      <div className='login-container'>
        <h1>
          Signin to your <br/>
          PopX account
        </h1>

        <p>
          Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit.
        </p>

        <div className='input-group'>
          <label>Email Address</label> 

          <input type='email' placeholder='Enter email address' />
        </div>

        <div className='input-group'>
          <label>Password</label>

          <input type='password' placeholder='Enter password' />
        </div>

        <button className='login-btn' onClick={() => navigate('/profile')}>Login</button>
      </div>
    </div>
  )
}

export default Login