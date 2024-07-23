import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../../img/tmdb_logo.png'

const Header = () => (
  <div className="rmdb-header">
    <div className="rmdb-header-content">
      <Link to="/">
        <img className="rmdb-logo" src={"/images/reactMovie_logo.png"} alt="rmdb-logo" />
      </Link>
      <img className="rmdb-tmdb-logo" src={logo} alt="tmdb-logo" />
    </div>
  </div>
)

export default Header;