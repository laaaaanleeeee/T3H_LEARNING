import React from 'react';
import Header from '../components/Header';
import { Outlet } from "react-router-dom";
import Footer from '../components/Footer';
import WrapperTheme from "../components/WrapperTheme";


const MainLayout = () => {
  return (
    <WrapperTheme>
        <Header />
        <main className="w-full">
            <Outlet />
        </main>
        <Footer />

    </WrapperTheme>
  );
};

export default MainLayout;
