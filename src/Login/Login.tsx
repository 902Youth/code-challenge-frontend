import React, { useState, useEffect } from 'react';
import './login.css';
import { api } from '../global.state';
import { useNavigate } from 'react-router';

const Login: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [input, setInput] = useState('');
  const navigate = useNavigate()

  useEffect(() => {
    fetch(`${api}/user/findAll`, {
      method: 'GET'
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));
  }, [])

  const handleOnClick = () => {
    if (firstName.length > 0 && lastName.length > 0 && input.length > 0) {
      fetch(`${api}/user/findUserAndValidate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName,
          lastName,
          input,
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
          navigate("/dev");
        })
        .catch(error => console.error('Error:', error));
    }
  };
  
  return (
    <div className="container">
      <h1 style={{ color: 'white' }}>Welcome Back!</h1>
      <div className="gridTwo">
        <label
          style={{
            gridColumn: '1/2',
            gridRow: '1/2',
            textAlign: 'center',
            width: '15rem',
            paddingTop: '2%'
          }}
          htmlFor="firstName"
        >
          First Name:
        </label>
        <input
          className="inputStyles"
          type="text"
          onChange={e => setFirstName(e.target.value)}
          value={firstName}
        />

        <label
          style={{
            gridColumn: '1/2',
            gridRow: '2/3',
            textAlign: 'center',
            width: '15rem',
            paddingTop: '2%'
          }}
          htmlFor="lastName"
        >
          Last Name:
        </label>
        <input
          className="inputStyles"
          type="text"
          onChange={e => setLastName(e.target.value)}
          value={lastName}
        />

        <label
          htmlFor="email"
          style={{
            gridColumn: '1/2',
            gridRow: '3/4',
            textAlign: 'center',
            width: '15rem',
            paddingTop: '2%'
          }}
        >
          Your Email:
        </label>
        <input
          className="inputStyles"
          type="text"
          onChange={e => setInput(e.target.value)}
          value={input}
        />

        <div className="buttonContainerTwo">
          <button className="login" onClick={handleOnClick}>
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
