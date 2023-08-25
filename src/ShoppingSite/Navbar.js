import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <Link to='/'>HOME</Link>
      <Link to='/login'>LOGIN</Link>
      <Link to='/About'>ABOUT</Link>
   

    </div>
  )
}

export default Navbar
