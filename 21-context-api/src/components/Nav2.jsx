import React, { useContext ,useState} from 'react'
import {ThemeDataContext} from '../context/ThemeContext.jsx'

const Nav2 = () => {
  
  // -------------writenin-destructing-method-----
  const [theme,setTheme] = useContext(ThemeDataContext)
  // console.log(theme)

  return (
    <div className='nav2'>
      <h4>Home</h4>
      <h4>About</h4>
      <h4>Contact</h4>
      <h4>Services</h4>
      <h4>{theme}</h4>
    </div>
  )
}

export default Nav2
