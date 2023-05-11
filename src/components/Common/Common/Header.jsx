import React, { useState } from "react";
import Head from "./Head";
import "./style/header.css"
import { Link } from "react-router-dom";

const Header = () => {
  const [click, setClick] = useState(false)
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
              <Link to='/categories'>Categories</Link>
            </li>
            <li>
              <Link to='/courses'>Courses</Link>
            </li>
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
          </ul>
          <div className="start">
            <div className="button"> Get Certificate</div>
          </div>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times' ></i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </div>
  )
}
export default Header;

/*import './style/header.css';
const Header = () => {
  
     return (
        <div>
          <section className = 'head'>
        <div className='container'>
          <div className = 'logo'>
        <h1>ACADEMEX</h1>  
        <span>E-Learning</span>
           </div>
     <div className = 'social'>
          <i className= 'fab fa-facebook-f'></i>
          <i className= 'fab fa-instagram icon'></i>
          <i className= 'fab fa-youtube icon'></i>
          <i className= 'fab fa-twitter icon'></i>
     </div>

        </div>
        </section> 
        </div>
     )
  
}*/