import React, { useState } from 'react';
import { Table, Typography, Button } from 'antd';
import { useTheme } from "../hook/useTheme";
import { useCart } from '../hook/useCart';
import { MinusOutlined, PlusOutlined, DeleteOutlined } from '@ant-design/icons';

const { Title } = Typography;

const CartPage = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const { theme } = useTheme();
  const { cartItems, increaseQuantity, decreaseQuantity, removeItem } = useCart();

  const bgClass = theme === 'dark' ? 'bg-black' : 'bg-orange-50';
  const tableRowBg = theme === 'dark' ? 'bg-[#333333] text-green-400' : 'bg-white';

  const onSelectChange = (newSelectedRowKeys) => setSelectedRowKeys(newSelectedRowKeys);

  const rowSelection = { selectedRowKeys, onChange: onSelectChange };

  const columns = [
    {
      title: "Hình ảnh",
      dataIndex: 'img',
      render: (value) => (
        <div style={{ display: 'flex', justifyContent: 'center' }}>{value}</div>
      ),
    },
    { title: "Tên sản phẩm", dataIndex: 'name' },
    { title: "Giá sản phẩm", dataIndex: 'price', render: (v) => `${v.toLocaleString()}₫` },
    {
      title: "Số lượng",
      dataIndex: 'quantity',
      render: (quantity, record) => (
        <div className="flex items-center gap-2">
          <Button
            icon={<MinusOutlined />}
            onClick={() => decreaseQuantity(record.key)}
            disabled={quantity <= 1}
            className="border rounded"
          />
          <span className="text-lg">{quantity}</span>
          <Button
            icon={<PlusOutlined />}
            onClick={() => increaseQuantity(record.key)}
            className="border rounded"
          />
        </div>
      ),
    },
    {
      title: "Tổng giá tiền",
      dataIndex: 'totalPrice',
      render: (v) => `${v.toLocaleString()}₫`,
    },
    {
      title: "Hành động",
      render: (_, record) => (
        <Button
          icon={<DeleteOutlined />}
          onClick={() => removeItem(record.key)}
          danger
          className="border rounded"
        >
          Xóa
        </Button>
      ),
    },
  ];

  const dataSource = cartItems.map((product) => ({
    key: product.id,
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
    totalPrice: (product.price * 26000 * product.quantity),
  }));

  const selectedTotalPrice = dataSource
    .filter((item) => selectedRowKeys.includes(item.key))
    .reduce((sum, item) => sum + item.totalPrice, 0);

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
      <div className="mt-6 flex justify-end">
        <div className="text-xl font-semibold">
          Tổng giá tiền (đã chọn): <span className="text-orange-600">{selectedTotalPrice.toLocaleString()}₫</span>
        </div>
      </div>
    </div>
  );
};

export default CartPage;