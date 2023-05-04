import React from "react";
import { SocialIcon } from 'react-social-icons';
const Head = () => {
    return(
        <div>
        <section className = 'head'>
      <div className='container flexSB'>
        <div className = 'logo'>
      <h1>ACADEMEX</h1>  
      <span>E-Learning</span>
         </div>
   <div className = 'social'>
        <i className='fab fa-facebook-f icon'></i>
        <i className='fab fa-instagram-f icon'></i>
        <i className='fab fa-youtube icon'></i>
        <i className='fab fa-twitter icon'></i>
   </div>
      </div>
      </section> 
      </div>
    )
}
export default Head