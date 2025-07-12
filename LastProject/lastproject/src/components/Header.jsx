import React from 'react'
import { ShoppingCartOutlined } from "@ant-design/icons";
import { SearchOutlined } from "@ant-design/icons";
import { UserOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import { useTheme } from "../hook/useTheme";
import { Switch } from 'antd';
import { BulbOutlined, BulbFilled } from '@ant-design/icons';


const Header = () => {
    const { theme, setTheme } = useTheme();

    const bgClass = theme === 'dark' ? 'bg-black' : 'bg-white';

    return (
        <>
            <header className={`fixed top-0 left-0 w-full shadow-md p-2 z-50 transition-colors duration-300 ${bgClass}`}>
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
                        {/* <div className='flex border-b-2 pb-2'>
                            <input className='outline-none border-none' type='text' placeholder='Tìm kiếm món ăn'></input>
                            <SearchOutlined className='mt-2' />
                        </div> */}
                        <NavLink to="/login" className={({ isActive }) =>
                            isActive ? "text-orange-600 border-b-2 pb-2" : "hover:text-orange-600"}>
                            <UserOutlined className='mr-2' />
                            <span>Tài khoản</span>
                        </NavLink>
                        <div className='flex items-center justify-between'>
                            <button type='button' className='cursor-pointer'><ShoppingCartOutlined /></button>
                        </div>
                        <div className="flex items-center">
                            <Switch
                                checked={theme === 'dark'}
                                onChange={(checked) => setTheme(checked ? 'dark' : 'light')}
                                checkedChildren={<BulbFilled />}
                                unCheckedChildren={<BulbOutlined />}
                                className="bg-gray-300"
                            />
                        </div>
                    </nav>
                </div>
            </header>
        </>
    );
}

export default Header
