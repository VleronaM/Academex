import './App.css';
import Header from './components/Common/Common/Header';
import Footer from './components/Common/Common/Footer';
import Head from './components/Common/Common/Head';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Axios from "axios";
import Home from "./components/home/Home";
import About from './components/about/About';
import CourseHome from './components/allcourses/CourseHome';
import Team from './components/team/Team';
import News from './components/news/News';
import Categories from './components/categories/Categories';
import Books from './components/books/Books';
import Contact from './components/contact/Contact';
import Dashboard from './components/dashboard/Dashboard';
import LoginApp from './components/login/loginApp';

const App = () => {
  const [data, setData] = useState("");

  const getData = async () => {
    const response = await Axios.get("http://localhost:3030/allData"); // Make an API request to your Express server
    setData(response.data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div>{data}</div>
      <Router>
        <HeaderWithCondition />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/courses" element={<CourseHome />} />
          <Route path="/team" element={<Team />} />
          <Route path="/news" element={<News />} />
          <Route path="/books" element={<Books />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<LoginApp />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

const HeaderWithCondition = () => {
  const location = useLocation();
  const showHeadOnly = location.pathname === '/login';

  return showHeadOnly ? <Head /> : <Header />;
};

export default App;
