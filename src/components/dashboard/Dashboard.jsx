import React, { Fragment } from 'react';
import Back from '../Common/back/Back';
import BooksDashboardCard from './BooksDashboardCard';
import CoursesDashboardCard from './CoursesDashboardCard';
import NewsDashboardCard from './NewsDashboardCard';
import UsersDashboardCard from './UsersDashboardCard';
import ContactDashboardCard from './ContactDashboardCard';
import CategoriesDashboardCard from './CategoriesDashboardCard';
import UserCoursesDashboard from './UserCoursesDashboard ';
import DirectorDaschboardCard from './DirectorDashboardCard'
import MovieDashboard from './MovieDashboard';

const Dashboard = () => {
    return (
        <>
            <Back title="Dashboard" />
            <CategoriesDashboardCard />
            <CoursesDashboardCard />
            <ContactDashboardCard />
            <NewsDashboardCard />
            <BooksDashboardCard />
            <UsersDashboardCard />
            <UserCoursesDashboard />
            <DirectorDaschboardCard />
            <MovieDashboard />
        </>
    )
}

export default Dashboard