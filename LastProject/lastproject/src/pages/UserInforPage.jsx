import React, { useState } from 'react'
import {useAuth} from '../hook/useAuth';
import { FaCircleUser, FaRegAddressBook, FaCartShopping } from "react-icons/fa6";
import { RiCoupon2Fill } from "react-icons/ri";
import { CiLogout } from "react-icons/ci";
import { Layout, Menu, theme as antdTheme  } from 'antd';
const { Sider, Content } = Layout;
import { useNavigate } from 'react-router-dom';
import LoginPage from './LoginPage';
import UserInfor from '../components/UserInfor';
import { useTheme } from "../hook/useTheme";



const UserInforPage = () => {
  const { token, logout } = useAuth();
  const [selectedKey, setSelectedKey] = useState("1");
  const navigate = useNavigate();
  const {theme} = useTheme();

  const bgContent = theme === 'dark' ? '#333333' : 'white';
  const textContent = theme === 'dark' ? 'white' : 'black';
  const bgLayout = theme === 'dark' ? 'black' : '#fff7ed';
  const siderBg = theme === 'dark' ? '#1a1a1a' : '#f0f0f0';
  const menuItemColor = theme === 'dark' ? '#b3b3b3' : '#000000';

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
    token: { colorBgContainer },
  } = antdTheme.useToken();

  return (
    <div>
      {token ? (
        <Layout className='p-25 mt-10 ' style={{backgroundColor: `${bgLayout}`}}>
          <Sider trigger={null} collapsible style={{ backgroundColor: `${siderBg}` }}>
            <Menu
              theme={theme}
              mode="inline"
              defaultSelectedKeys={['1']}
              onClick={handleMenuClick}
              className="flex flex-col gap-5"
              style={{
                backgroundColor: `${siderBg}`,
                color: `${menuItemColor}`,
              }}
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
                backgroundColor: `${bgContent}`,
                color: `${textContent}`
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