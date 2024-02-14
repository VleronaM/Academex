import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Back from '../Common/back/Back';
import CoursesCard from './CoursesCard';
import CourseDetail from './CourseDetails'; 

const CourseHome = () => {
    return (
        <>
            <Back title='Explore Courses' />
            <Routes>
            <Route path="/" element={<CoursesCard />} />
            <Route path="/:id" element={<CourseDetail />} />
            </Routes>
        </>
    );
}

export default CourseHome;
