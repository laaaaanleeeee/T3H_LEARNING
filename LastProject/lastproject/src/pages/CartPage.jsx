import React, { useState, useEffect } from 'react';
import { Button, Table, Typography } from 'antd';
import { useTheme } from "../hook/useTheme";
import { getUserInfoApi } from '../services/userService';
import { useCart } from '../hook/useCart';
import { getCart } from '../services/cartService';

const { Title } = Typography;

const CartPage = () => {
  const [carts, setCarts] = useState([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const { theme } = useTheme();
  const [userId, setUserId] = useState(null);
  const { setCount } = useCart();

  const bgClass = theme === 'dark' ? 'bg-black' : 'bg-orange-50';
  const tableRowBg = theme === 'dark' ? 'bg-[#333333] text-green-400' : 'bg-white';

  useEffect(() => {
    getUserInfoApi()
      .then((res) => {
        setUserId(res.data.id);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);

  useEffect(() => {
    if (userId !== null) {
      const fetchData = async () => {
        try {
          const response = await getCart();
          const carts = response.data.carts;

          setCarts(carts);

          const totalProductInCart = carts.reduce((sum, cart) => {
            return sum + cart.products.length;
          }, 0);

          setCount(totalProductInCart);

        } catch (error) {
          console.error("Lỗi lấy thông tin người dùng:", error);
        }
      };

      fetchData();
    }
  }, [userId]);

  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const columns = [
    {
      title: "Hình ảnh",
      dataIndex: 'img',
      render: (value) => (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          {value}
        </div>
      ),
    },
    { title: "Tên sản phẩm", dataIndex: 'name' },
    { title: "Giá sản phẩm", dataIndex: 'price', render: (v) => `${v.toLocaleString()}₫` },
    { title: "Số lượng", dataIndex: 'quantity' },
    { title: "Tổng giá tiền", dataIndex: 'totalPrice', render: (v) => `${v.toLocaleString()}₫` },
    {
      title: "",
      dataIndex: "operation",
      align: 'center',
    },
  ];

  const dataSource = carts.flatMap((cart) =>
    cart.products.map((product) => ({
      key: `${cart.id}-${product.id}`,
      img: (
        <img
          src={product.thumbnail}
          alt={product.title}
          width={60}
          height={60}
          style={{ borderRadius: '8px', border: '1px solid #ddd' }}
        />
      ),
      name: product.title,
      price: product.price * 26000,
      quantity: product.quantity,
      totalPrice: product.total * 26000,
      operation: (
        <Button danger type="link">
          Xoá
        </Button>
      ),
    }))
  );

  return (
    <div className={`p-10 md:p-20 mt-10 rounded-2xl shadow-sm ${bgClass}`}>
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={dataSource}
        pagination={false}
        className="rounded-lg overflow-hidden"
        rowClassName={() => `${tableRowBg} hover:text-black transition-all`}
      />
    </div>
  );
};

export default CartPage;