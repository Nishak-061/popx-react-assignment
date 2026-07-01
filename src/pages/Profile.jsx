import React from 'react'
import Avatar from '../assets/Ellipse 114@2x.png';
import {FaCamera } from 'react-icons/fa'
import '../styles/Profile.css'

const Profile = () => {

  return (
    <div className='profile-page'>
      <div className='account-header'>
        <h3>Account Setting</h3>
      </div>

      <div className='profile-info'>
        <div className='avatar-wrapper'>
          <img src={Avatar} alt='profile' className='avatar'/>
          
          <div className='camera-icon'>
            <FaCamera/>
          </div>
        </div>
        <div className='user-details'>
          <h4>Marry Doe</h4>
          <p>marrydoe@gmail.com</p>
        </div>
      </div>

      <div className='profile-description'>
        <p>
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam 
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam 
          Erat, Sed Diam
        </p>
      </div>

      <div className='divider'></div>
      <div className='bottom-divider'></div>
    </div>
  )
}

export default Profile