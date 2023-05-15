
import React from 'react'
import { homeAbout } from '../../database'
import Title from '../Common/title/Title'
import AWrapper from './AWrapper'
import "./about.css"


const AboutCard = () => {
    return (
        <>
            <section className='aboutHome'>
                <div className="container flexSB">
                    <div className="left row">
                        <img src="https://images.unsplash.com/photo-1584697964328-b1e7f63dca95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                    </div>
                    <div className='right row'>
                        <Title subtitle="Learn Anything" title='lorem ipsum' />
                        <div className='items'>
                            {homeAbout.map((val) => (
                                <div className="item flexSB">
                                    <div className="img">
                                        <img src={val.cover} alt="" />
                                    </div>
                                    <div className='text'>
                                        <h2>{val.title}</h2>
                                        <p>{val.desc}</p>
                                    </div>
                                </div>

                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <AWrapper />

        </>
    )
}

export default AboutCard
