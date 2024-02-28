import React, { useState } from "react";
import Head from "./Head";
import "./style/header.css";
import { Link } from "react-router-dom";

const Header = ({ loggedIn, userRole, setLoggedIn, setUserRole }) => {
  const [click, setClick] = useState(false);

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload(); 
  };

  return (
    <div>
      <Head />
      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB"} onClick={() => setClick(false)}>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/courses'>Courses</Link>
            </li>
            {loggedIn && userRole !== "admin" && (
              <li>
                <Link to='/courses/my-courses'>My Courses</Link>
              </li>
            )}
            <li>
              <Link to='/books'>Books</Link>
            </li>
            <li>
              <Link to='/About'>About</Link>
            </li>
            <li>
              <Link to='/News'>News</Link>
            </li>
            <li>
              <Link to='/team'>Team</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
            {loggedIn && userRole === "admin" && (
              <li>
                <Link to='/dashboard'>Dashboard</Link>
              </li>
            )}
          </ul>
          <div className="start">
            {loggedIn ? (
              <button className="logout-btn" onClick={handleLogout}>Log Out</button>
            ) : (
              <Link to='/login'>
                <button className="login-btn">Log In</button>
              </Link>
            )}
          </div>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times' ></i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </div>
  );
};

export default Header;
