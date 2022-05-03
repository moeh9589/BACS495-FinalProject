import React from 'react'
import './header.css'
import RegisterBody from './registerbody'
import burger from './burger.png'

function Header(props) {
  return (
    <div className='Header'>
      {/* <img src={burger} height = "5vw" width= "5vw"/> */}
      <h1 className='h1_'>{props.name}</h1>
    </div>
  )
}

export default Header