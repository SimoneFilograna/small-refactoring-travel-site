import React from 'react';
import { navLink, navIcon } from '../data';

const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        
        {/* itering navlink */}
        {
          navLink.map( link => {
            return (
              <li key={link.id}>
                <a href={link.href} className="footer-link">{link.text}</a>
              </li>
            )
          })
        }
      </ul>

      <ul className="footer-icons">

          {/* itering footer icon */}

          {
            navIcon.map(el => {
              return( 
                <li key={el.id}>
                  <a href={el.href} target="_blank" rel='noreferrer' className="footer-icon">
                    <i className={el.icon}></i>
                  </a>
                </li>
              )
            })
          }
        
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
  )
}

export default Footer