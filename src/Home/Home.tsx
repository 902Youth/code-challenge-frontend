import React, { useState } from 'react';
import './home.css';
import { Link, useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [resume, setResume] = useState<unknown>(null);
  const [position, setPosition] = useState<string>('');
  const navigate = useNavigate();

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
      <p style={{ textAlign: 'center', color: 'white' }}>
        After filling out your basic information, you will be taken to an
        assessment. This assessment is not timed, and can be paused and saved at
        any time.
      </p>
      <div className="grid">
        <label
          style={{ gridColumn: '1/2', gridRow: '1/2', textAlign: 'right' }}
          htmlFor="name"
        >
          Your Name:
        </label>
        <input
          type="text"
          onChange={e => setName(e.target.value)}
          value={name}
        />

        <label
          htmlFor="email"
          style={{ gridColumn: '1/2', gridRow: '2/3', textAlign: 'right' }}
        >
          Your Email:
        </label>
        <input
          type="text"
          onChange={e => setEmail(e.target.value)}
          value={email}
        />

        <label
          htmlFor="resume"
          style={{ gridColumn: '1/2', gridRow: '3/4', textAlign: 'right' }}
        >
          Your Resume:
        </label>
        <input type="file" onChange={e => setResume(e.target.value)} />

        <label htmlFor="dropdown">Which position are you applying for?</label>
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
        <button className="continue" onClick={handleNavigate}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default Home;
