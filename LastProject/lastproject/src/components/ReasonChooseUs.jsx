import React from 'react'

const ReasonChooseUs = (props) => {
    return (
        <div className="max-w-xs text-center">
            <img src={props.srcImg} alt="" className="w-70 h-70 mx-auto object-cover rounded" />
            <p className="mt-5 text-base font-semibold">{props.title_reason}</p>
            <p className="mt-2 text-sm text-gray-700">
                {props.detail_reason}
            </p>
        </div>
    )
}

export default ReasonChooseUs
