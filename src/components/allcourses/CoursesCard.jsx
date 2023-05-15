import React from 'react'
import "./courses.css"
import { coursesCard } from '../../database'
const CoursesCard = () => {
    return (
        <>
            <section className='coursesCard'>
                <div className='container grid2'>
                    {coursesCard.map((val) => (
                        <div className='items'>
                            <div className='content flex'>
                                <div className='left'>

                                </div>
                                <div className='text'>
                                    <h1>{val.coursesName}</h1>

                                    <div className='details'>
                                        {val.courTeacher.map((details) => (
                                            <>
                                                <div className='box'>
                                                    <div className='dimg'>
                                                        <img src={val.cover} alt='' />
                                                    </div>
                                                    <div className='para'>
                                                        <h4>{details.name}</h4>
                                                    </div>
                                                </div>
                                                <span>{details.totalTime}</span>
                                            </>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <button className='outline-btn'>ENROLL NOW !</button>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default CoursesCard
