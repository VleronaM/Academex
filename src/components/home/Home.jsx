import React from 'react'
import Hero from "./hero/Hero"
import AboutCard from '../about/AboutCard'
import Hnews from './Hnews'
import Team from '../team/TeamCard'
import Categories from '../categories/Categories'
import CategoriesCard from '../categories/CategoriesCard'
const Home = () => {
    return (
        <>
            <Hero />
            <CategoriesCard />
        </>

    )
}

export default Home