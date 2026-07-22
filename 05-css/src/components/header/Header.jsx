import React from 'react'
import styles from '../header/Header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>  
      <h2>Vighnesh</h2>
      <button className={styles.btn}>Login</button>
    </div>
  )
}

export default Header;