import React from 'react'

const BlogCard = ({image,title, className}) => {
  return (
    <div className=' h-full w-full bg-cyan-gradient flex-col'>
      <div className='bg-primary'>
        <img src={image} alt="image" />
      </div>

      <div className='p-6  flex  flex-col justify-between'>
        <div >
          <h4 className='text-white text-sm font-manrope mb-4'>26 September, 2024</h4>
          <h1 className='text-white font-semibold text-lg mb-10'>{title}</h1>
        </div>
        <p className={`font-manrope text-sm text-textPink cursor-pointer ${className}`}>Request Early Access Today</p>
      </div>
    </div>
  )
}

export default BlogCard