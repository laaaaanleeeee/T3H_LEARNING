import React from 'react'
import Video from "../assets/Food Promo Video - Manual Mode Productions - Manual Mode Productions (1080p, h264).mp4"
import BackgroundImage from "../assets/pexels-valeriya-1639562.jpg";
import { PlusOutlined } from '@ant-design/icons';
import { useTheme } from "../hook/useTheme";


const AboutUs = () => {
  const { theme } = useTheme();
  
  const bgClass = theme === 'dark' ? 'bg-black' : 'bg-gray-100';

  return (
    <div className='w-full'>
      <div className='flex p-30'>
        <div>
          <p className='text-5xl max-w-[400px] font-semibold'>SỰ LỰA CHỌN ẨM THỰC SỐ 1</p>
          <button className='p-3 mt-10 border bg-orange-500 rounded text-white'>XEM HÌNH ẢNH TIỆC</button>
        </div>

        <div className='flex flex-col justify-center items-start '>
          <video className='w-[900px] h-screen object-cover rounded' controls muted loop>
            <source src={Video} type='video/mp4' />
          </video>

          <div className='flex mt-10'>
            <div className='max-w-md p-3'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus porta ante dui, nec condimentum diam auctor nec. sInteger auctor turpis odio, eu lacinia lorem ultricies at. Morbi maximus in sem vitae tempor. Donec dictum lectus et bibendum faucibus. Integer mollis arcu sit amet mollis blandit.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus porta ante dui, nec condimentum diam auctor nec. sInteger auctor turpis odio, eu lacinia lorem ultricies at. Morbi maximus in sem vitae tempor. Donec dictum lectus et bibendum faucibus. Integer mollis arcu sit amet mollis blandit.</p>
            </div>

            <div className='max-w-md p-3'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus porta ante dui, nec condimentum diam auctor nec. sInteger auctor turpis odio, eu lacinia lorem ultricies at. Morbi maximus in sem vitae tempor. Donec dictum lectus et bibendum faucibus. Integer mollis arcu sit amet mollis blandit.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus porta ante dui, nec condimentum diam auctor nec. sInteger auctor turpis odio, eu lacinia lorem ultricies at. Morbi maximus in sem vitae tempor. Donec dictum lectus et bibendum faucibus. Integer mollis arcu sit amet mollis blandit.</p>
            </div>
          </div>
        </div>
      </div>


      <div className='w-full'>
        <div className='w-full text-white bg-cover bg-center' style={{ backgroundImage: `url(${BackgroundImage})` }}>
          <div className='flex flex-col  pt-10 pr-30 pl-30 pb-10'>
            <div>
              <p className='text-5xl font-semibold'>TIỆC TẠI GIA</p>
              <p className='text-5xl font-semibold'>CHẤT NHÀ HÀNG</p>
            </div>

            <div className='flex mt-30 justify-between'>
              <div>
                <div className='flex'>
                  <p className='text-5xl'>80</p>
                  <PlusOutlined />
                </div>
                <p className='mt-3'>MÓN ĂN ĐA DẠNG 1</p>
              </div>

              <div>
                <div className='flex'>
                  <p className='text-5xl'>6</p>
                  <PlusOutlined />
                </div>
                <p className='mt-3'>SET MENU TIÊU CHUẨN</p>
              </div>

              <div>
                <div className='flex'>
                  <p className='text-5xl'>15</p>
                  <PlusOutlined />
                </div>
                <p className='mt-3'>NĂM KINH NGHIỆM</p>
              </div>

              <div>
                <div className='flex'>
                  <p className='text-5xl'>100</p>
                  <PlusOutlined />
                </div>
                <p className='mt-3'>NHÂN VIÊN CHUYÊN NGHIỆP</p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className={`w-full ${bgClass} py-20`}>
        <p className="text-center text-4xl font-semibold mb-16">DỊCH VỤ CUNG CẤP</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12 max-w-6xl mx-auto px-20">
          <div className="flex max-w-md">
            <div
              className="min-w-[60px] h-[60px] rounded mr-6 bg-cover bg-center"
              style={{ backgroundImage: `url(${BackgroundImage})` }}
            ></div>
            <div>
              <p className="text-2xl font-semibold mb-2">TIỆC TẠI GIA</p>
              <p>
                Tiết kiệm thời gian cho bữa tiệc ấm cúng, dành trọn khoảnh khắc sum vầy bên người thân yêu - Bạn chỉ cần lựa chọn thực đơn yêu thích, Tiệc tại gia sẽ mang trải nghiệm trọn vẹn đến với gia đình
              </p>
            </div>
          </div>

          <div className="flex max-w-md">
            <div
              className="min-w-[60px] h-[60px] rounded mr-6 bg-cover bg-center"
              style={{ backgroundImage: `url(${BackgroundImage})` }}
            ></div>
            <div>
              <p className="text-2xl font-semibold mb-2">TIỆC CƯỚI HỎI</p>
              <p>
                Sự kiện đặc biệt, không thể thiếu đội ngũ tận tâm. Với thực đơn phong phú từ truyền thống tới hiện đại, cùng đội ngũ phục vụ chuyên nghiệp, Tiệc tại gia sẽ đồng hành cùng bạn và gia đình trong ngày vui một cách trọn vẹn nhất
              </p>
            </div>
          </div>

          <div className="flex max-w-md">
            <div
              className="min-w-[60px] h-[60px] rounded mr-6 bg-cover bg-center"
              style={{ backgroundImage: `url(${BackgroundImage})` }}
            ></div>
            <div>
              <p className="text-2xl font-semibold mb-2">TIỆC BUFFET</p>
              <p>
                Tiệc buffet với nhiều lựa chọn thực đơn đa dạng dành cho các sự kiện lớn nhỏ, từ các hoạt động mở và có nhiều thời gian như gala dinner đến liên hoan nội bộ hay tiệc gia đình.
              </p>
            </div>
          </div>

          <div className="flex max-w-md">
            <div
              className="min-w-[60px] h-[60px] rounded mr-6 bg-cover bg-center"
              style={{ backgroundImage: `url(${BackgroundImage})` }}
            ></div>
            <div>
              <p className="text-2xl font-semibold mb-2">TIỆC SỰ KIỆN</p>
              <p>
                Tiệc tại gia sẽ giúp bạn lo chu toàn các sự kiện lớn cho công ty, hội thảo cần sự chỉn chu từ khâu chuẩn bị tới quy trình phục vụ chuyên nghiệp, đảm bảo hài lòng mọi khách hàng tham dự
              </p>
            </div>
          </div>

          <div className="flex max-w-md">
            <div
              className="min-w-[60px] h-[60px] rounded mr-6 bg-cover bg-center"
              style={{ backgroundImage: `url(${BackgroundImage})` }}
            ></div>
            <div>
              <p className="text-2xl font-semibold mb-2">TIỆC TEA BREAK</p>
              <p>
                Tea break được tổ chức dưới hình thức tiệc đứng với trà, bánh ngọt, và hoa quả, diễn ra vào giữa giờ giải lao của các buổi hội nghị, khai trương,… giúp khách mời có khoảng thời gian thư giãn trước khi tiếp tục tham dự sự kiện.
              </p>
            </div>
          </div>
        </div>
      </div>





      <div className='w-full'>
        <div className='p-20'>
          <p className='text-center text-4xl font-semibold'>TÔN CHỈ PHỤC VỤ</p>
          <p className='text-center pt-10 pl-50 pr-50'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus porta ante dui, nec condimentum diam auctor nec. sInteger auctor turpis odio, eu lacinia lorem ultricies at.</p>

          <div className='flex justify-between items-center pt-20 pl-20 pr-20'>
            <div className="text-white w-96 h-96 bg-cover bg-center flex items-end justify-center p-4 text-center rounded" style={{ backgroundImage: `url(${BackgroundImage})` }}>
              <p className='text-center text-2xl'>THỰC PHẨM AN TOÀN CHẤT LƯỢNG NHÀ HÀNG</p>
            </div>
            <div className="text-white w-96 h-96 bg-cover bg-center flex items-end justify-center p-4 text-center rounded" style={{ backgroundImage: `url(${BackgroundImage})` }}>
              <p className='text-center text-2xl'>DỊCH VỤ CHU ĐÁO CHĂM SÓC TẬN TÂM</p>
            </div>
            <div className="text-white w-96 h-96 bg-cover bg-center flex items-end justify-center p-4 text-center rounded" style={{ backgroundImage: `url(${BackgroundImage})` }}>
              <p className='text-center text-2xl'>ĐỒNG HÀNH TRONG MỌI LỰA CHỌN ẨM THỰC</p>
            </div>
          </div>
        </div>
      </div>

    </div>

  )
}

export default AboutUs
