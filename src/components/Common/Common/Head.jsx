import React from "react";
import { SocialIcon } from 'react-social-icons';
const Head = () => {
  return (
    <div>
      <section className='head'>
        <div className='container flexSB'>
          <div className='logo'>
            <h1>academex</h1>
            <span>E-Learning</span>
          </div>
          <div className='social'>
            <i className='fab fa-facebook icon'></i>
            <i className='fab fa-instagram icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-youtube icon'></i>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Head