import React from 'react'
import './Nav.css'
import {Link} from 'react-router-dom'
const Nav = () => {
  return (
    <nav className='navbar'>
       <span className='logo'>Pokedex</span>
        <ul>
            <li className='nav-links'><Link className='nav-links' to='/'>Login</Link></li>
            <li className='nav-links'><Link className='nav-links'  to='/register'>Register</Link></li>
            <li className='nav-links'><Link className='nav-links'  to='/home'>Pokemon</Link></li>
        </ul>
    </nav>
  )
}

export default Nav