import React from 'react'
import Hero from "./hero/Hero"
import AboutCard from '../about/AboutCard'
import Hnews from './Hnews'
import OnlineCourses from '../allcourses/OnlineCourses'
import Team from '../team/TeamCard'
const Home = () => {
    return (
        <>
            <Hero />
            <AboutCard />
            <OnlineCourses />
        </>

    )
}

export default Home