import React from 'react'
import "./hero.css"
import Title from "../../Common/title/Title";

const Hero = () => {
    return (
        <>
            <section className='hero'>
                <div className="container">
                    <div className="row">
                        <Title subtitle='Welcome to academex' title='Best Online Learning Platform' />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur odio, consectetur debitis autem id cumque nihil, consequatur recusandae adipisci dolorem saepe quos molestias repellendus atque quibusdam blanditiis eos quod quis.</p>
                        <div className='button'>
                            <button className="primary-btn">
                                View Courses<i className='fa fa-long-arrow-alt-right'></i>
                            </button>
                            <button>
                                Download free books! <i className='fa fa-long-arrow-alt-right'></i>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <div className="marigin"></div>
        </>
    )
}

export default Hero;
