import React, { useState, useEffect } from 'react';
import { awrapper2 } from '../../database';

const AWrapper = () => {
  const [aboutUsData, setAboutUsData] = useState([]);

  useEffect(() => {
    // Fetch data from the API for the About Us section
    fetch('http://localhost:3030/aboutUs') // Adjust the URL as needed
      .then((response) => response.json())
      .then((data) => setAboutUsData(data))
      .catch((error) => console.error('Error fetching About Us data:', error));
  }, []); // Empty dependency array to run the effect once on mount

  return (
    <>
      <section className='awrapper'>
        <div className="container grid">
          {aboutUsData.map((val) => (
            <div className="box flex" key={val.id}>
              <div className='img'>
                <img src={val.cover} alt="" />
              </div>
              <div className="text">
                <h1>{val.data}</h1>
                <h3>{val.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default AWrapper;
