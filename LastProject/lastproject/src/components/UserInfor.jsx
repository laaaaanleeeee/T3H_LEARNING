import React, { useEffect, useState } from 'react';
import { getUserInfoApi } from '../services/UserService';


const UserInfor = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);




    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getUserInfoApi();
                setUser(res.data);
            } catch (error) {
                console.error("Lỗi lấy thông tin người dùng:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-[200px]">
                Đang tải thông tin người dùng...
            </div>
        );
    }

    if (!user) {
        return <p className="text-center text-red-500">Không thể tải thông tin người dùng.</p>;
    }

    return (
        <div className={`flex justify-start py-6 px-4 `}>
            <div className="w-full max-w-lg">
                <h2 className="text-3xl font-bold mb-6">
                    THÔNG TIN NGƯỜI DÙNG
                </h2>
                <div className="space-y-4">
                    <div className="flex items-center">
                        <span className="font-semibold w-32">ID:</span>
                        <span >{user.id}</span>
                    </div>
                    <div className="flex items-center">
                        <span className="font-semibold w-32">Họ tên:</span>
                        <span>{user.firstName} {user.lastName}</span>
                    </div>
                    <div className="flex items-center">
                        <span className="font-semibold w-32">Tên người dùng:</span>
                        <span>{user.username}</span>
                    </div>
                    <div className="flex items-center">
                        <span className="font-semibold w-32">Email:</span>
                        <span>{user.email || 'Chưa có email'}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserInfor;
