import React from 'react'
import logo from '../images/logo.svg'
import {  socialLink } from '../data';
import PageLinks from './PageLinks';
import SocialMedia from './SocialMedia';
const Navbar = () => {
  return (
     <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
            <button type="button" className="nav-toggle" id="nav-toggle">
              <i className="fas fa-bars"></i>
            </button>
          </div>
                <PageLinks parentClass='nav-links' itemClass='nav-link' />
        <ul className="nav-icons">
          {socialLink.map((fav) => {
          
            return <SocialMedia key={fav.id} {...fav} itemClass='nav-icon'/>
        
            
          })}
       
         
        </ul>
        
        </div>
      </nav>
  )
}

export default Navbar
