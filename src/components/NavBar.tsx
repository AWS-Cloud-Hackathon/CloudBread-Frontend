import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar: React.FC = () => {
  return (
    <div className="navbar">
      <div className="nav-item">
        <Link to="/">Dashboard</Link>
      </div>
      <div className="nav-item">
        <Link to="/map">Map View</Link>
      </div>
      <div className="nav-item">
        <Link to="/event-log">Event Log</Link>
      </div>
      <div className="nav-item">
        <Link to="/settings">Settings</Link>
      </div>
    </div>
  );
};

export default NavBar;
