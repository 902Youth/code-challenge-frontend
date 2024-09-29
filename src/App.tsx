import React, {useEffect} from 'react';
import { Routes, Route, useNavigate } from 'react-router';
import Home from './Home/Home';
import Dev from './Dev/Dev';
import './App.css';
import Nav from './Nav/Nav';
import Login from './Login/Login';
import { api } from './global.state';

const App: React.FC = () => {
  const navigate = useNavigate()
  function checkInactivity() {
    const fromLocalStorage = localStorage.getItem('loginTimestamp');
    const loginTimestamp = fromLocalStorage ? JSON.parse(fromLocalStorage) : null;
    if (!loginTimestamp) return;

    const now = Date.now();
    const maxInactivity = 60 * 60 * 1000; // 1 hour

    if (now - loginTimestamp > maxInactivity) {
      const savedData = localStorage.getItem('loggedInUser');
      const data = savedData ? JSON.parse(savedData) : null;
      fetch(`${api}/data/logOut`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: data?.user.id,
          username: data?.user.username,
          loggedIn: true
        })
      })
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Network response was not ok.');
          }
        })
        .then(data => {
          localStorage.removeItem('loginTimestamp');
          localStorage.removeItem("loggedInUser")
          navigate('/login');
        })
        .catch(error => console.error('Error:', error));
    }
  }

  function updateTimestamp() {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      localStorage.setItem('loginTimestamp', JSON.stringify(Date.now()));
    }
  }
  

  useEffect(() => {
    window.addEventListener('mousemove', updateTimestamp);
    window.addEventListener('keydown', updateTimestamp);
    window.addEventListener('click', updateTimestamp);
    window.addEventListener('scroll', updateTimestamp);

    const interval = setInterval(checkInactivity, 300000);

    return () => {
      window.removeEventListener('mousemove', updateTimestamp);
      window.removeEventListener('keydown', updateTimestamp);
      window.removeEventListener('click', updateTimestamp);
      window.removeEventListener('scroll', updateTimestamp);
      clearInterval(interval);
    };
  }, []);
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dev" element={<Dev />} />
      </Routes>
    </>
  );
};

export default App;
