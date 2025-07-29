import React from 'react'

const HomeCarousel = (props) => {
    return (
        <div className="relative">
            <img className="w-full h-[600px] object-cover" src={props.srcImg} />
        </div>
    )
}

export default HomeCarousel
