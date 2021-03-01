import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaFile } from "react-icons/fa";
import dummyLogo from '../assets/dummyLogo.png'
import "../navbar.css";
const Navbar = () => {
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={dummyLogo} alt="logo" width="40%" height="40%" />
          <button className="nav-toggle">
            <FaBars />
          </button>
        </div>
        <div className="links-container show-container">
          <ul className="links">
            <li>
              <Link to="/">DASHBOARD</Link>
            </li>
            <li>
              <Link to="/employees">EMPLOYEES</Link>
            </li>
            <li>
              <Link to="/appointments">APPOINTMENTS</Link>
            </li>
            <li>
              <Link to="/calendar">CALENDAR</Link>
            </li>
            <li>
              <Link to="/messages">MESSAGES</Link>
            </li>
          </ul>
        </div>
        <ul className="social-icons">
          <li>
            <button type="button" className="btn" style={{marginRight:"15px"}}>
              MAKE AN APPOINTMENT
            </button>
          </li>
          <li>
            <Link to="/error"><FaFile /></Link>
              
            
          </li>
          <li>
            <Link to="/error"><FaFile /></Link>
              
            
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;