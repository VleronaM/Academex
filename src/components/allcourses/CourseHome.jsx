import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Back from '../Common/back/Back';
import CoursesCard from './CoursesCard';
import CourseDetail from './CourseDetails'; 
import MyCourses from './MyCourses';

const CourseHome = () => {
    return (
        <>
            <Back title='Explore Courses' />
            <Routes>
            <Route path="/" element={<CoursesCard />} />
            <Route path="/:id" element={<CourseDetail />} />
            <Route path="/my-courses" element={<MyCourses />} />
            </Routes>
        </>
    );
}

export default CourseHome;
