import React from 'react'
import './header.css'
import RegisterBody from './registerbody'

function Header() {
  return (
    <div className='Header'>
      <div className='text'>
      <h1>Header</h1>

      
      <div className='buttons'>
      
      <RegisterBody/>
      </div>
      </div>
    </div>
  )
}

export default Header