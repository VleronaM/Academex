import React, { useState } from "react";
import './style/footer.css';
import { Link } from "react-router-dom";

const Footer = () => {

    return (
        <>
            <section className="newletter">
                <div className="container flexSB">
                    <div className="left row">
                        <h1>Newsletter- Stay tune and get the latest update</h1>
                        <span>far far away, behind the word mountains</span>
                    </div>
                    <div className="right row">
                        <input type='text' placeholder="Enter email address" />
                        <i className='fa fa-paper-plane'></i>
                    </div>
                </div>
            </section>
            <footer>
                <div className="container padding">
                    <div className="box logo">
                        <h1>ACADEMEX</h1>
                        <span>E-Learning</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. .</p>
                        <i className='fab fa-facebook icon'></i>
                        <i className='fab fa-instagram icon'></i>
                        <i className='fab fa-youtube icon'></i>
                        <i className='fab fa-twitter icon'></i>
                    </div>
                    <div className="box link">
                        <h3>Quick Links</h3>
                        <ul>
                            <li>About Us</li>
                            <li>About Us</li>
                            <li>About Us</li>
                            <li>About Us</li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;