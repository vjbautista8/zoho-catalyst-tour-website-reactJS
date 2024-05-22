import '../Navbar.css';

import React, { useState, useRef, useEffect } from 'react';
import { FaBars, FaTwitter } from 'react-icons/fa';
import { SiZoho } from 'react-icons/si';
import { links, social } from '../data';
import logo from '../logo.svg';

const Navbar = () => {
  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          {/* <img src={logo} alt='logo' className='logo' /> */}
          <p className='logo'>The CRM Carpenters</p>
          <button className='nav-toggle'>
            <FaBars />
          </button>
        </div>
        <div className='links-container show-container'>
          <ul className='social-icons'>
            <li>
              <a href='#'>home</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
