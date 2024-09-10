import React from 'react'
import { Routes, Route } from 'react-router'
import Home from './Home/Home'
import Dev from './Dev/Dev'
import './App.css'

const App: React.FC = () => {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dev' element={<Dev />} />
      </Routes>
    </>
  )
}

export default App
