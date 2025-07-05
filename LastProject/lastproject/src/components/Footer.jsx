import React from 'react'
import BackgroundImage from "../assets/pexels-valeriya-1639562.jpg";
import { FacebookFilled } from '@ant-design/icons';
import { YoutubeFilled } from '@ant-design/icons';
import LogoFooter from "../assets/pngimg.com - mastercard_PNG16.png";
import LogoBCT from "../assets/logo-da-thong-bao-bo-cong-thuong.webp";

const Footer = () => {
    return (
        <div className='container-fluid p-10 text-white bg-cover bg-center' style={{ backgroundImage: `url(${BackgroundImage})` }}>
            <div className='flex justify-center'>
                <div className='max-w-xs m-5'>
                    <p className='text-2xl mb-3'>Về chúng tôi</p>
                    <p>Số điện thoại: 095.366.4722</p>
                    <p>Địa chỉ: số 33 Nhân Chính, Trung Hòa, Cầu Giấy, Hà Nội</p>
                </div>

                <div className='max-w-xs m-5'>
                    <p className='text-2xl mb-3'>Phương thức thanh toán</p>
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
                    <p className='text-2xl mb-3'>Truyền thông xã hội</p>
                    <div className='flex'>
                        <FacebookFilled className='mr-2' />
                        <a href='#'><p>Facebook</p></a>
                    </div>

                    <div className='flex'>
                        <YoutubeFilled className='mr-2' />
                        <a href='#'><p>Youtube</p></a>
                    </div>
                </div>


                <div className='max-w-xs m-5'>
                    <p className='text-2xl mb-3'>Hỗ trợ khách hàng</p>
                    <p>Liên hệ  Hotline: 036.555.1123</p>
                    <p>Email: happy.@gmail.com</p>
                    <p>Địa chỉ: Số 33 Nhân Chính, Trung Hòa, Cầu Giấy, Hà Nội</p>
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
    )
}

export default Footer
