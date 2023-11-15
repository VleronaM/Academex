import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./categories.css"

const CategoriesCard = () => {
    const [categoriesData, setCategoriesData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3030/categories')
            .then((response) => {
                setCategoriesData(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <>
            <section className='categories-card'>
                <div className='container'>
                    {categoriesData.map(category => (
                        <div key={category.id} className='category-item'>
                            {console.log(`${process.env.PUBLIC_URL}/images/${category.cover}`)}
                            <div className='category-image'>
                                <img src={`${process.env.PUBLIC_URL}/images/${category.cover}`} alt={category.title} />
                            </div>
                            <div className='category-content'>
                                <h2>{category.title}</h2>
                                <button className='outline-btn'>Browse now!</button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default CategoriesCard;
