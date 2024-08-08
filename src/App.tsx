import React from 'react'
import { Routes, Route } from 'react-router'
import Home from './Home/Home'
import './App.css'

const App: React.FC = () => {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  )
}

export default App
