import React from 'react'
import './Navbar.css'
import { assets } from './../../assets/assets';


const Navbar = () => {

 
  return (
    <div className='navbar'>
      
      <h1><span className="logo">Bite</span>Express</h1>
        <img src={assets.profile_image} alt="" className="profile" />
    </div>
  )
}

export default Navbar