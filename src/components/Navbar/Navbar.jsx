import React, { useContext } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import arrow_icon from '../../assets/arrow_icon.png'
import { CoinContext } from '../../context/CoinContext'


export default function Navbar() {

    const {setCurrency} = useContext(CoinContext)

    const currencyHandler = (event) =>{
          switch (event.target.value){
            case "usd" : {
              setCurrency({ name : "usd", symbol : "$" });
              break;
            }
            case "aud" : {
              setCurrency({ name : "aud", symbol : "$" });
              break;
            }
            case "inr" : {
              setCurrency({ name : "inr", symbol : "Rs." });
              break;
            }
            default : {
              setCurrency({ name : "usd", symbol : "$" });
              break;
            }
          }
    }

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
          <select onChange={currencyHandler}>
            <option value="usd">USD</option>
            <option value="aud">AUD</option>
            <option value="inr">NPR</option>
          </select>
          <button>Signup <img src={arrow_icon} alt="icon" /></button>
        </div>
    </div>
  )
}
