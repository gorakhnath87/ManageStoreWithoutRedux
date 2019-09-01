import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navigation.css';

const Navigation = props => {
  return (
    <header className="main-header">
      <nav>
        <ul>
          <li>
            <NavLink to="/" exact>List of Employee</NavLink>
          </li>
          <li>
            <NavLink to="/favorites">Favorites Employee</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
