import React from 'react'
import { useNavigate, NavLink } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import {useAuth} from '../hook/useAuth';
import { Button, Divider, notification, Space } from 'antd';
import ImgBg from "../assets/pexels-pixabay-459271.jpg"

const LoginPage = () => {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [api, contextHolder] = notification.useNotification();


    const openNotification = placement => {
        api.info({
            message: 'Đăng nhập thành công',
            description: 'Chào mừng bạn quay trở lại!',
            placement,
            duration: 2,
        });
    };

    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        validationSchema: Yup.object({
            username: Yup.string().required('Vui lòng nhập username'),
            password: Yup.string().required('Vui lòng nhập mật khẩu'),
        }),
        onSubmit: async (values) => {
            await login(values.username, values.password);
            openNotification('top');
            navigate("/")
        },
    });



    return (
        <>
            {contextHolder}
            <div className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${ImgBg})` }}>
                <div className="bg-white p-8 rounded-lg shadow-2xl bg-opacity-100 w-full max-w-md">
                    <h2 className="text-2xl font-bold text-center mb-6">Đăng nhập</h2>
                    <form onSubmit={formik.handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                                Username
                            </label>
                            <input
                                id="username"
                                name="username"
                                type="text"
                                value={formik.values.username}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                placeholder="Nhập username của bạn"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {formik.touched.username && formik.errors.username && (
                                <div className="text-red-500 text-sm mt-1">{formik.errors.username}</div>
                            )}
                        </div>

                        <div className="mb-6">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                                Mật khẩu
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                placeholder="Nhập mật khẩu"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {formik.touched.password && formik.errors.password && (
                                <div className="text-red-500 text-sm mt-1">{formik.errors.password}</div>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="w-full cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition"
                        >
                            Đăng nhập
                        </button>
                    </form>

                    <NavLink to="/signup">
                        <p className='text-center mt-5 text-blue-600 hover:underline'>Đăng ký ngay</p>
                    </NavLink>
                </div>
            </div>
        </>
    )
}

export default LoginPage
