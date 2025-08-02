import React, { useEffect, useState } from 'react';
import { getUserInfoApi } from '../services/userService';
import { useTheme } from '../hook/useTheme';

const UserInfor = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const { theme } = useTheme();

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

  const isDark = theme === 'dark';

  const containerClass = `max-w-xl mx-auto rounded-md shadow-md p-6 ${
    isDark ? 'bg-gray-800' : 'bg-white'
  }`;

  const titleClass = `text-3xl font-bold mb-6 border-b pb-2 ${
    isDark ? 'text-gray-100' : 'text-gray-900'
  }`;

  const rowClass = `flex justify-between items-center border-b py-2 ${
    isDark ? 'border-gray-700' : 'border-gray-200'
  }`;

  const labelClass = `font-semibold w-36 ${
    isDark ? 'text-gray-300' : 'text-gray-700'
  }`;

  const valueClass = isDark ? 'text-gray-400' : 'text-gray-600';

  if (loading) {
    return (
      <div
        className={`flex justify-center items-center min-h-[200px] text-lg font-medium ${
          isDark ? 'text-gray-400' : 'text-gray-500'
        }`}
      >
        Đang tải thông tin người dùng...
      </div>
    );
  }

  if (!user) {
    return (
      <p className="text-center text-red-600 font-semibold">
        Không thể tải thông tin người dùng.
      </p>
    );
  }

  return (
    <div className={containerClass}>
      <h2 className={titleClass}>THÔNG TIN NGƯỜI DÙNG</h2>
      <div className="space-y-5">
        {[
          { label: 'ID', value: user.id },
          { label: 'Họ tên', value: `${user.firstName} ${user.lastName}` },
          { label: 'Tên người dùng', value: user.username },
          { label: 'Email', value: user.email || 'Chưa có email' },
        ].map(({ label, value }) => (
          <div key={label} className={rowClass}>
            <span className={labelClass}>{label}:</span>
            <span className={valueClass}>{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserInfor;
