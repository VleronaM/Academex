import React, { Fragment } from 'react';
import Back from '../Common/back/Back';
import DashboardCard from './DashboardCard';

const Dashboard = () => {
    return (
        <>
            <Back title="Dashboard" />
            <DashboardCard />
        </>
    )
}

export default Dashboard