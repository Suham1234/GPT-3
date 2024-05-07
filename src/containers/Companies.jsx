import React from 'react'
import { companies } from '../.constants'

const Companies = () => {
  return (
    <div className='flex ss:flex-row flex-col  justify-between items-center flex-wrap ss:space-y-0 space-y-14 py-20'>
      {companies.map((logo, index)=>(
        <div className={``}>
          <img src={logo} alt="logo" />
        </div>
      ))}
    </div>
  )
}

export default Companies