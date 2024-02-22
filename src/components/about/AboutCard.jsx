import React, { useState, useEffect } from 'react';
import Title from '../Common/title/Title';
import AWrapper from './AWrapper';
import "./about.css";

const AboutCard = () => {
  const [aboutUsEntries, setAboutUsEntries] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch('http://localhost:3030/aboutUs')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log('Fetched aboutUs data:', data);
        setAboutUsEntries(data);
      })
      .catch((error) => console.error('Error fetching About Us data:', error));
  }, []);
  
  return (
    <>
      <section className='aboutHome'>
        <div className="container flexSB">
          <div className="left row">
            <img src="https://images.unsplash.com/photo-1584697964328-b1e7f63dca95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
          </div>
          <div className='right row'>
            <Title subtitle="Learn Anything" title='Unlock Knowledge with Academex' />
            <div className='items'>
              {aboutUsEntries.map((val) => (
                <div className="item flexSB" key={val.id}>
                  <div className="img">
                    <img src={val.icon} alt="" />
                  </div>
                  <div className='text'>
                    <h2>{val.title}</h2>
                    <p>{val.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <AWrapper />
    </>
  );
};

export default AboutCard;
