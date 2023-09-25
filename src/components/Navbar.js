import React from 'react';
import logo from '../logo.svg';
import "../Navbar.css";
function Navbar(){
    return(
        <div>
            <nav className='nav'>
                <img src={logo} className="app-logo" alt="logo"/>
                <h3 className='h3'>ReactFacts</h3>
                <h4 className='h4'>React Course - Project 1</h4>
            </nav>
        </div>
    )
}

export default Navbar;