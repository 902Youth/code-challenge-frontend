import React from 'react';
import logo from '../assets/902-logo_1_.png';
import './nav.css';

const Nav: React.FC = () => {
  return (
    <div className="navContainer">
      <img
        src={logo}
        alt="902 Youth Logo"
        style={{
          height: '5rem',
          width: '5rem',
          position: 'absolute',
          top: 0,
          left: 5
        }}
      />
      <button className="button">Log In</button>
      <button
        className="button"
        style={{ marginLeft: '3rem', marginRight: '1rem' }}
      >
        Save Progress
      </button>
    </div>
  );
};

export default Nav;
