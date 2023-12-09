import Navbar from '@/components/Navbar'
import React from 'react'

const layout = ({children}) => {
  return (
    <div>
      <Navbar/>
      <div className='w-full'>
        {children}
      </div>
    </div>
  )
}

export default layout
