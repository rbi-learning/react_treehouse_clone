import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <header>
    <span className='icn-logo'>
      <i className='material-icons'>code</i>
    </span>
    <ul className='main-nav'>
      <li>
        <NavLink exact to='/'>
          Homes
        </NavLink>
      </li>
      <li>
        <NavLink to='/about'>About</NavLink>
      </li>
      <li>
        <NavLink to='/teachers'>Teachers</NavLink>
      </li>
      <li>
        <NavLink to='/courses'>Courses</NavLink>
      </li>
    </ul>
  </header>
);

export default NavBar;
