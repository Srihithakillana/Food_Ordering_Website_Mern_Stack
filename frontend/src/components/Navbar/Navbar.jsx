import React, { useContext, useState } from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'
import {Link, useNavigate} from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
export const Navbar = ({setShowLogin}) => {
  
    const[menu,setMenu]=useState("home");
    const {getTotalCartAmount,token,setToken}=useContext(StoreContext);
    const navigate=useNavigate();
    const logout=()=>{
      localStorage.removeItem("token");
      setToken("");
      navigate("/");
    }

  return (
    <div className='navbar'>
        <Link to='/'><img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*" alt="" className='logo'/></Link>
        <ul className='navbar-menu'>
            <Link onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>home</Link>
            <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>menu</a>
            <a href='#app-download' onClick={()=>setMenu("mobile-app")}className={menu==="mobile-app"?"active":""}>mobile-app</a>
            <a href='#footer' onClick={()=>setMenu("contact us")}className={menu==="contact us"?"active":""}>contact us</a>
        </ul>
        <div className="navbar-right"> 
            <img src={assets.search_icon} alt="" />
            <div className="navbar-search-icon">
              <Link to='/cart'><img src={assets.basket_icon} alt="" className="" /></Link>
                <div className={getTotalCartAmount()===0?"":"dot"}>

                </div>
            </div>
            {!token?  <button onClick={()=>setShowLogin(true)}>Sign in</button>:
            <div className='navbar-profile'>
              <img src={assets.profile_icon}/>
              <ul className='nav-profile-dropdown'>
              <li onClick={()=>navigate("/myorders")}>
                <img src={assets.bag_icon} alt="" className="" />
                <p>Orders</p>
              </li>
              <hr/>
              <li onClick={logout}>
              <img src={assets.logout_icon} alt="" className="" />
              <p>Logout</p>
              </li>
              </ul>
              </div>
              }
          
        </div>
    </div>
  )
}