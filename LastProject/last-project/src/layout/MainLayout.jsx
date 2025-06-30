import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div>
      <div className='header'>
        <button>Hello</button>
        <button>Chào</button>
      </div>
      <Outlet />
    </div>
  );
}

export default MainLayout;