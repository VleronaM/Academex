import Title from '../Common/title/Title'
import React from 'react'
import { categories } from "../../database"

const OnlineCourses = () => {
    return (
        <>
            <section className='online'>
                <div className='container'>
                    <Title subtitle="Courses" title='Browse our categories' />

                    <div className='content grid3'>
                        {categories.map((val) => (
                            <div className="box">
                                <div className="img">
                                    <img src={val.cover} alt="" />
                                </div>
                                <h1>{val.courseName}</h1>
                                <span>{val.course}</span>
                            </div>

                        )

                        )}
                    </div>
                </div>
            </section>
        </>
    )
}

export default OnlineCourses
