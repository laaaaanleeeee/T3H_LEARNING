import React, { useEffect, useState } from 'react'
import { Card, Button, ConfigProvider, Space, Pagination, Modal } from 'antd';
const { Meta } = Card;
import { createStyles } from 'antd-style';

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


const MenuPage = () => {

  const { styles } = useStyle();
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(0);
  const pageSize = 21;
  const [products, setProducts] = useState([]);

  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('Content of the modal');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const showModal = (product) => {
    setSelectedProduct(product);
    setOpen(true);
  };
  const handleOk = () => {
    setModalText('The modal will be closed after two seconds');
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };
  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
  };


  useEffect(() => {
    const skip = (currentPage - 1) * pageSize;
    fetch(`https://dummyjson.com/products?limit=${pageSize}&skip=${skip}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setProducts(data.products);
        setTotal(data.total);
      });
  }, [currentPage]);


  return (


    <div className='w-full pt-30'>
      <p className='text-5xl text-center'>DANH SÁCH SẢN PHẨM</p>

      <div className='flex flex-wrap p-20 justify-center items-center'>
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
                      <p><strong>Giá:</strong> {selectedProduct.price} VND</p>
                      <p><strong>Hãng:</strong> {selectedProduct.brand}</p>
                      <p><strong>Danh mục:</strong> {selectedProduct.category}</p>
                      <p><strong>Tỷ lệ giảm giá:</strong> {selectedProduct.discountPercentage}</p>
                    </div>
                  )}
                </Modal>

              </Space>
            </ConfigProvider>
          </Card>

        ))}
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
