import React, { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'

const Button = () => {

    const [theme,setTheme] = useContext(ThemeDataContext)

    const changeTheme = () => {
        // console.log(theme)
        setTheme(theme ==="light"?"dark":"light")
    }

    return (
        <div>
            <button onClick={changeTheme}>Change Button</button>
        </div>
    )
}

export default Button