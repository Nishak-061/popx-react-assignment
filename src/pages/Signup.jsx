import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import '../styles/Signup.css';

const Signup = () => {
  const navigate = useNavigate();
  const [agency, setAgency] = useState('yes');

  return (
    <div className='signup-page'>
      <div className='signup-container'>
        <h1>
          Create your <br />
          PopX account
        </h1>

        <div className='input-group'>
          <label>Full Name *</label>
          <input type='text' placeholder='Marry Doe' />
        </div>

        <div className='input-group'>
          <label>Phone number *</label>
          <input type='text' placeholder='Marry Doe' />
        </div>

        <div className='input-group'>
          <label>Email address*</label>
          <input type='email' placeholder='Marry Doe' />
        </div>

        <div className='input-group'>
          <label>Password *</label>
          <input type='password' placeholder='Marry Doe' />
        </div>

        <div className='input-group'>
          <label>Company name *</label>
          <input type='text' placeholder='Marry Doe' />
        </div>

        <div className='agency'>
          <p>
            Are you an Agency? *
          </p>

          <div className='radio-group'>
            <label>
              <input type='radio' value='yes' checked={agency === 'yes'} onChange={(e) => setAgency(e.target.value)} /> Yes
            </label>

            <label>
              <input type='radio' value='no' checked={agency === 'no'} onChange={(e) => setAgency(e.target.value)} /> No
            </label>
          </div>
        </div>

        <button className='create-account-btn' onClick={() => navigate('/profile')}> Create Account</button>

      </div>
    </div>
  )
}

export default Signup