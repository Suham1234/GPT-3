import React from 'react'
import  possibility  from '../assets/possibility.png'

const Possibilities = () => {
  return (
    <section className='flex sm:flex-row flex-col-reverse mt-32 items-center sm:space-x-10' id='possibilities'>
      <div className='flex-1  '>
        <img src={possibility} alt="possibility" />
      </div>
      <div className='flex-[1.25] '>
        <h4 className='text-cyan-500 font-manrope text-sm mb-6'>Request Early Access to Get Started</h4>
        <h1 className='text-gradient text-[40px] leading-[45px] mb-8'>The possibilities are beyond your imagination</h1>
        <p className='text-dimBlue font-manrope'>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <h4 className='text-textPink font-manrope text-sm mt-8'>Request Early Access to Get Started</h4>
      </div>
    </section>
  )
}

export default Possibilities