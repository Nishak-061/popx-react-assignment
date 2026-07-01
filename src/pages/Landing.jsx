import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Landing.css'

const Landing = () => {
    const navigate = useNavigate();
  return (
        <div className='landing-page'>
        <div className='landing-content'>
            <div>
                <h1>Welcome to PopX</h1>
                <p>
                    Lorem, ipsum dolor sit amet,
                    consectetur adipisicing elit,
                </p>
            </div>

            <div className='buttons'>
                <button className='create-btn' onClick={() => navigate('/signup')}>
                    Create Account
                </button>

                <button className='login-btn' onClick={() => navigate('/login')}>
                    Already Registered? Login
                </button>
            </div>
        </div>
    </div>
  )
}

export default Landing