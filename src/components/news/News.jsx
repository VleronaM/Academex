import React from 'react'
import NewsCard from './NewsCard'
import Back from '../Common/back/Back'
import "./news.css"

const News = () => {
    return (
        < >
            <Back title='News' />
            <section className='news padding'>
                <div className='container grid2'>
                    <NewsCard />
                </div>
            </section>
        </ >
    )
}

export default News
