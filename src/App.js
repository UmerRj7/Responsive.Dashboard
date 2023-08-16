import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/home';
// import Navbar from './components/Navbar';
// import HeroSection from './components/pages/HeroSection';

function App() {
  return (
    <>
      <Router>
      <Header /> 
        <Routes>
          <Route path="/" exact element= {<Home />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App