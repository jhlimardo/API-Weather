import React from 'react';
import Logo from '../img/sun.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';
import { Link } from 'react-router-dom';


/*function Nav({onSearch}) {
  return (
    <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand">
          <img id="logoHenry" src={Logo} width="30" height="30" className="d-inline-block align-top" alt="" />
          Henry - Weather App
        </span>
        <SearchBar
          onSearch={onSearch}
        />
    </nav>
  );
};*/

function Nav({onSearch}) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <Link to='/'>
        <span className="navbar-brand">
          <img id="logoHenry" src={Logo} width="30" height="30" className="d-inline-block align-top" alt="" />
          Weather App
        </span>
      </Link>
      <Link to='/about'>
        <span className="navbar-brand">About</span>
      </Link>
        <SearchBar
          onSearch={onSearch}
        />
    </nav>
  );
};

export default Nav;
