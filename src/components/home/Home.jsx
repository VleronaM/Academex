import React from 'react'
import './hero/hero.css'
import './home.css'
import Hero from './hero/Hero'
import CategoriesCard from '../categories/CategoriesCard'
const Home = () => {
    return (
        <div className="home-container">
            <Hero />
            <CategoriesCard />
        </div>

    )
}

export default Home;