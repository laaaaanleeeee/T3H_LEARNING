import React, { useState, useEffect } from 'react';
import { Card, Button, Typography, Row, Col, Divider, Image, Input, message } from 'antd';
import { PlusOutlined, MinusOutlined, SaveOutlined } from '@ant-design/icons';
import { getAllProducts } from '../services/productService';
import { TiThMenuOutline } from "react-icons/ti";
import { NavLink } from 'react-router-dom';

const { Title, Text } = Typography;

const CustomMenu = () => {
  const [products, setProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [menuName, setMenuName] = useState('');
  const [messageApi, contextHolder] = message.useMessage();

  const info = () => {
    messageApi.open({
      type: 'success',
      content: 'Thêm menu mới thành công',
    });
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await getAllProducts();
        const data = res.data.products;

        setProducts(data);
      }
      catch (err) {
        console.error('Lỗi fetch dữ liệu:', err);
      }
    }
    fetchProducts();
  }, []);

  const addToSelected = (product) => {
    if (!selectedProducts.find((p) => p.id === product.id)) {
      setSelectedProducts((prev) => [...prev, product]);
    }
  };

  const removeFromSelected = (productId) => {
    setSelectedProducts((prev) => prev.filter((p) => p.id !== productId));
  };

  const saveMenu = () => {
    if (!menuName.trim()) {
      message.warning('Vui lòng nhập tên menu trước khi lưu!');
      return;
    }
    if (selectedProducts.length === 0) {
      message.warning('Menu chưa có sản phẩm nào!');
      return;
    }

    const existingMenus = JSON.parse(localStorage.getItem('customMenus') || '[]');

    const newMenu = {
      id: Date.now(),
      name: menuName,
      items: selectedProducts
    };

    localStorage.setItem('customMenus', JSON.stringify([...existingMenus, newMenu]));

    info();
  };

  return (
    <>
      {contextHolder}
      <div className="flex mt-20">
        <div className="flex-1 border-r overflow-y-auto p-10">
          <Title level={2}>Danh sách sản phẩm</Title>
          <Row gutter={[16, 16]}>
            {products.map((product) => (
              <Col xs={24} sm={12} md={8} lg={6} key={product.id}>
                <Card
                  hoverable
                  cover={
                    <div className="relative">
                      <Button
                        type="primary"
                        shape="circle"
                        icon={<PlusOutlined />}
                        className="absolute top-2 right-2 shadow"
                        onClick={() => addToSelected(product)}
                      />
                      <Image
                        alt={product.title}
                        src={product.thumbnail}
                        height={150}
                        className="object-cover"
                        preview={false}
                      />
                    </div>
                  }
                >
                  <Card.Meta
                    title={<Text strong>{product.title}</Text>}
                    description={<Text>{(product.price * 26000).toLocaleString()}₫</Text>}
                  />
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        <div className="flex-1 overflow-y-auto p-10">
          <div className="flex items-center justify-between mb-4">
            <Input
              placeholder="Nhập tên menu..."
              value={menuName}
              onChange={(e) => setMenuName(e.target.value)}
              style={{ width: '60%' }}
            />
            <Button
              type="primary"
              icon={<SaveOutlined />}
              onClick={saveMenu}
            >
              Lưu
            </Button>
            <NavLink to="/list-custom-menu" className={({ isActive }) => (isActive ? 'text-orange-600 pb-2' : 'hover:text-orange-600')}>
              <Button
                type="primary"
                icon={<TiThMenuOutline />}
              >
                Menu cá nhân
              </Button>
            </NavLink>
          </div>
          <Divider />

          <Row gutter={[16, 16]}>
            {selectedProducts.map((product) => (
              <Col xs={12} sm={8} md={6} key={product.id}>
                <div className="relative">
                  <Button
                    type="primary"
                    danger
                    shape="circle"
                    icon={<MinusOutlined />}
                    className="absolute top-2 right-2 shadow"
                    onClick={() => removeFromSelected(product.id)}
                  />
                  <Image
                    src={product.thumbnail}
                    alt={product.title}
                    height={150}
                    width="100%"
                    className="object-cover rounded"
                    preview={false}
                  />
                  <div className="mt-2 text-center text-sm font-semibold">
                    {product.title}
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </>
  );
};

export default CustomMenu;
