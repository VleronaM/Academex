import React, { useState, useEffect } from 'react';
import './news.css';

const NewsCard = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3030/news')
            .then(response => response.json())
            .then(data => setNews(data))
            .catch(error => console.error('Error fetching news:', error));
    }, []);

    return (
        <div className="news-container">
            {news.map((val, index) => (
                <div className="news-card" key={index}>
                    <div className="img">
                        <img src={val.imageUrl} alt="" />
                    </div>
                    <div className="text">
                        <div className="admin flexSB">
                            <span>
                                <i className="fa fa-calendar-alt"></i>
                                <label htmlFor="">{val.createdAt}</label>
                            </span>
                        </div>
                        <h1>{val.title}</h1>
                        <p>{val.content}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default NewsCard;
