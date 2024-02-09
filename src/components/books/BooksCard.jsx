import React, { useState, useEffect } from 'react';
import Title from '../Common/title/Title';
import './book.css';

const BooksCard = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch('http://localhost:3030/books')
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []); // Empty dependency array to run the effect once on mount

  return (
    <>
      <section className='books'>
        <div className='container'>
          <Title title='Download Your Favorite Books for Free!' />
          <div className='content grid3'>
            {books.map((val) => (
              <div className="box" key={val.id}>
                <div className="img">
                  <img src={val.image} alt="" />
                </div>
                <h1>{val.title}</h1>
                <span>{val.author}</span>
                <div>
                  <button className='downloads'>
                    <a href={val.link} className='button-link' target="_blank" rel="noopener noreferrer">
                      Read now<i className="fa fa-download" aria-hidden="true"></i>
                    </a>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BooksCard;
