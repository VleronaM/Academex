import React from "react";
import "./contact.css";
import Back from "../Common/back/Back";
import axios from "axios";
import { useState } from "react";

const Contact = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            const response = await axios.post("http://localhost:3030/contact/create", formData);
            console.log(response.data);
            window.location.href = "http://localhost:3000/";

        } catch (error) {
            console.error("Error submitting form:", error);

        }
    };
    const map = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2934.2392992882396!2d21.156777876514674!3d42.65628411633483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13549ee8ab4ab551%3A0xc5bceaec65d0ab0e!2sKatedralja%20N%C3%ABn%C3%AB%20Tereza!5e0!3m2!1ssq!2s!4v1708790044728!5m2!1ssq!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
    return (
        <>
            < Back title='Contact Us' />
            <section className='contact'>
                <div className="contact-container">
                    <div className="map">
                        <iframe src={map} className="map-container"></iframe>
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

                        <form onSubmit={handleSubmit}>
                            <div className="flexSB">
                                <input type='text' name='name' placeholder='Name' value={formData.name} onChange={handleChange} />
                                <input type='email' name='email' placeholder='Email' value={formData.email} onChange={handleChange} />
                            </div>
                            <input type='text' name='subject' placeholder='Subject' value={formData.subject} onChange={handleChange} />
                            <textarea name='message' cols='30' rows='10' placeholder="Create a message here..." value={formData.message} onChange={handleChange}></textarea>
                            <button type="submit" className="primary-btn">Send Message</button>
                        </form>


                        <h3>Follow Us on</h3>
                        <span>Facebook Twitter Instagram</span>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact;