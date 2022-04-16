import React from 'react'
import './header.css'
import RegisterBody from './registerbody'

function Header(props) {
  return (
    <div className='Header'>
      <h1>{props.name}</h1>
    </div>
  )
}

export default Header