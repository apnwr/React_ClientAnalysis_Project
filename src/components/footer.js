import React from "react";
import { Link } from 'react-router-dom';

import "../footer.css";
const FootBar = () => {
    
  return (
    <div className="foot-nav">
      <div className="div-center">
        <div className="div-header">
          <h6>&copy;2021@xyz.All Rights Reserved</h6>
        </div>
        <div className="foot-container show-foot-container">
          <ul className="footlinks">
            <li>
              <Link to="/error">
                <h6>LEGAL ISSUES</h6>
              </Link>
            </li>
            <li>
              <Link to="/error">
                <h6>CAREERS</h6>
              </Link>
            </li>
            <li>
              <Link to="/error">
                <h6>REVIEWS</h6>
              </Link>
            </li>
            <li>
              <Link to="/error">
                <h6>ABOUT</h6>
              </Link>
            </li>
            <li>
              <Link to="/error">
                <h6>BLOG</h6>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FootBar;
