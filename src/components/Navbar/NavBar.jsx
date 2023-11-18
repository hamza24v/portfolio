import React from 'react'
import './Navbar.css'
function NavBar() {
  
  return (
    <nav className='navbar'>
      <ul className='nav-list'>
        {['Home','Work Experience', 'Projects', 'Skills','Testimonials', 'Contact'].map((item, idx) => (
          <li className='nav-item' key={idx}>
          <a className='nav-link' href={`#${item}`}>{item}</a>
        </li>
        ))}
        </ul>
    </nav>
  )
}

export default NavBar