import React, { Fragment } from 'react';
import Back from '../Common/back/Back';
import BooksDashboardCard from './BooksDashboardCard';
import CoursesDashboardCard from './CoursesDashboardCard';
import NewsDashboardCard from './NewsDashboardCard';
import UsersDashboardCard from './UsersDashboardCard';
import ContactDashboardCard from './ContactDashboardCard';
import CategoriesDashboardCard from './CategoriesDashboardCard';

const Dashboard = () => {
    return (
        <>
            <Back title="Dashboard" />
            <BooksDashboardCard />
            <CoursesDashboardCard />
            <NewsDashboardCard />
            <UsersDashboardCard />
            <ContactDashboardCard />
            <CategoriesDashboardCard />

        </>
    )
}

export default Dashboard