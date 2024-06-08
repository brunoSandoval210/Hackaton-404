import React from 'react';
import Header from '../../components/header';
import { Outlet } from 'react-router-dom';

const StudentLayout = () => {
    return (
        <>
            <Header/>
            <Outlet/>
        </>
    );
};

export default StudentLayout;