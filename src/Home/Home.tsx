import React, { useState } from 'react';
import './home.css';
import { Link, useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [position, setPosition] = useState<string>('');
  const navigate = useNavigate();

  const backendEndpoint = "https://code-challenge-backend.onrender.com"

  const handleNavigate = () => {
    navigate('/dev', { state: { position: position } });
  };

  return (
    <div className="container">
      <h3 style={{ color: 'white' }}>
        Welcome, thank you for your interest in working with 902 Youth's
        Development Department.
      </h3>
      <h4 style={{ color: 'white' }}>Please begin the application below!</h4>
      <p style={{ textAlign: 'center', color: 'white', marginBottom: '2rem' }}>
        After filling out your basic information, you will be taken to an
        assessment. This assessment is not timed, and can be paused and saved at
        any time.
      </p>
      <div className="grid">
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
          onChange={e => setEmail(e.target.value)}
          value={email}
        />

        <label htmlFor="dropdown" style={{ fontSize: '14px' }}>
          Which position are you applying for?
        </label>
        <form action="select">
          <select
            name="positions"
            id="positions"
            onChange={e => setPosition(e.target.value)}
            value={position}
          >
            <option value="choose">Choose one...</option>
            <option value="fe-web">Frontend Web Developer</option>
            <option value="fe-app">Frontend App Developer</option>
            <option value="be-web">Backend Web Developer</option>
            <option value="be-app">Backend App Developer</option>
            <option value="full-web">Full Stack Web Developer</option>
            <option value="full-app">Full Stack App Developer</option>
            <option value="game-dev">Game Developer</option>
          </select>
        </form>
        <div className="buttonContainer">
          <button className="continue" onClick={handleNavigate}>
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
