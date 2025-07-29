import React, { useEffect, useState } from 'react';

import { ShoppingCartOutlined } from "@ant-design/icons";
import { SearchOutlined } from "@ant-design/icons";
import { UserOutlined } from "@ant-design/icons";
import { NavLink, useNavigate } from "react-router-dom";
import { useTheme } from "../hook/useTheme";
import { Switch, Dropdown, message, Badge } from 'antd';
import { useAuth } from "../hook/useAuth";
import { MoonOutlined, SunOutlined } from '@ant-design/icons';
import { useCart } from '../hook/useCart';
import LogoBCT from "../assets/logo-da-thong-bao-bo-cong-thuong.webp";



const accountItems = [
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
    const { count } = useCart();
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);


    useEffect(() => {
        const delayDebounce = setTimeout(() => {
            if (searchValue.trim() === "") {
                setSearchResult([]);
                return;
            }

            fetch(`https://dummyjson.com/products/search?q=${searchValue}&limit=5`)
                .then(res => res.json())
                .then(data => setSearchResult(data.products || []))
                .catch(err => {
                    message.error(err.message || "Đã xảy ra lỗi khi tìm kiếm");
                    setSearchResult([]);
                });
        }, 500);

        return () => clearTimeout(delayDebounce);
    }, [searchValue]);


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
    const bgSearch = theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-white text-black';

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
                        <div className='relative'>
                            <div className='flex border-b-2 pb-2'>
                                <input className='outline-none border-none' type='text' placeholder='Tìm kiếm sản phẩm'
                                    value={searchValue} onChange={(e) => {
                                        setSearchValue(e.target.value)
                                    }}></input>
                                <SearchOutlined className='mt-2' />
                                {searchResult.length > 0 && (
                                    <ul className="absolute top-full mt-2 z-50 bg-white shadow-lg w-64">
                                        {searchResult.map((item) => (
                                            <li
                                                key={item.id}
                                                className={`p-2 border-b cursor-pointer hover:bg-amber-500 ${bgSearch} flex min-w-[400px]`}
                                                onClick={() => {
                                                    navigate(`/menu/${item.id}`);
                                                    setSearchResult([]);
                                                    setSearchValue("");
                                                }}
                                            >
                                                <img className='w-15 m-2' src={item.thumbnail}></img>
                                                <div className='flex-col items-center'>
                                                    <p><strong>{item.title}</strong></p>
                                                    <p className=' text-red-600'> $ {item.price}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>

                        <Dropdown menu={{ items: accountItems, onClick }} placement="bottomRight" arrow>
                            <div className="cursor-pointer flex items-center hover:text-orange-600">
                                <UserOutlined className='mr-2 text-xl' />
                                <span className='text-l'>Tài khoản</span>
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
