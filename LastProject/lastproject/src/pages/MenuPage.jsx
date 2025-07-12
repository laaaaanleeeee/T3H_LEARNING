import React, { useEffect, useState } from 'react'
import { Card, Button, ConfigProvider, Space, Pagination, Modal } from 'antd';
const { Meta } = Card;
import { createStyles } from 'antd-style';
import { Input, Select } from 'antd';

const { Search } = Input;

const MenuPage = () => {
  const { styles } = useStyle();
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(0);
  const pageSize = 5;
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

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
  };

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
  };

  const onSearch = (value) => {
    setSearchValue(value);
    setCurrentPage(1);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = 'https://dummyjson.com/products';

        if (searchValue) {
          url = `https://dummyjson.com/products/search?q=${searchValue}`;
        }

        const response = await fetch(url);
        const data = await response.json();

        let allProducts = data.products;

        if (sortValue && sortOrder) {
          allProducts = allProducts.sort((a, b) => {
            if (sortOrder === 'asc') return a[sortValue] - b[sortValue];
            else return b[sortValue] - a[sortValue];
          });
        }

        const start = (currentPage - 1) * pageSize;
        const end = start + pageSize;
        const pagedProducts = allProducts.slice(start, end);

        setProducts(pagedProducts);
        setTotal(allProducts.length);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, [currentPage, searchValue, sortValue, sortOrder]);



  return (


    <div className='w-full pt-30'>
      <p className='text-5xl text-center'>DANH SÁCH SẢN PHẨM</p>

      <div className='flex flex-col justify-center items-center mt-20'>
        <div>
          <Search style={{ width: 500 }} placeholder="Nhập từ khoá..." onSearch={onSearch} enterButton />
        </div>
        <div className='mt-5'>
          <Space wrap>
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
          </Space>
        </div>
      </div>

      <div className='flex flex-wrap p-10 justify-center items-center'>
        {products.map(product => (
          <Card
            key={product.id}
            style={{ width: 400, margin: 10 }}
            cover={
              <img
                src={product.thumbnail}
              />
            }
          >
            <Meta
              title={product.title}
              description={product.description}
            />

            <ConfigProvider
              button={{
                className: styles.linearGradientButton,
              }}
            >
              <Space>
                <Button type="primary" size="large" style={{ marginTop: 20 }} onClick={() => showModal(product)}>
                  XEM CHI TIẾT
                </Button>
              </Space>
            </ConfigProvider>
          </Card>
        ))}


        <Modal
          title={selectedProduct?.title}
          open={open}
          onOk={handleOk}
          confirmLoading={confirmLoading}
          onCancel={handleCancel}
        >
          {selectedProduct && (
            <div className="flex flex-col gap-4">
              <p><strong>Mô tả:</strong> {selectedProduct.description}</p>
              <p><strong>Giá:</strong> {selectedProduct.price} $</p>
              <p><strong>Hãng:</strong> {selectedProduct.brand}</p>
              <p><strong>Danh mục:</strong> {selectedProduct.category}</p>
              <p><strong>Tỷ lệ giảm giá:</strong> {selectedProduct.discountPercentage}</p>
              <p><strong>Đánh giá:</strong> {selectedProduct.rating}</p>
              <p><strong>Số lượng còn lại:</strong> {selectedProduct.stock}</p>

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
  )
}

export default MenuPage


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