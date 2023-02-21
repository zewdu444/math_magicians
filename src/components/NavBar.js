import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <div>
      <nav>
        <div className="nav-wrapper teal">
          <a href="/" className="brand-logo left logospace">Math Magicians</a>
          <ul id="nav-mobile" className="right">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/Calculator">calculator</NavLink></li>
            <li><NavLink to="/quotes">Quotes</NavLink></li>
          </ul>
        </div>
      </nav>

    </div>
  );
}

export default NavBar;
