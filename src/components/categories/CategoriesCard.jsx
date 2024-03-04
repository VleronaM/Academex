import React from 'react'
import Title from '../Common/title/Title'
import "./categories.css"
import { categories } from '../../database'

const CategoriesCard = () => {
    return (
        < >
            <section className='online'>
                <div className='container'>
                    <Title subtitle="Categories" title='Browse our categories' />
                    <div className='content'>
                        {categories.map((val) => (
                            <div className="box">
                                <div className="img">
                                    <img src={val.cover} alt="" />
                                </div>
                                <h1>{val.courseName}</h1>
                                <span>{val.course}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </ >
    )
}

export default CategoriesCard
