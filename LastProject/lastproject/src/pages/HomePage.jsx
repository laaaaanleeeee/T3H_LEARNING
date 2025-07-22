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
import Video from "../assets/Food Promo Video - Manual Mode Productions - Manual Mode Productions (1080p, h264).mp4"
import { InputNumber, DatePicker } from 'antd';
import HomeCarousel from '../components/HomeCarousel';
import StepBooking from '../components/StepBooking';
import ReasonChooseUs from '../components/ReasonChooseUs';
import { useTheme } from "../hook/useTheme";


const onChange = value => {
  console.log('changed', value);
};



const HomePage = () => {
  const { theme } = useTheme();

  const bgClass1 = theme === 'dark' ? 'bg-black' : 'bg-gray-100';
  const bgClass2 = theme === 'dark' ? 'bg-black' : 'bg-gray-200';


  
  return (
    <>
      <Carousel autoplay className="w-full pt-20">
        <HomeCarousel srcImg={ImageMeal1} />
        <HomeCarousel srcImg={ImageMeal2} />
        <HomeCarousel srcImg={ImageMeal3} />
      </Carousel>



      <div className={`pt-10 pb-10 ${bgClass1}`}>
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
            <video className='w-[550px] h-80' controls muted loop>
              <source src={Video} type='video/mp4' />
            </video>
          </div>

        </div>
      </div>



      <div className='container mx-auto mb-10 px-4'>
        <p className='flex justify-center mt-20 text-4xl font-semibold'>5 BƯỚC ĐỂ ĐẶT TIỆC</p>

        <div className='flex flex-wrap justify-center items-start gap-x-6 gap-y-10 mt-10 mb-20'>

          <StepBooking icon_step={<BookOutlined className='text-5xl' />} num_step="1" title_step="TÌM HIỂU THÔNG TIN" content_step="Khách hàng tìm hiểu thông tin và đăng kí tư vấn" />
          <StepBooking icon_step={<FileOutlined className='text-5xl' />} num_step="2" title_step="LIÊN HỆ TƯ VẤN" content_step="Nhân viên liên hệ trong 2 tiếng để nhận thông tin" />
          <StepBooking icon_step={<UserOutlined className='text-5xl' />} num_step="3" title_step="KÝ KẾT HỢP ĐỒNG" content_step="Khách hàng tìm hiểu thông tin và đăng kí tư vấn" />
          <StepBooking icon_step={<WalletOutlined className='text-5xl' />} num_step="4" title_step="PHỤC VỤ TIỆC" content_step="Khách hàng tìm hiểu thông tin và đăng kí tư vấn" />
          <StepBooking icon_step={<BookOutlined className='text-5xl' />} num_step="5" title_step="THANH TOÁN" content_step="Khách hàng tìm hiểu thông tin và đăng kí tư vấn" />

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




      <div className={`w-full p-10 ${bgClass1} flex flex-col md:flex-row flex-wrap justify-center items-start gap-8`}>

        <div className='flex flex-col gap-5 mt-10 mb-10'>

          <div className='max-w-sm bg-gray-700 text-white p-6 rounded shadow'>
            <p className='text-center text-4xl font-bold mb-5'>DỊCH VỤ</p>
            <div className='flex justify-center items-center flex-wrap gap-3'>
              <p className='text-xl font-semibold m-3'>TIỆC TẠI GIA</p>
              <p className='text-xl font-semibold m-3'>TIỆC CƯỚI HỎI</p>
              <p className='text-xl font-semibold m-3'>TIỆC BUFFET</p>
              <p className='text-xl font-semibold m-3'>TIỆC SỰ KIỆN</p>
              <p className='text-xl font-semibold m-3'>TIỆC TEA BREAK</p>
            </div>
          </div>

          <div className='max-w-sm bg-amber-800 text-white p-6 rounded shadow'>
            <p className='text-center text-4xl font-bold mb-5'>LIÊN HỆ</p>
            <p className='text-lg mb-2 text-center'>Address: abc@cmcglobal.vn</p>
            <p className='text-lg text-center'>Hotline: 0919319071</p>
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




      <div className={`w-full px-6 py-16 ${bgClass2}`}>
        <p className="text-center text-4xl font-semibold mb-12">VÌ SAO LỰA CHỌN CHÚNG TÔI</p>

        <div className="flex flex-wrap justify-center gap-5">

          <ReasonChooseUs srcImg={ImageMeal1} title_reason="SỰ LỰA CHỌN ẨM THỰC SỐ 1" detail_reason="Thuộc Golden Gate Group – 15 năm kinh nghiệm, hơn 400 nhà hàng toàn quốc." />
          <ReasonChooseUs srcImg={ImageMeal2} title_reason="THỰC PHẨM AN TOÀN" detail_reason="Đảm bảo an toàn vệ sinh thực phẩm từ nguồn cung cấp đến khâu chế biến." />
          <ReasonChooseUs srcImg={ImageMeal3} title_reason="THỰC ĐƠN ĐA DẠNG" detail_reason="Menu phong phú, kết hợp tinh hoa ẩm thực Á – Âu, đa dạng lựa chọn." />
          <ReasonChooseUs srcImg={ImageMeal1} title_reason="PHỤC VỤ CHUYÊN NGHIỆP" detail_reason="Tư vấn tận tâm, phục vụ chu đáo, dịch vụ linh hoạt, thanh toán tiện lợi." />

        </div>
      </div>




    </>
  )
}

export default HomePage
