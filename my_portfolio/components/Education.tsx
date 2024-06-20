import React from 'react'
import { SlActionRedo } from "react-icons/sl";
import { FaRegCalendarDays, FaLocationDot } from "react-icons/fa6";


const Education = () => {
  return (
    <div className='w-full h-full flex flex-col gap-4'>
      <div className='w-full h-fill flex flex-col gap-2'>

<h3 className='flex gap-3 items-center text-[18px] text-[#06D001]'>
  <span><SlActionRedo />
  </span>Bachelor Of Computer Application (BCA).
</h3>
<div className='w-full pl-8 flex flex-col gap-2 text-[17px]'>
  <p>International School Of Management, Patna</p>
  <div className='w-full h-fill flex items-center gap-3'>
    <p className='flex items-center gap-2 '><span><FaRegCalendarDays /> </span>03/2021 - On Going</p>
    <p className='flex items-center gap-2 '><span><FaLocationDot /> </span>Patna</p>
  </div>
</div>
</div>
      <div className='w-full h-fill flex flex-col gap-2'>

        <h3 className='flex gap-3 items-center text-[18px] text-[#06D001]'>
          <span><SlActionRedo />
          </span>I.Sc Math
        </h3>
        <div className='w-full pl-8 flex flex-col gap-2 text-[17px]'>
          <p>R M Collage, Saharsa</p>
          <div className='w-full h-fill flex items-center gap-3'>
            <p className='flex items-center gap-2 '><span><FaRegCalendarDays /> </span>03/2019 - 03/2021</p>
            <p className='flex items-center gap-2 '><span><FaLocationDot /> </span>Saharsa</p>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Education
