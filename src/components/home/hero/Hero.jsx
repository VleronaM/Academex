import React from 'react'
import "./hero.css"
import Title from "../../Common/title/Title";
import { Link } from "react-router-dom"

const Hero = () => {
    return (
        <>
            <section className='hero'>
                <div className="container">
                    <div className="row">
                        <Title subtitle='Welcome to academex' title='Best Online Learning Platform' />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur odio, consectetur debitis autem id cumque nihil, consequatur recusandae adipisci dolorem saepe quos molestias repellendus atque quibusdam blanditiis eos quod quis.</p>
                        <div className='button'>
                            <Link to="/categories">
                                <button className="primary-btn" onClick={() => window.location.href = "/categories"}>
                                    Browse Courses<i className='fa fa-long-arrow-alt-right'></i>
                                </button>
                            </Link>
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
