import React from 'react'
import { team } from '../../database'
import "./team.css"
const TeamCard = () => {
    return (
        <div className='team-container'>
            {team.map((val) => (
                <div className="items shadow">
                    <div className="img">
                        <img src={val.cover} alt="" />
                        <div className="overlay">
                            <i className='fab fa-linkedin icon'></i>
                        </div>
                    </div>
                    <div className="details">
                        <h2>{val.name}</h2>
                        <p>{val.work}</p>
                    </div>
                </div>

            ))}
        </div>
    )
}

export default TeamCard
