import React from 'react'

const Card = ({title, text, className, textStyle}) => {
  return (
    <div className='my-8'>
      <div className='bg-pink-gradient  border-solid w-[50px] h-[3px] shadow-black shadow-md mb-6 max-w-[330px] '>
      </div>
      <div className={`${className}`}>
        <h4 className='font-manrope text-white font-semibold text-[20px] mb-8 flex-[0.75]'>{title}</h4>
        <p className={`font-manrope text-sm flex-1 ${textStyle || 'text-dimWhite'}`}>{text}</p>
      </div>
    </div>
  )
}

export default Card