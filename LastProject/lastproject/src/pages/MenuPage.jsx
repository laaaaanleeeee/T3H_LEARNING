import React, { useEffect, useState } from 'react';
import { Card, Button, ConfigProvider, Space, Pagination, Modal, Input, Select } from 'antd';
import { FaCartPlus } from "react-icons/fa6";
import { createStyles } from 'antd-style';
import { Rate } from 'antd';

const { Meta } = Card;
const { Search } = Input;

const MenuPage = () => {
  const { styles } = useStyle();
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(0);
  const pageSize = 15;
  const [allProducts, setAllProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchValue, setSearchValue] = useState('');
  const [sortValue, setSortValue] = useState('');
  const [sortOrder, setSortOrder] = useState('');

  const showModal = async (product) => {
    setOpen(true);
    const response = await fetch(`https://dummyjson.com/products/${product.id}`);
    const data = await response.json();
    setSelectedProduct(data);
  };

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 0);
  };

  const handleCancel = () => setOpen(false);

  const handleChange = (value) => {
    if (value === 'asc') {
      setSortValue('price');
      setSortOrder('asc');
    } else if (value === 'desc') {
      setSortValue('price');
      setSortOrder('desc');
    } else {
      setSortValue('');
      setSortOrder('');
    }
    setCurrentPage(1);
  };

  const onSearch = (value) => {
    setSearchValue(value);
    setCurrentPage(1);
  };

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products?limit=194`);
        const data = await res.json();
        setAllProducts(data.products);
        setTotal(data.total);
      } catch (error) {
        console.error('Lỗi fetch dữ liệu:', error);
      }
    };
    fetchAll();
  }, []);

  useEffect(() => {
    let filtered = [...allProducts];

    if (searchValue) {
      filtered = filtered.filter(p =>
        p.title.toLowerCase().includes(searchValue.toLowerCase())
      );
    }

    if (sortValue && sortOrder) {
      filtered.sort((a, b) =>
        sortOrder === 'asc' ? a[sortValue] - b[sortValue] : b[sortValue] - a[sortValue]
      );
    }

    const start = (currentPage - 1) * pageSize;
    const end = start + pageSize;

    setProducts(filtered.slice(start, end));
    setTotal(filtered.length);
  }, [currentPage, searchValue, sortValue, sortOrder, allProducts]);

  return (
    <div className='w-full pt-30'>
      <p className='text-5xl text-center'>DANH SÁCH SẢN PHẨM</p>
      <div className='flex flex-col justify-center items-center mt-20'>
        <Search style={{ width: 500 }} placeholder="Nhập từ khoá..." onSearch={onSearch} enterButton />
        <div className='mt-5'>
          <Select
            defaultValue=""
            style={{ width: 180 }}
            onChange={handleChange}
            options={[
              { value: '', label: 'Sắp xếp theo' },
              { value: 'asc', label: 'Giá tăng dần' },
              { value: 'desc', label: 'Giá giảm dần' },
            ]}
          />
        </div>
      </div>

      <div className='flex flex-wrap p-10 justify-center items-center'>
        {products.map(product => (
          <Card
            key={product.id}
            style={{ width: 440, margin: 10 }}
            cover={<img src={product.thumbnail} alt={product.title} style={{ height: 150, objectFit: 'cover' }} />}
          >
            <div className="flex flex-col">
              <p className="font-bold">{product.title}</p>
              <p>Price: {product.price} $</p>
              <p><Rate allowHalf defaultValue={product.rating} /></p>
              <ConfigProvider button={{ className: styles.linearGradientButton }}>
                <Button
                  type="primary"
                  size="middle"
                  style={{ marginTop: 10 }}
                  onClick={() => showModal(product)}
                >
                  XEM CHI TIẾT
                </Button>
              </ConfigProvider>
            </div>
          </Card>

        ))}

        <Modal
          title={selectedProduct?.title}
          open={open}
          onOk={handleOk}
          okText={<FaCartPlus />}
          confirmLoading={confirmLoading}
          onCancel={handleCancel}
          width={1200}
        >
          {selectedProduct && (
            <div className="flex gap-8">
              <div className="flex-shrink-0">
                <img
                  src={selectedProduct.thumbnail}
                  alt={selectedProduct.title}
                  style={{ width: 300, height: 300, objectFit: 'cover', borderRadius: 8 }}
                />
              </div>
              <div className="flex flex-col gap-3 text-base">
                <p><strong>Mô tả:</strong> {selectedProduct.description}</p>
                <p><strong>Giá:</strong> {selectedProduct.price} $</p>
                <p><strong>Hãng:</strong> {selectedProduct.brand}</p>
                <p><strong>Danh mục:</strong> {selectedProduct.category}</p>
                <p><strong>Tỷ lệ giảm giá:</strong> {selectedProduct.discountPercentage}%</p>
                <p><strong>Đánh giá:</strong> {selectedProduct.rating}</p>
                <p><strong>Số lượng còn lại:</strong> {selectedProduct.stock}</p>
              </div>
            </div>
          )}
        </Modal>
      </div>

      <div className='flex justify-center mb-20'>
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={total}
          onChange={(page) => setCurrentPage(page)}
          showSizeChanger={false}
        />
      </div>
    </div>
  );
};

export default MenuPage;

const useStyle = createStyles(({ prefixCls, css }) => ({
  linearGradientButton: css`
    &.${prefixCls}-btn-primary:not([disabled]):not(.${prefixCls}-btn-dangerous) {
      > span {
        position: relative;
      }
      &::before {
        content: '';
        background: linear-gradient(135deg, #6253e1, #04befe);
        position: absolute;
        inset: -1px;
        opacity: 1;
        transition: all 0.3s;
        border-radius: inherit;
      }
      &:hover::before {
        opacity: 0;
      }
    }
  `,
}));
