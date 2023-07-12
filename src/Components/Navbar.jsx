import React from 'react'

export default function Navbar() {
  return (
    <section className='Navbar'>
    <div className='logo'>
  <h1>GERICHT</h1>
    </div>
    <div className='navbaritems'>
   <ul>
    <li>Home</li>
    <li>Pages</li>
    <li>Contact Us</li>
    <li>Blog</li>
    <li>Landing</li>
</ul>
    </div>
    <div className='registerlinks'>
        <p>Log In / Registration</p>
         <p>|</p>
         <p>Book Table</p>
    </div>
    </section>
  )
}
