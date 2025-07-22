import React, { useContext } from 'react';
import { Spin } from 'antd';
import { AuthContext } from '../context/AuthContext';

const UserInfor = () => {
    const { userData } = useContext(AuthContext);

    if (!userData) {
        return (
            <div className="flex justify-center items-center min-h-[200px]">
                <Spin tip="Đang tải thông tin người dùng..." />
            </div>
        );
    }

    return (
        <div className="flex justify-start py-6 px-4">
            <div className="w-full max-w-lg">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                    THÔNG TIN NGƯỜI DÙNG
                </h2>
                <div className="space-y-4">
                    <div className="flex items-center">
                        <span className="font-semibold text-gray-700 w-32">ID:</span>
                        <span className="text-gray-600">{userData.id}</span>
                    </div>
                    <div className="flex items-center">
                        <span className="font-semibold text-gray-700 w-32">Họ tên:</span>
                        <span className="text-gray-600">{userData.firstName} {userData.lastName}</span>
                    </div>
                    <div className="flex items-center">
                        <span className="font-semibold text-gray-700 w-32">Tên người dùng:</span>
                        <span className="text-gray-600">{userData.username}</span>
                    </div>
                    <div className="flex items-center">
                        <span className="font-semibold text-gray-700 w-32">Email:</span>
                        <span className="text-gray-600">{userData.email || 'Chưa có email'}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserInfor;