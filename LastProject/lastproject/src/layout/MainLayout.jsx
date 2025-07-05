import React from 'react';
import Header from '../components/Header';
import { Outlet } from "react-router-dom";
import Footer from '../components/Footer';


const MainLayout = () => {
  return (
    <>
        <Header />
        <main className="w-full">
            <Outlet />
        </main>
        <Footer />

    </>
  );
};

export default MainLayout;
