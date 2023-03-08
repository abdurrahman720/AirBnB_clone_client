import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header';

const Main = () => {
    return (
        <div className="p-4 flex flex-col min-h-screen">
            <Header />
            <Outlet/>
        </div>
    );
};

export default Main;