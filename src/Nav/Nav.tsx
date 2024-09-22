import React from 'react';
import logo from '../assets/902-logo_1_.png';
import { api } from '../global.state';
import './nav.css';
import { useNavigate } from 'react-router';

const Nav: React.FC = () => {
  let location = window.location.pathname
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  const handleLogOut = () => {
    fetch(`${api}/data/logOut`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id,
        username,
        loggedIn: true
      }),
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Network response was not ok.');
        }
      })
      .then(data => {
        console.log(data);
        navigate("/login");
      })
      .catch(error => console.error('Error:', error));
  }

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
      {location === '/' ? (
         <button className="button" onClick={handleLogin}>
        Log In
      </button>
      ) : (
        <button className='button' onClick={handleLogOut}>
          Log Out
        </button>
      )}
     
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
