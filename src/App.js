import './App.css';
import Header from './components/Common/Common/Header';
import Footer from './components/Common/Common/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { Component } from 'react';
import Home from "./components/home/Home"
import About from './components/about/About';
import CourseHome from './components/allcourses/CourseHome';
import Team from './components/team/Team';

function App() {
  return (
    /* <div className="App">
     </div>*/
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<CourseHome />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
