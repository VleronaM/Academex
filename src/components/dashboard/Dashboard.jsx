import React, { useState } from 'react';
import Back from '../Common/back/Back';
import BooksDashboardCard from './BooksDashboardCard';
import CoursesDashboardCard from './CoursesDashboardCard';
import NewsDashboardCard from './NewsDashboardCard';
import UsersDashboardCard from './UsersDashboardCard';
import ContactDashboardCard from './ContactDashboardCard';
import CategoriesDashboardCard from './CategoriesDashboardCard';
import UserCoursesDashboard from './UserCoursesDashboard ';

const Dashboard = () => {
    const [selectedDashboard, setSelectedDashboard] = useState(null);

    const handleMenuClick = (dashboard) => {
        setSelectedDashboard(dashboard);
    };

    const renderDashboard = () => {
        switch (selectedDashboard) {
            case 'books':
                return <BooksDashboardCard />;
            case 'courses':
                return <CoursesDashboardCard />;
            case 'news':
                return <NewsDashboardCard />;
            case 'users':
                return <UsersDashboardCard />;
            case 'contact':
                return <ContactDashboardCard />;
            case 'categories':
                return <CategoriesDashboardCard />;
            case 'userCourses':
                return <UserCoursesDashboard />;
            default:
                return null;
        }
    };

    return (
        <>
            <Back title="Dashboard" />
            <div className="dashboard-container">
                <div className="dashboard-content">
                    <button onClick={() => handleMenuClick('books')}>Books</button>
                    <button onClick={() => handleMenuClick('courses')}>Courses</button>
                    <button onClick={() => handleMenuClick('news')}>News</button>
                    <button onClick={() => handleMenuClick('users')}>Users</button>
                    <button onClick={() => handleMenuClick('contact')}>Contact</button>
                    <button onClick={() => handleMenuClick('categories')}>Categories</button>
                    <button onClick={() => handleMenuClick('userCourses')}>User Courses</button>
                </div>
            </div>
            {selectedDashboard && renderDashboard()}
        </>
    );
};

export default Dashboard;