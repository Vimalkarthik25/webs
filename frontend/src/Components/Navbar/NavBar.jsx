import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <div className='navBar-header'>
      <h1>A Vaastu Property Solution</h1>
    <header className="navBar-header1">
      <Link to="/" className="logo">HOUSING logo</Link>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
      <ul className="menu">
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/properties">PROPERTIES</Link></li>
        <li><Link to="/constructions">CONSTRUCTIONS</Link></li>
        <li><Link to="/services">SERVICES</Link></li>
        {/* <li><Link to="/past-requirements">PAST REQUIREMENTS</Link></li> */}
        <li><Link to="/contactPage">CONTACT</Link></li>
      </ul>
    </header>
    </div>
  );
}

export default NavBar;
