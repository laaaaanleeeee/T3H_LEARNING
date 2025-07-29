import React from 'react'
import { useTheme } from "../hook/useTheme";


const StepBooking = (props) => {

    const { theme } = useTheme();

    const cardBgColor = theme === 'dark' ? '#333' : '#d9d9d9';
    const cardBorderColor = theme === 'dark' ? '#444' : '#eaeaea';
    return (
        <div className='relative flex flex-col items-center text-center w-48'>
            <div className='w-40 h-40 flex justify-center items-center rounded-full' style={{
              backgroundColor: cardBgColor,
              borderColor: cardBorderColor,
            }}>
                {props.icon_step}
            </div>
            <div className='w-10 h-10 absolute top-[160px] right-[95px] -translate-y-1/2 translate-x-1/2 text-white bg-amber-600 flex justify-center items-center rounded-full'>
                {props.num_step}
            </div>
            <p className='mt-10 font-bold'>{props.title_step}</p>
            <p>{props.content_step}</p>
        </div>
    )
}

export default StepBooking
