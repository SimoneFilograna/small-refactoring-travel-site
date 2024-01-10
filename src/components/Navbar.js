import React from 'react'
import logo from '../images/logo.svg';
import { navLink, navIcon } from '../data';

const Navbar = () => {
  return (
    <>
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <ul className="nav-links" id="nav-links">
          
          {/* mapping data list */}
          {navLink.map( (link) => {
            const {id, href, text} = link
            return (
              <li key={id}>
                <a href={href} className="nav-link"> {text} </a>
              </li>           
            )
          })}


        </ul>

        <ul className="nav-icons">

          {/* mapping icons */}

          {navIcon.map((el) => {
            const {id, href, icon} = el;
            return (
              <li key={id}>
                <a href={href} target="_blank" rel='noreferrer' className="nav-icon">
                  <i className={icon}></i>
                </a>
              </li>
              )
          })}
          
        </ul>
      </div>
    </nav>
    </>
  )
}

export default Navbar