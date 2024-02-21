import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Common/Common/Header';
import Footer from './components/Common/Common/Footer';
import Home from "./components/home/Home";
import About from './components/about/About';
import CourseHome from './components/allcourses/CourseHome';
import Team from './components/team/Team';
import News from './components/news/News';
import Books from './components/books/Books';
import Contact from './components/contact/Contact';
import Dashboard from './components/dashboard/Dashboard';
import LoginApp from './components/login/loginApp';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('userRole');

    if (token && role) {
      setLoggedIn(true);
      setUserRole(role);
    }
  }, []);

  return (
    <Router>
      <Header loggedIn={loggedIn} userRole={userRole} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses/*" element={<CourseHome />} />
        <Route path="/team" element={<Team />} />
        <Route path="/news" element={<News />} />
        <Route path="/books" element={<Books />} />
        <Route path="/contact" element={<Contact />} />
        {loggedIn && userRole === 'admin' && <Route path="/dashboard" element={<Dashboard />} />}
        <Route path="/login" element={<LoginApp setLoggedIn={setLoggedIn} setUserRole={setUserRole} />} />
        {/* Add a catch-all route for unauthorized access */}
        {/* <Route path="/*" element={<UnauthorizedAccess />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
