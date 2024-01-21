import React from 'react'
import logo from '../assets/react-icon-small.png'


const Navbar = () => {
    return(
    <nav className="nav-bar">
        <div className="nav-left">
        <img src={logo} alt="React Logo."/>
        <h3>ReactFacts</h3>
        </div>
        <div className="nav-right">
        <h4>React Course - Project 1</h4>
        </div>
    </nav>
    )
}

export default Navbar