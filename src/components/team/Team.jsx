import React from 'react'
import Back from '../Common/back/Back'
import TeamCard from './TeamCard'
import './team.css'

const team = () => {
    return (
        <>
            <Back title='Team' />
            <section className='team'>
                    <TeamCard />
            </section>
        </>
    )
}

export default team
