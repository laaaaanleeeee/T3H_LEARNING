import React from 'react'

const HomeCarousel = (props) => {
    return (
        <div className="relative">
            <img className="w-full h-[600px] object-cover" src={props.srcImg} />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                <h2 className="text-4xl font-bold">ƯU ĐÃI LÊN TỚI 30%</h2>
                <p className="text-4xl font-bold mt-2">KHI ĐẶT SET MENU SUM VẦY</p>
                <p className="mt-1 mb-5 text-sm">Áp dụng cho tiệc tại Hà Nội, từ 15/11 - 20/11/2021</p>
                <button className="mt-5 px-6 py-2 bg-orange-600 text-white rounded">
                    XEM CHI TIẾT ƯU ĐÃI
                </button>
            </div>
        </div>
    )
}

export default HomeCarousel
