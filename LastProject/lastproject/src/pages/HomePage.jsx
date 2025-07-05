import React from 'react'
import { Carousel } from 'antd';
import ImageMeal1 from "../assets/pexels-chanwalrus-958545.jpg"
import ImageMeal2 from "../assets/pexels-kylarose-954677.jpg"
import ImageMeal3 from "../assets/pexels-valeriya-1639562.jpg"
import { BookOutlined } from "@ant-design/icons"
import { FileOutlined } from "@ant-design/icons"
import { UserOutlined } from "@ant-design/icons"
import { WalletOutlined } from "@ant-design/icons"
import BackgroundImage from "../assets/pexels-valeriya-1639562.jpg";
import { FacebookFilled } from '@ant-design/icons';
import { YoutubeFilled } from '@ant-design/icons';
import Video from "../assets/Food Promo Video - Manual Mode Productions - Manual Mode Productions (1080p, h264).mp4"
import LogoFooter from "../assets/pngimg.com - mastercard_PNG16.png";
import LogoBCT from "../assets/logo-da-thong-bao-bo-cong-thuong.webp";
import { InputNumber, DatePicker } from 'antd';

const onChange = value => {
  console.log('changed', value);
};



const HomePage = () => {
  return (
    <>
      <Carousel autoplay className="w-full">
        <div className="relative">
          <img className="w-full h-[600px] object-cover" src={ImageMeal1} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
            <h2 className="text-4xl font-bold">ƯU ĐÃI LÊN TỚI 30%</h2>
            <p className="text-4xl font-bold mt-2">KHI ĐẶT SET MENU SUM VẦY</p>
            <p className="mt-1 mb-5 text-sm">Áp dụng cho tiệc tại Hà Nội, từ 15/11 - 20/11/2021</p>
            <button className="mt-5 px-6 py-2 bg-orange-600 text-white rounded">
              XEM CHI TIẾT ƯU ĐÃI
            </button>
          </div>
        </div>

        <div className="relative">
          <img className="w-full h-[600px] object-cover" src={ImageMeal2} alt="Meal 2" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
            <h2 className="text-4xl font-bold">ƯU ĐÃI LÊN TỚI 30%</h2>
            <p className="text-2xl mt-2">KHI ĐẶT SET MENU SUM VẦY</p>
            <p className="mt-1 text-sm">Áp dụng cho tiệc tại Hà Nội, từ 15/11 - 20/11/2021</p>
            <button className="mt-4 px-6 py-2 bg-orange-600 text-white rounded">
              XEM CHI TIẾT ƯU ĐÃI
            </button>
          </div>
        </div>

        <div className="relative">
          <img className="w-full h-[600px] object-cover" src={ImageMeal3} alt="Meal 3" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
            <h2 className="text-4xl font-bold">ƯU ĐÃI LÊN TỚI 30%</h2>
            <p className="text-2xl mt-2">KHI ĐẶT SET MENU SUM VẦY</p>
            <p className="mt-1 text-sm">Áp dụng cho tiệc tại Hà Nội, từ 15/11 - 20/11/2021</p>
            <button className="mt-4 px-6 py-2 bg-orange-600 text-white rounded">
              XEM CHI TIẾT ƯU ĐÃI
            </button>
          </div>
        </div>
      </Carousel>



      <div className='bg-gray-100 pt-10 pb-10'>
        <div className='container mx-auto flex flex-col md:flex-row justify-center items-center gap-8 px-4'>

          <div className='text-lg flex flex-col p-5 max-w-xl'>
            <p className='text-3xl mb-5 font-bold'>Tiệc tại gia chất nhà hàng</p>
            <p className='mb-4'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quae fugit accusantium commodi esse modi pariatur praesentium, voluptas dolor ea qui? Vel dolore ipsam vitae voluptatem esse repellat nobis sint.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quae fugit accusantium commodi esse modi pariatur praesentium, voluptas dolor ea qui? Vel dolore ipsam vitae voluptatem esse repellat nobis sint.
            </p>
          </div>

          <div className='flex justify-center items-center'>
            <video className='w-[550px] h-80' autoPlay muted loop>
              <source src={Video} type='video/mp4' />
            </video>
          </div>

        </div>
      </div>



      <div className='container mx-auto mb-10 px-4'>
        <p className='flex justify-center mt-20 text-4xl font-semibold'>5 BƯỚC ĐỂ ĐẶT TIỆC</p>

        <div className='flex flex-wrap justify-center items-start gap-x-6 gap-y-10 mt-10 mb-20'>

          <div className='relative flex flex-col items-center text-center w-48'>
            <div className='w-40 h-40 bg-gray-100 flex justify-center items-center rounded-full'>
              <BookOutlined className='text-5xl' />
            </div>
            <div className='w-10 h-10 absolute top-[160px] right-[95px] -translate-y-1/2 translate-x-1/2 text-white bg-amber-600 flex justify-center items-center rounded-full'>
              1
            </div>
            <p className='mt-10 font-bold'>TÌM HIỂU THÔNG TIN</p>
            <p>Khách hàng tìm hiểu thông tin và đăng kí tư vấn</p>
          </div>

          <div className='relative flex flex-col items-center text-center w-48'>
            <div className='w-40 h-40 bg-gray-100 flex justify-center items-center rounded-full'>
              <FileOutlined className='text-5xl' />
            </div>
            <div className='w-10 h-10 absolute top-[160px] right-[95px] -translate-y-1/2 translate-x-1/2 text-white bg-amber-600 flex justify-center items-center rounded-full'>
              2
            </div>
            <p className='mt-10 font-bold'>LIÊN HỆ TƯ VẤN</p>
            <p>Nhân viên liên hệ trong 2 tiếng để nhận thông tin</p>
          </div>

          <div className='relative flex flex-col items-center text-center w-48'>
            <div className='w-40 h-40 bg-gray-100 flex justify-center items-center rounded-full'>
              <UserOutlined className='text-5xl' />
            </div>
            <div className='w-10 h-10 absolute top-[160px] right-[95px] -translate-y-1/2 translate-x-1/2 text-white bg-amber-600 flex justify-center items-center rounded-full'>
              3
            </div>
            <p className='mt-10 font-bold'>KÝ KẾT HỢP ĐỒNG</p>
            <p>Khách hàng tìm hiểu thông tin và đăng kí tư vấn</p>
          </div>

          <div className='relative flex flex-col items-center text-center w-48'>
            <div className='w-40 h-40 bg-gray-100 flex justify-center items-center rounded-full'>
              <WalletOutlined className='text-5xl' />
            </div>
            <div className='w-10 h-10 absolute top-[160px] right-[95px] -translate-y-1/2 translate-x-1/2 text-white bg-amber-600 flex justify-center items-center rounded-full'>
              4
            </div>
            <p className='mt-10 font-bold'>PHỤC VỤ TIỆC</p>
            <p>Khách hàng tìm hiểu thông tin và đăng kí tư vấn</p>
          </div>

          <div className='relative flex flex-col items-center text-center w-48'>
            <div className='w-40 h-40 bg-gray-100 flex justify-center items-center rounded-full'>
              <BookOutlined className='text-5xl' />
            </div>
            <div className='w-10 h-10 absolute top-[160px] right-[95px] -translate-y-1/2 translate-x-1/2 text-white bg-amber-600 flex justify-center items-center rounded-full'>
              5
            </div>
            <p className='mt-10 font-bold'>THANH TOÁN</p>
            <p>Khách hàng tìm hiểu thông tin và đăng kí tư vấn</p>
          </div>

        </div>
      </div>



      <div className='w-full text-white bg-cover bg-center px-4 py-12' style={{ backgroundImage: `url(${BackgroundImage})` }}>
        <div className='flex flex-col md:flex-row flex-wrap justify-center items-start gap-8 mt-10 mb-10'>

          <div className='flex flex-col max-w-xs m-5'>
            <p className='text-3xl font-bold'>ĐẶT TIỆC Ở ĐÂY</p>
            <p className='mt-3'>
              Đặt tiệc ngay hôm nay để những sự kiện quan trọng của bạn trở nên đơn giản và dễ dàng hơn bao giờ hết
            </p>
          </div>

          <div className='flex flex-col m-5'>
            <p className='text-3xl mb-5 font-bold'>CHỌN NGÀY ĐẶT</p>
            <DatePicker />
          </div>

          <div className='flex flex-col m-5'>
            <p className='text-3xl mb-5 font-bold'>SỐ BÀN TIỆC</p>
            <InputNumber
              style={{ width: 170 }}
              min={1}
              max={10}
              defaultValue={0}
              onChange={onChange}
              changeOnWheel
            />
          </div>

          <div className='flex flex-col m-5'>
            <button className='p-3 m-2 border bg-orange-500 rounded text-white'>Đặt tiệc ngay</button>
            <button className='p-3 m-2 border rounded text-white'>Xem thực đơn</button>
          </div>

        </div>
      </div>




      <div className='w-full p-10 bg-gray-100 flex flex-col md:flex-row flex-wrap justify-center items-start gap-8'>

        <div className='flex flex-col gap-5 mt-10 mb-10'>

          <div className='max-w-sm bg-gray-700 text-white p-6 rounded shadow'>
            <p className='text-center text-4xl font-bold mb-5'>DỊCH VỤ</p>
            <div className='flex justify-center items-center flex-wrap gap-3'>
              <p className='text-xl font-semibold m-3'><b>TIỆC TẠI GIA</b></p>
              <p className='text-xl font-semibold m-3'><b>TIỆC CƯỚI HỎI</b></p>
              <p className='text-xl font-semibold m-3'><b>TIỆC BUFFET</b></p>
              <p className='text-xl font-semibold m-3'><b>TIỆC SỰ KIỆN</b></p>
              <p className='text-xl font-semibold m-3'><b>TIỆC TEA BREAK</b></p>
            </div>
          </div>

          <div className='max-w-sm bg-amber-800 text-white p-6 rounded shadow'>
            <p className='text-center text-4xl font-bold mb-5'>LIÊN HỆ</p>
            <p className='text-lg mb-2 text-center'><b>Address:</b> abc@cmcglobal.vn</p>
            <p className='text-lg text-center'><b>Hotline:</b> 0919319071</p>
          </div>

        </div>

        <div className='flex flex-col items-center bg-cover bg-center text-white p-6 rounded shadow w-sm min-h-[480px] mt-10 mb-10' style={{ backgroundImage: `url(${BackgroundImage})` }}>
          <p className='text-3xl font-bold mb-5'>SET MENU</p>
          <a href='#' className='underline text-lg'>Xem chi tiết</a>
        </div>

        <div className='flex flex-col items-center bg-cover bg-center text-white p-6 rounded shadow w-sm min-h-[480px] mt-10 mb-10' style={{ backgroundImage: `url(${BackgroundImage})` }}>
          <p className='text-3xl font-bold mb-5'>MENU TỰ CHỌN</p>
          <a href='#' className='underline text-lg'>Xem chi tiết</a>
        </div>

      </div>




      <div className="w-full px-6 py-16 bg-white">
        <p className="text-center text-4xl font-semibold mb-12">VÌ SAO LỰA CHỌN CHÚNG TÔI</p>

        <div className="flex flex-wrap justify-center gap-5">
          <div className="max-w-xs text-center">
            <img src={ImageMeal1} alt="" className="w-70 h-70 mx-auto object-cover rounded" />
            <p className="mt-5 text-base font-semibold">SỰ LỰA CHỌN ẨM THỰC SỐ 1</p>
            <p className="mt-2 text-sm text-gray-700">
              Thuộc Golden Gate Group – 15 năm kinh nghiệm, hơn 400 nhà hàng toàn quốc.
            </p>
          </div>

          <div className="max-w-xs text-center">
            <img src={ImageMeal2} alt="" className="w-70 h-70 mx-auto object-cover rounded" />
            <p className="mt-5 text-base font-semibold">THỰC PHẨM AN TOÀN</p>
            <p className="mt-2 text-sm text-gray-700">
              Đảm bảo an toàn vệ sinh thực phẩm từ nguồn cung cấp đến khâu chế biến.
            </p>
          </div>

          <div className="max-w-xs text-center">
            <img src={ImageMeal3} alt="" className="w-70 h-70 mx-auto object-cover rounded" />
            <p className="mt-5 text-base font-semibold">THỰC ĐƠN ĐA DẠNG</p>
            <p className="mt-2 text-sm text-gray-700">
              Menu phong phú, kết hợp tinh hoa ẩm thực Á – Âu, đa dạng lựa chọn.
            </p>
          </div>

          <div className="max-w-xs text-center">
            <img src={ImageMeal1} alt="" className="w-70 h-70 mx-auto object-cover rounded" />
            <p className="mt-5 text-base font-semibold">PHỤC VỤ CHUYÊN NGHIỆP</p>
            <p className="mt-2 text-sm text-gray-700">
              Tư vấn tận tâm, phục vụ chu đáo, dịch vụ linh hoạt, thanh toán tiện lợi.
            </p>
          </div>
        </div>
      </div>




      <div className='container-fluid p-10 text-white' style={{ backgroundImage: `url(${BackgroundImage})` }}>
        <div className='flex justify-center'>
          <div className='max-w-xs m-5'>
            <p className='text-2xl mb-3'><b>Về chúng tôi</b></p>
            <p><b>Số điện thoại: 095.366.4722</b></p>
            <p><b>Địa chỉ: số 33 Nhân Chính, Trung Hòa, Cầu Giấy, Hà Nội</b></p>
          </div>

          <div className='max-w-xs m-5'>
            <p className='text-2xl mb-3'><b>Phương thức thanh toán</b></p>
            <div className='flex flex-wrap'>
              <img className='w-10 h-10 mr-5 mb-3 flex justify-center items-center' src={LogoFooter}></img>
              <img className='w-10 h-10 mr-5 mb-3 flex justify-center items-center' src={LogoFooter}></img>
              <img className='w-10 h-10 mr-5 mb-3 flex justify-center items-center' src={LogoFooter}></img>
              <img className='w-10 h-10 mr-5 mb-3 flex justify-center items-center' src={LogoFooter}></img>
              <img className='w-10 h-10 mr-5 mb-3 flex justify-center items-center' src={LogoFooter}></img>
              <img className='w-10 h-10 mr-5 mb-3 flex justify-center items-center' src={LogoFooter}></img>
              <img className='w-10 h-10 mr-5 mb-3 flex justify-center items-center' src={LogoFooter}></img>
            </div>
          </div>

          <div className='max-w-xs m-5'>
            <p className='text-2xl mb-3'><b>Truyền thông xã hội</b></p>
            <div className='flex'>
              <FacebookFilled className='mr-2' />
              <a href='#'><p><b>Facebook</b></p></a>
            </div>

            <div className='flex'>
              <YoutubeFilled className='mr-2' />
              <a href='#'><p><b>Youtube</b></p></a>
            </div>
          </div>


          <div className='max-w-xs m-5'>
            <p className='text-2xl mb-3'><b>Hỗ trợ khách hàng</b></p>
            <p><b>Liên hệ </b> Hotline: 036.555.1123</p>
            <p>Email: happy.@gmail.com</p>
            <p><b>Địa chỉ:</b> Số 33 Nhân Chính, Trung Hòa, Cầu Giấy, Hà Nội</p>
          </div>
        </div>


        <hr></hr>

        <div className='flex items-center justify-between p-5'>
          <div className='mt-5 ml-10'>
            <p className='text-2xl'>Công ty TNHH Minh Trí</p>
            <p>số CND/DN/ cấp ngày 2/1/2020</p>
          </div>

          <div className='mt-5 mr-60'>
            <img className='w-30 h-10 flex justify-center items-center' src={LogoBCT}></img>
            <p>© Thông báo</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
