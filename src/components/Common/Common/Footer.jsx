import React from "react";
import "./style/footer.css";
import {news} from '../../../database';

const Footer = () => {
    return(
        <>
          <section className="newletter">
            <div className="container flexSB">
                <div className="left row">
                    <h1>Newsletter - Stay tune and get the latest update</h1>
                    <span>Learn anytime, anywhere with ACADEMEX</span>
                </div>
                <div className="right row">
                    <input type="text" placeholder = "Enter email address" />
                    <i className = 'fa fa-paper-plane'></i>
                </div>
            </div>
          </section>

          <footer>
            <div className="container">
                <div className="box logo">
                  <img src="./logo/academex_pink@2x.png" alt=""/>
                    <span>Online education and learning</span>
                    <p>Join Academex and start your journey to professionalism at your own pace </p>
                    <i className='fab fa-facebook iconn'></i>
                    <i className='fab fa-instagram iconn'></i>
                    <i className='fab fa-twitter iconn'></i>
                </div>
                <div className="box link">
                    <h3>Quick Links</h3>
                    <ul className="quickLinks">
                        <li>Home</li>
                        <li>Categories</li>
                        <li>Courses</li>
                        <li>Books</li>
                        <li>About</li>
                        <li>News</li>
                        <li>Team</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="container-bxo">
                <h3> Recent Post </h3>
                <div className="bxo">
                    {news.slice(0, 3).map((val) => {
                        return(
                            <div className="items flexSB">
                                <div className="img">
                                    <img src = {val.cover} alt='' />
                                </div>
                               <div className="text1">
                                <span>
                                <i className="fa fa-calendar-alt"></i>
                                <label htmlFor="">{val.date}</label>
                                </span>
                                <h4>{val.title}</h4>
                               </div>
                            </div>
                        )
                    })}
                </div>
                </div>
                <div className="box last">
                    <h3>Have a Question?</h3>
                    <ul className="info">
                        <li>
                         <i className = "fa fa-map"></i>
                         Prishtine, Kosove 10000
                        </li>
                        <li>
                            <i className = 'fa fa-phone-alt'></i>
                            +383844101010
                        </li>
                        <li>
                            <i className="fa fa-paper-plane"></i>
                            academex.info@gmail.com
                        </li>
                    </ul>
                </div>
            </div>
          </footer>
          <div className="legal">
            <p>Copyright @2023 All rights reserved | Website design by Academex Team | Privacy Policy  </p>
          </div>
        </>
    )
}

export default Footer