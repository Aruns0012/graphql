import Image from 'next/image'
import React from 'react'

const Citycard = ({img, city}) => {
  return (
    // <div className='text-center flex justify-center flex-col'>
    //   <Image src={img} width={350} height={350}/>
    //   <div>{city}</div>
    // </div>


  //   <div className='text-center bg-white p-6 rounded-md shadow-md'>
  //   <Image src={img} alt={city} width={350} height={350} className='rounded-md mb-4'/>
  //   <h2 className='text-xl font-semibold'>{city}</h2>
  // </div>
  <div className='text-center bg-gradient-to-r from-slate-50 to-slate-100 text-black p-8 rounded-md shadow-lg'>
    <Image src={img} alt={city} width={350} height={350} className='rounded-md mb-4'/>
    <h2 className='text-2xl font-extrabold mb-2'>{city}</h2>
</div>


  )
}

export default Citycard
