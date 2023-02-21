import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <div>
      <nav>
        <div className="nav-wrapper orange">
          <a href="/" className="brand-logo left logo_postion hide-on-small-only">Math Magicians</a>
          <a href="/" className="brand-logo left logo_postion hide-on-med-and-up"><i className="large material-icons ">home</i></a>
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
