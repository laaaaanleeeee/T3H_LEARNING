import React, { useState, useEffect } from 'react';
import { Button, Flex, Table } from 'antd';
import { useTheme } from "../hook/useTheme";



const CartPage = () => {
  const [carts, setCarts] = useState([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const { theme } = useTheme();


  const bgClass = theme === 'dark' ? 'bg-black' : 'bg-orange-50';



  useEffect(() => {
    fetch("https://dummyjson.com/carts")
      .then((res) => {
        if (!res.ok) throw new Error("Lỗi khi fetch data");
        return res.json();
      })
      .then((data) => {
        setCarts(data.carts);
      })
      .catch((err) => {
        alert(err.message);
      })
  }, []);

  const onSelectChange = newSelectedRowKeys => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const columns = [
    { title: "Hình ảnh", dataIndex: 'img' },
    { title: "Tên sản phẩm", dataIndex: 'name' },
    { title: "Giá sản phẩm", dataIndex: 'price' },
    { title: "Số lượng", dataIndex: 'quantity' },
    { title: "Tổng giá tiền", dataIndex: 'totalPrice' },
    { title: "", dataIndex: "operation" },
  ];

  const dataSource = carts.flatMap((cart) =>
    cart.products.map((product) => ({
      key: `${cart.id}-${product.id}`,
      img: <img src={product.thumbnail} alt={product.title} width={50} />,
      name: product.title,
      price: product.price,
      quantity: product.quantity,
      totalPrice: product.total,
      operation: <Button color="orange" variant="outlined">
        Xoá sản phẩm
      </Button>
    })
    ));

  return (
    <div className={`p-10 ${bgClass}`}>
    <p className='mt-20 text-center text-5xl'>GIỎ HÀNG CỦA TÔI</p>
      <Table
      className='p-10'
      rowSelection={rowSelection}
      columns={columns}
      dataSource={dataSource}
      pagination={false}
    />
    </div>


  )
}

export default CartPage
