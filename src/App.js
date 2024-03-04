import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Header from './components/Common/Common/Header';
import Footer from './components/Common/Common/Footer';
import Home from './components/home/Home';
import About from './components/about/About';
import CourseHome from './components/allcourses/CourseHome';
import Team from './components/team/Team';
import News from './components/news/News';
import Books from './components/books/Books';
import Contact from './components/contact/Contact';
import Dashboard from './components/dashboard/Dashboard';
import LoginApp from './components/login/loginApp';
import UnauthorizedAccess from './components/unauthorizedAccess/unauthorizedAccess';
import Back from './components/Common/back/Back';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState('');
  // const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('userRole');

    if (token && role) {
      setLoggedIn(true);
      setUserRole(role);
    }
  }, []);

  // const isLoginPage = () => {
  //   return navigate.location.pathname === '/login' || navigate.location.pathname === '/register';
  // };

  return (
    <Router>
      <Header loggedIn={loggedIn} userRole={userRole} />
      {/* {!isLoginPage() && <Back />} */}
      <Back/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses/*" element={<CourseHome />} />
        <Route path="/team" element={<Team />} />
        <Route path="/news" element={<News />} />
        <Route path="/books" element={<Books />} />
        <Route path="/contact" element={<Contact />} />
        {loggedIn && userRole === 'admin' ? (
          <Route path="/dashboard" element={<Dashboard />} />
        ) : (
          <Route path="/dashboard" element={<UnauthorizedAccess />} />
        )}
        <Route path="/login" element={<LoginApp setLoggedIn={setLoggedIn} setUserRole={setUserRole} />} />
        {/* <Route path="/*" element={<UnauthorizedAccess />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
