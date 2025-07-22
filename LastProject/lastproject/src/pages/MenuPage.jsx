import React, { useEffect, useState } from 'react';
import { Card, Button, ConfigProvider, Pagination, Modal, Input, Select } from 'antd';
import { FaCartPlus } from "react-icons/fa6";
import { createStyles } from 'antd-style';
import { Rate } from 'antd';
import { useCount } from "../hook/useCount";
import { useTheme } from "../hook/useTheme";


const { Meta } = Card;
const { Search } = Input;

const MenuPage = () => {
  const { styles } = useStyle();
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(0);
  const pageSize = 20;
  const [allProducts, setAllProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchValue, setSearchValue] = useState('');
  const [sortValue, setSortValue] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const { addCount } = useCount();
  const { theme } = useTheme();
    
  const bgClass = theme === 'dark' ? 'bg-black' : 'bg-orange-50';

  const showModal = async (product) => {
    setOpen(true);
    const response = await fetch(`https://dummyjson.com/products/${product.id}`);
    const data = await response.json();
    setSelectedProduct(data);
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
    <div className={`w-full px-4 md:px-12 py-10 ${bgClass} min-h-screen`}>
      <h1 className="text-4xl mt-20 font-bold text-center text-orange-600 mb-10 uppercase">
        Danh sách sản phẩm
      </h1>

      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-10">
        <Search
          style={{ width: 400 }}
          placeholder="Tìm kiếm sản phẩm..."
          onSearch={onSearch}
          enterButton
          allowClear
        />
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
        {products.map(product => (
          <Card
            key={product.id}
            className="w-full max-w-xs shadow-lg rounded-lg"
            cover={
              <img
                src={product.thumbnail}
                alt={product.title}
                className="h-48 object-cover rounded-t-lg"
              />
            }
          >
            <div className="flex flex-col gap-2">
              <p className="text-lg font-semibold text-gray-800">{product.title}</p>
              <p className="text-sm text-gray-600">Giá: <span className="text-red-500 font-medium">${product.price}</span></p>
              <div className="flex items-center">
                <Rate allowHalf disabled defaultValue={product.rating} />
              </div>
              <Button
                type="primary"
                size="middle"
                className={styles.linearGradientButton}
                style={{ marginTop: 10 }}
                onClick={() => showModal(product)}
              >
                XEM CHI TIẾT
              </Button>

            </div>
          </Card>
        ))}
      </div>

      <Modal
        title={selectedProduct?.title}
        open={open}
        onOk={() => {
          addCount();
          handleCancel();
        }}
        okText={<><FaCartPlus /></>}
        onCancel={handleCancel}
        width={800}
      >
        {selectedProduct && (
          <div className="flex flex-col md:flex-row gap-8">
            <img
              src={selectedProduct.thumbnail}
              alt={selectedProduct.title}
              className="w-full md:w-80 h-80 object-cover rounded-lg"
            />
            <div className="flex flex-col gap-2 text-base">
              <p><strong>Mô tả:</strong> {selectedProduct.description}</p>
              <p><strong>Giá:</strong> ${selectedProduct.price}</p>
              <p><strong>Hãng:</strong> {selectedProduct.brand}</p>
              <p><strong>Danh mục:</strong> {selectedProduct.category}</p>
              <p><strong>Giảm giá:</strong> {selectedProduct.discountPercentage}%</p>
              <p><strong>Đánh giá:</strong> {selectedProduct.rating}</p>
              <p><strong>Số lượng:</strong> {selectedProduct.stock}</p>
            </div>
          </div>
        )}
      </Modal>

      <div className="flex justify-center mt-12">
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
