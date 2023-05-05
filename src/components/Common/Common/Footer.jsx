import React, { useState } from "react";
import './style/footer.css';
import { Link } from "react-router-dom";
import { blog } from "../../../dummydata"

const Footer = () => {

    // const blog = [
    //     {
    //         title:"Vlerona
    // ]
  
    return(
        <>
        <section className = "newletter">
          <div className="container flexSB">
            <div className="left row">
             <h1>Newsletter- Stay tune and get the latest update</h1>
             <span>far far away, behind the word mountains</span>
            </div>
            <div className="right row">
                <input type= 'text' placeholder="Enter email address"/>
             <i className= 'fa fa-paper-plane'></i>
            </div>
          </div>
        </section>
        <footer>
            <div className="container padding">
                <div className= "box logo">
                    <h1>ACADEMEX</h1>
                    <span>E-Learning</span>
                    <div className="container_desc">
                    <p>Lorem Ipsum is simply dummy text of the printing and 
                        typesetting industry. Lorem Ipsum has been the industry's
                         standard dummy text ever since the 1500s, when an unknown 
                         printer took 
                        a galley of type and scrambled it to make a type 
                        specimen book.</p>
                        </div>
                        <div className="logo_div">
                    <i className='fa fa-facebook-f icon'></i>
                    <i className='fa fa-instagram-f icon'></i>
                    <i className='fa fa-youtube icon'></i>
                    <i className='fa fa-twitter icon'></i>
                    </div>
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
               <div className="bxo box">
                <h3>Recent Post</h3>
                {blog.slice(0, 3).map((val) => {
                    return(
                        <div className="items flexSB">
                            <div className="img">
                            <img src={val.cover} alt= '' />
                           </div>
                        <div className="text">
                            <span>
                            <i className = 'fa fa-user'></i>
                            <label htmlFor= ''>{val.type}</label>
                            </span>
                            <span>
                            <i className = 'fa fa-calendar-alt'></i>
                            <label htmlFor= ''>{val.date}</label>
                            </span>
                            <h4>{val.titlw}</h4>
                            </div>
                        </div>
                     )
                })}
            </div>
                <div className="box last">
                    <h3>Have a Question?</h3>
                    <ul>
                        <li>
                            <i className='fa fa-map'></i>
                            Prishtine, Kosove
                        </li>
                        <li>
                            <i className="fa fa-paper-plane"></i>
                            +38344101010
                        </li>
                        <li>
                            <i className='fa fa-paper-plane'></i>
                            example@gmail.com
                        </li>
                    </ul>
                </div>
           </div>
        </footer>
        <div className="legal">
            <p>Copyright @2023 All rights reserved</p>
        </div>
        </>
    )
 }

export default Footer;