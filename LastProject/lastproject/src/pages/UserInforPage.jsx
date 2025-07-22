import React, { useState } from 'react'
import useAuth from '../hook/useAuth'
import { FaCircleUser, FaRegAddressBook, FaCartShopping } from "react-icons/fa6";
import { RiCoupon2Fill } from "react-icons/ri";
import { CiLogout } from "react-icons/ci";
import { Layout, Menu, theme } from 'antd';
const { Sider, Content } = Layout;
import { useNavigate } from 'react-router-dom';
import LoginPage from './LoginPage';
import UserInfor from '../components/UserInfor';


const UserInforPage = () => {
  const { token, logout } = useAuth();
  const [selectedKey, setSelectedKey] = useState("1");
  const navigate = useNavigate();

  const handleMenuClick = (e) => {
    if (e.key === "5") {
      logout();
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

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <div>
      {token ? (
        <Layout className='p-25 mt-10'>
          <Sider trigger={null} collapsible className="bg-gray-900">
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={['1']}
              onClick={handleMenuClick}
              className="flex flex-col items-center"
              items={[
                { key: '1', icon: <FaCircleUser />, label: 'Thông tin cá nhân' },
                { key: '2', icon: <FaRegAddressBook />, label: 'Cài đặt địa chỉ' },
                { key: '3', icon: <FaCartShopping />, label: 'Quản lý đơn hàng' },
                { key: '4', icon: <RiCoupon2Fill />, label: 'Mã đã lưu' },
                { key: '5', icon: <CiLogout />, label: 'Đăng xuất' },
              ]}
            />
          </Sider>
          <Layout>
            <Content
              style={{
                padding: 24,
                minHeight: 280,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
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