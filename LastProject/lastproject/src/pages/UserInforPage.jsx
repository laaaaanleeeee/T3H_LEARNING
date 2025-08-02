import React, { useState } from 'react';
import { FaCircleUser, FaRegAddressBook, FaCartShopping } from "react-icons/fa6";
import { RiCoupon2Fill } from "react-icons/ri";
import { CiLogout } from "react-icons/ci";
import { Layout, Menu } from 'antd';
const { Sider, Content } = Layout;
import { useNavigate } from 'react-router-dom';
import LoginPage from './LoginPage';
import UserInfor from '../components/UserInfor';
import { useSelector, useDispatch } from 'react-redux';
import { logoutAction } from '../redux/actions/authAction';
import { useTheme } from '../hook/useTheme';

const UserInforPage = () => {
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  const [selectedKey, setSelectedKey] = useState("1");
  const navigate = useNavigate();
  const { theme } = useTheme();

  const handleMenuClick = (e) => {
    if (e.key === "5") {
      dispatch(logoutAction());
      navigate("/login");
    } else {
      setSelectedKey(e.key);
    }
  };

  const renderContent = () => {
    switch (selectedKey) {
      case "1":
        return <UserInfor />;
      case "2":
        return <div>Cài đặt địa chỉ</div>;
      case "3":
        return <div>Quản lý đơn hàng</div>;
      case "4":
        return <div>Mã đã lưu</div>;
      default:
        return <div>Chọn một mục từ menu bên trái.</div>;
    }
  };

  const bgColor = theme === 'dark' ? '#1f2937' : '#fff7ed';
  const borderColor = theme === 'dark' ? 'border-gray-700' : 'border-gray-300';

  return (
    <div className="flex justify-center items-start p-8 mt-20" style={{ backgroundColor: bgColor }}>
      {token ? (
        <Layout className="max-w-5xl w-full rounded-lg shadow-lg overflow-hidden" style={{ backgroundColor: bgColor }}>
          <Sider
            trigger={null}
            collapsible
            width={250}
            className={`bg-transparent border-r ${borderColor}`}
            style={{ backgroundColor: 'transparent' }}
          >
            <Menu
              theme={theme === 'dark' ? 'dark' : 'light'}
              mode="inline"
              selectedKeys={[selectedKey]}
              onClick={handleMenuClick}
              className="h-full flex flex-col justify-start gap-3 px-4 pt-6"
              items={[
                { key: '1', icon: <FaCircleUser className="text-xl" />, label: 'Thông tin cá nhân' },
                { key: '2', icon: <FaRegAddressBook className="text-xl" />, label: 'Cài đặt địa chỉ' },
                { key: '3', icon: <FaCartShopping className="text-xl" />, label: 'Quản lý đơn hàng' },
                { key: '4', icon: <RiCoupon2Fill className="text-xl" />, label: 'Mã đã lưu' },
                { key: '5', icon: <CiLogout className="text-xl" />, label: 'Đăng xuất' },
              ]}
            />
          </Sider>

          <Layout>
            <Content
              className="p-8"
              style={{
                minHeight: 400,
                backgroundColor: bgColor,
              }}
            >
              {renderContent()}
            </Content>
          </Layout>
        </Layout>
      ) : (
        <LoginPage />
      )}
    </div>
  );
};

export default UserInforPage;
