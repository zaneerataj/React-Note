import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <Link to='/'>Demo</Link>
        <Link to='/Conditional'>Conditional</Link>
    </nav>
  )
}

export default Navbar