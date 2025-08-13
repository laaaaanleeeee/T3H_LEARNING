import React, { useEffect, useState } from 'react';
import { useTheme } from '../hook/useTheme';
import { Button, Dropdown, message } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const UserInfor = () => {
  const { theme } = useTheme();
  const [menus, setMenus] = useState([]);
  const [messageApi, contextHolder] = message.useMessage();

  const isDark = theme === 'dark';

  const containerClass = `max-w-5xl mx-auto rounded-md shadow-md p-6 ${
    isDark ? 'bg-gray-800' : 'bg-white'
  }`;

  const titleClass = `text-3xl font-bold mb-6 border-b pb-2 ${
    isDark ? 'text-gray-100' : 'text-gray-900'
  }`;

  const info = () => {
    messageApi.open({
      type: 'warning',
      content: 'Menu cá nhân rỗng',
    });
  };

  useEffect(() => {
    const savedMenus = JSON.parse(localStorage.getItem('customMenus') || '[]');
    setMenus(savedMenus);
  }, []);

  if (menus.length === 0) {
    info();
  }

  const getMenuItems = (menu) => {
    return menu.items.map((product) => ({
      key: product.id,
      label: (
        <div className="flex justify-between gap-4">
          <span className="font-semibold">{product.title}</span>
          <span>{(product.price * 26000).toLocaleString()}₫</span>
        </div>
      ),
    }));
  };

  return (
    <>
      {contextHolder}
      <div className={containerClass}>
        <h2 className={titleClass}>MENU CÁ NHÂN ĐÃ LƯU</h2>
        <div className='flex flex-wrap'>
            {menus.map((menu) => (
          <div key={menu.id} className="mb-4">
            <Dropdown
              menu={{
                items: getMenuItems(menu),
              }}
              trigger={['click']}
              placement="bottomLeft"
            >
              <Button>
                {menu.name} ({menu.items.length} sản phẩm) <DownOutlined />
              </Button>
            </Dropdown>
          </div>
        ))}
        </div>
      </div>
    </>
  );
};

export default UserInfor;
