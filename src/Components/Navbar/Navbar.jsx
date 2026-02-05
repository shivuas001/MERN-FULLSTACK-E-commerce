import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'

const Navbar = () => {

    const [menu, setMenu] = useState("shop");
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt="" />
            <p>SHOPPER</p>
        </div>
        <div className='nav-menu'>
            <li onClick={()=>{setMenu("shop")}}>Shop{menu === "shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("mens")}}>Mens{menu === "mens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("womens")}}>Womens{menu === "womens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}>Kids{menu === "kids"?<hr/>:<></>}</li>
        </div>
        <div className='nav-cart-icon'>
            <button>Login</button>
            <img src={cart_icon} alt="" />
            <div className="nav-cart-count">0</div>
        </div>
    </div>
  )
}

export default Navbar