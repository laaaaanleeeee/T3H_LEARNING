import React from 'react'
import { ShoppingCartOutlined } from "@ant-design/icons";
import { SearchOutlined } from "@ant-design/icons";
import { UserOutlined } from "@ant-design/icons";
import { NavLink, useNavigate } from "react-router-dom";
import { useTheme } from "../hook/useTheme";
import { Switch, Dropdown, message, Badge } from 'antd';
import { BulbOutlined, BulbFilled } from '@ant-design/icons';
import { useAuth } from "../hook/useAuth";
import { MoonOutlined, SunOutlined } from '@ant-design/icons';
import { useCount } from '../hook/useCount';



const items = [
    {
        label: 'Thông tin cá nhân',
        key: '1',
    },
    {
        label: 'Cài đặt địa chỉ',
        key: '2',
    },
    {
        label: 'Quản lý đơn hàng',
        key: '3',
    },
    {
        label: 'Mã đã lưu',
        key: '4',
    },
    {
        label: 'Đăng xuất',
        key: '5',
    },
];

const Header = () => {
    const { theme, setTheme } = useTheme();
    const { logout } = useAuth();
    const navigate = useNavigate();
    const { count } = useCount();



    const onClick = ({ key }) => {
        switch (key) {
            case '1':
                navigate('/userinfo');
                break;
            case '5':
                logout();
                message.success("Đăng xuất thành công");
        }
    };

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
                        <Dropdown menu={{ items, onClick }} placement="bottomRight" arrow>
                            <div className="cursor-pointer flex items-center hover:text-orange-600">
                                <UserOutlined className='mr-2 text-xl' />
                                <span className='text-xl'>Tài khoản</span>
                            </div>
                        </Dropdown>
                        <NavLink to="/cart" className={({ isActive }) =>
                            isActive ? "text-orange-600 pb-2" : "hover:text-orange-600"}>
                            <Badge count={count} overflowCount={99} className='flex items-center justify-between'>
                                <button type='button' className='cursor-pointer text-xl text-orange-600 hover:text-blue-600'><ShoppingCartOutlined /></button>
                            </Badge>
                        </NavLink>

                        <div className="flex items-center">
                            <Switch
                                checked={theme === 'dark'}
                                onChange={(checked) => setTheme(checked ? 'dark' : 'light')}
                                checkedChildren={<MoonOutlined />}
                                unCheckedChildren={<SunOutlined />}
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
