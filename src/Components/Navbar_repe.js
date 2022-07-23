import React, { useState } from 'react';
import logo from '../images/logo.png';

function NavBar() {

    const [nav,setNav] = useState(false);

    const changeBackground = () =>{
        if(window.scrollY >= 50){
            setNav(true);
        }
        else{
            setNav(false);
        }
    }
    window.addEventListener("scroll",changeBackground);

    return(
        <nav className={nav ? 'nav active' : 'nav'}>
            <a href='#' className='logo'>
                <img src={logo} alt='' />
            </a>
            <input type='checkbox' className='menu-btn' id='menu-btn'/>
            <label className='menu-icon' for='menu-btn'>
                <span className='nav-icon'></span>
            </label>
            <ul className='menu'>
                <li><a href='/' className='active'>Home</a></li>
                <li><a href='#'>Portfolio</a></li>
                <li><a href='#'>Trends</a></li>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Blog</a></li>
            </ul>
            <input type='checkbox' className='menu-btn' id='menu-btn'/>
            <ul className='menu-Log'>
                <li><a href='/register' className='active'>Register</a></li>
            </ul>
        </nav>
    )
}
export default NavBar;