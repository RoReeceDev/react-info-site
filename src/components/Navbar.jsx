import React from 'react'
import logo from '../assets/react-icon-small.png'


const Navbar = (props) => {
    return(
    <nav className={props.darkMode ? "dark": ""}>
        <div className="nav-left">
        <img src={logo} alt="React Logo."/>
        <h3>ReactFacts</h3>
        </div>
        <div className="nav-right">
        <div 
                className="toggler" 
            >
                <p className="toggler--light">Light</p>
                <div 
                    className="toggler--slider"
                    onClick={props.toggleDarkMode}
                >
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>
        </div>
    </nav>
    )
}

export default Navbar