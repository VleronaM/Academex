import Title from '../Common/title/Title.jsx'
import React from 'react'
import NewsCard from '../news/NewsCard.jsx'

const Hnews = () => {
    return (
        <div>
            <section className='news'>
                <div className="container">
                    <Title subtitle="Our news" title='Recent from us.' />
                    <NewsCard />
                </div>
            </section>
        </div>
    )
}

export default Hnews
