import React from 'react'

const CTA = () => {
  return (
    <div className='bg-pink-gradient my-20 p-8 rounded-xl flex items-center sm:flex-row flex-col'>
      <div className='flex-[1.25]'>
        <p className='font-manrope text-sm text-black'>Request Early Access to Get Started</p>
        <h2 className='font-manrope sm:text-[36px] text-[30px] font-bold leading-10 mt-4'>Register today & start exploring the endless possibilities.</h2>
      </div>
      <div className='flex-[0.6] flex justify-end max-sm:mt-10'>
        <button type="button" className='bg-black text-white px-8 py-4 rounded-xl font-manrope font-semibold cursor-pointer'>
          Get Started
        </button>
      </div>
    </div>
  )
}

export default CTA