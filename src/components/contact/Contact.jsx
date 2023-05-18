import React from "react";
import "./contact.css";
import Back from "../Common/back/Back";

const Contact = () => {
    const map ='https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d187836.49910227818!2d21.1400092!3d42.6413196!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ssq!2s!4v1684187621975!5m2!1ssq!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
    return(
        <>
           < Back title = 'Contact Us' />
           <section className = 'contact padding'>
            <div className = "container shadoww flexSB">
             <div className="left row ">
             <iframe src = {map} className="map-container"></iframe>
             </div>
             <div className="right row">
                <h1>Contact Us</h1>
                <p> Ask us anything or just say hi...</p>

                <div className="items grid22">
                    <div className="box">
                        <h4>Location: </h4>
                        <p>Prishtine,10000</p>
                    </div>
                    <div className="box">
                        <h4>Email: </h4>
                        <p>academex.info@gmail.com</p>
                    </div>
                    <div className="box">
                        <h4>Phone: </h4>
                        <p>+38344101010</p>
                    </div>

                </div>

                <form action=''>
                    <div className="flexSB">
                        <input type = 'text' placeholder='Name' />
                        <input type = 'email' placeholder='Email'/>
                    </div>
                    <input type = 'text' placeholder = 'Subject' />
                    <textarea cols='30' rows='10' placeholder=" Create a message here...">
                    </textarea>
                    <button className="primary-btn">Send Message</button>
                </form>

                <h3>Follow Us on</h3>
                <span>Facebook Twitter Instagram</span>
             </div>
            </div>
           </section>
        </>
    )
}

export default Contact