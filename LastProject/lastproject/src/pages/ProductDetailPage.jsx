import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Rate, Button as AntButton } from 'antd';
import { RiCoupon3Line } from "react-icons/ri";
import { useCart } from "../hook/useCart";
import { useTheme } from "../hook/useTheme";
import { getDetailProduct } from '../services/productService';

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [count, setCount] = useState(1);
  const { addCount } = useCart();
  const { theme } = useTheme();


  const bgClassItem = theme === 'dark' ? 'bg-black' : 'bg-orange-50';
  const cardBgColor = theme === 'dark' ? '#333' : '#fff';
  const cardBorderColor = theme === 'dark' ? '#444' : '#eaeaea';
  const priceBgColor = theme === 'dark' ? 'bg-neutral-700' : 'bg-white';

   useEffect(() => {
    const fetchProduct = async () => {
      const res = await getDetailProduct(id);
      const data = res.data;
      setProduct(data);
    };
    fetchProduct();
  }, [id]);

  if (!product) return <p className="text-center mt-10">Đang tải sản phẩm...</p>;

  return (
    <div className="p-6 md:p-10 mt-20 max-w-7xl mx-auto">
      <div className={`flex md:flex-row gap-10 ${bgClassItem} p-6 md:p-10 rounded-xl shadow-lg`}>
        <div className="flex-1">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-auto object-cover rounded-lg border bg-white"
            style={{
              backgroundColor: cardBgColor,
              borderColor: cardBorderColor,
            }}
          />
        </div>

        <div className="flex-1 flex flex-col gap-4 text-base">
          <h1 className="text-3xl font-bold text-orange-600">{product.title}</h1>

          <div className="flex items-center gap-4">
            <p className="text-xl font-semibold underline">{product.rating}</p>
            <Rate disabled allowHalf defaultValue={product.rating} />
            <span className="text-xl">|</span>
            <p>
              Tình trạng: <span className="underline font-semibold">{product.availabilityStatus}</span>
            </p>
          </div>

          <div className={`flex items-center gap-4 ${priceBgColor}  px-6 py-4 rounded-lg shadow`}>
            <p className="text-2xl text-orange-600 font-bold">
              <span className="underline">đ</span> {(product.price * 26000).toFixed()}
            </p>
            <RiCoupon3Line className="text-orange-600 text-2xl" />
            <p className="line-through text-gray-500">
              đ{(product.price * 26000 * (1 + product.discountPercentage / 100)).toFixed()}
            </p>
          </div>

          <p><strong>Thông tin vận chuyển:</strong> {product.shippingInformation}</p>


          <div className="flex items-center gap-4 mt-6">
            <p><strong>Số lượng:</strong></p>
            <button
              onClick={() => setCount(Math.max(1, count - 1))}
              className="w-8 h-8 border rounded hover:bg-orange-100 transition cursor-pointer"
            >
              -
            </button>
            <span className="text-lg">{count}</span>
            <button
              onClick={() => setCount(count + 1)}
              className="w-8 h-8 border rounded hover:bg-orange-100 transition cursor-pointer"
            >
              +
            </button>
          </div>

          <div className="flex flex-wrap gap-4 mt-8">
            <button className="bg-white border border-orange-500 text-orange-500 px-6 py-2 rounded hover:bg-orange-100 transition cursor-pointer" onClick={addCount}>
              Thêm vào giỏ hàng
            </button>
            <button className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition cursor-pointer">
              Mua ngay
            </button>
          </div>
        </div>

      </div>

      <div className={`flex md:flex-col gap-10 ${bgClassItem} p-6 md:p-10 rounded-xl shadow-lg mt-5`}>
        <p><strong className='text-2xl text-orange-600'>CHI TIẾT SẢN PHẨM</strong></p>
        <p><strong>Danh mục:</strong> {product.category}</p>
        <p><strong>Thương hiệu:</strong> {product.brand}</p>
        <p><strong>Mã đơn vị lưu kho (SKU):</strong> {product.sku}</p>
        <p><strong>Trọng lượng (g):</strong> {product.weight}</p>
        <p><strong>Thông tin bảo hành:</strong> {product.warrantyInformation}</p>
        <p><strong>Số lượng:</strong> {product.stock}</p>
        <p><strong>Chính sách đổi trả:</strong> {product.returnPolicy}</p>
        <p><strong className='text-2xl text-orange-600'>MÔ TẢ SẢN PHẨM</strong></p>
        <p><strong>Mô tả: </strong> {product.description}</p>





      </div>


    </div>
  );
};

export default ProductDetailPage;
