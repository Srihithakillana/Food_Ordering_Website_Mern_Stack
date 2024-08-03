import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
        <div className="footer-content-left">
            <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*"/>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis veritatis quos ducimus beatae, iure itaque tempore corporis, quibusdam et corrupti hic debitis ea voluptas. Minima corporis illo quas velit voluptates?</p>
        <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" /><img src={assets.twitter_icon} alt="" /><img src={assets.linkedin_icon} alt="" />
        </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+3-543-435</li>
                <li>contact@zomato.com</li>
            </ul>
        </div>
    
        </div>
    <hr />
    <p className='footer-copyright'>
        Copyright 2024 &copy; Zomato.com - All Right Reserved.
    </p>
    </div>
  )
}

export default Footer