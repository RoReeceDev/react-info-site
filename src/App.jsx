import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Main from './components/Main.jsx'
import './App.css'


const App = () => {
const [ darkMode, setDarkMode ] = useState(false)

const toggleDarkMode = () =>{
  console.log("prevDark", darkMode)
  setDarkMode(prevState => !prevState)
}  

console.log(darkMode)

return(
    <div className="container">
    <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    <Main darkMode={darkMode} />
    </div>
  )
}

export default App