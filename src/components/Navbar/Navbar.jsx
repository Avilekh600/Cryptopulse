import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import arrow_icon from '../../assets/arrow_icon.png'


export default function Navbar() {
  return (
    <div className='navbar'>
        <img src={logo} alt="logo" className='logo' />
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Service</li>
          <li>Blog</li>
        </ul>
        <div className="nav-right">
          <select>
            <option value="usd">USD</option>
            <option value="npr">NPR</option>
            <option value="inr">INR</option>
          </select>
          <button>Signup <img src={arrow_icon} alt="icon" /></button>
        </div>
    </div>
  )
}
