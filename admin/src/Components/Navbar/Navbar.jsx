import React from 'react'
import './Navbar.css'
import navlogo from '../../assets/nav-logo.svg'
import navProfile from '../../assets/nav-profile.svg'
import admin_logo from "../../assets/admin_logo.png"
import logo from "../../assets/logo.png"

const Navbar = () => {
  return (
    <div className='navbar'>

      <div className="nav-logo">
        <img src={logo} alt="" />
        <div className='para-section'>
        <p>Frozer</p>
        <p className='admin-panel-text'>Admin Panel</p>
        </div>
      </div>
      <img className='nav-profile' src={navProfile} alt="" />
    </div>
  )
}

export default Navbar