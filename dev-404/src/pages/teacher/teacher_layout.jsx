import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/header';

const TeacherLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            
        </>
    );
};

export default TeacherLayout;