import React from 'react'
import { ShoppingCartOutlined } from "@ant-design/icons";
import { SearchOutlined } from "@ant-design/icons";
import { UserOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
        <header className="fixed top-0 left-0 w-full bg-white shadow-md p-2 z-50">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                <nav className="space-x-10">
                    <NavLink to="/" className={({ isActive }) =>
                        isActive ? "text-orange-600 border-b-2 pb-2" : "hover:text-orange-600"}>
                        <b>Trang chủ</b>
                    </NavLink>
                    <NavLink to="/menu" className={({ isActive }) =>
                        isActive ? "text-orange-600 border-b-2 pb-2" : "hover:text-orange-600"}>
                        <b>Thực đơn</b>
                    </NavLink>
                    <NavLink to="/about" className={({ isActive }) =>
                        isActive ? "text-orange-600 border-b-2 pb-2" : "hover:text-orange-600"}>
                        <b>Về chúng tôi</b>
                    </NavLink>
                    <NavLink to="/news" className={({ isActive }) =>
                        isActive ? "text-orange-600 border-b-2 pb-2" : "hover:text-orange-600"}>
                        <b>Tin tức</b>
                    </NavLink>
                    <NavLink to="/booking" className={({ isActive }) =>
                        isActive ? "text-orange-600 pb-2" : "hover:text-orange-600"}>
                        <button className='bg-orange-600 px-4 py-2 text-white cursor-pointer rounded'><b>Đặt tiệc ngay</b></button>
                    </NavLink>
                </nav>
                
                <nav className='flex items-center space-x-10'>
                    <div className='flex border-b-2 pb-2'>
                        <input className='outline-none border-none' type='text' placeholder='Tìm kiếm món ăn'></input>
                        <SearchOutlined className='mt-2' />
                    </div>
                    <div className='flex items-center cursor-pointer'>
                        <UserOutlined className='mr-2'/>
                        <span>Tài khoản</span>
                    </div>
                    <div className='flex items-center justify-between'>
                        <button type='button' className='cursor-pointer'><ShoppingCartOutlined /></button>
                    </div>
                </nav>
            </div>
        </header>
    </>
  );
}

export default Header
