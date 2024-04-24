import React, { useEffect } from 'react'
import '../Styles/DarkModeToggle.css'

const DarkModeToggle = ({ colorTheme, setColorTheme }) => {

  let mode = colorTheme

  let toggleTheme = () => {
    mode = mode === 'dark' ? 'light' : 'dark'
    setTheme(mode)
  }

  let setTheme = () => {
    setColorTheme(mode)
  }

  let checked = mode === 'dark' ? true : false


  return (
    <div className='theme-toggle'>
        <div><label className='theme-label'>{mode.charAt(0).toUpperCase() + mode.slice(1)}</label></div>
      <label className='switch'>
        <input type='checkbox' defaultChecked={checked} className='switch-input' onChange={(e) => {toggleTheme(e)}} />
        <span className="slider"></span>
      </label>
    </div>
  )
}

export default DarkModeToggle