import Title from '../Common/title/Title'
import React from 'react'
import { books } from '../../database'
import "./book.css"

const BooksCard = () => {
    return (
        < >
            <section className='books'>
                <div className='container'>
                    <Title  title='Download Your Favorite Books for Free!' />
                    <div className='content grid3'>
                        {books.map((val) => (
                            <div className="box">
                                <div className="img">
                                    <img src={val.cover} alt="" />
                                </div>
                                <h1>{val.name}</h1>
                                <span>{val.author}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default BooksCard
