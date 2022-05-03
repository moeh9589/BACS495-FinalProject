import React from 'react'
import './header.css'

function Header(props) {
  return (
    <div className='Header'>
      <h1 className='h1_'>{props.name}</h1>
    </div>
  )
}

export default Header