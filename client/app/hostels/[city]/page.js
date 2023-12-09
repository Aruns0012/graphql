import Citycard from '@/components/Citycard';
import Link from 'next/link';
import React from 'react'

const page = ({params}) => {
  const location = [
    {_id:12,city:"mumbai1",name: "New Lucky Dom", img:"/assets/mumbai1.png"},
    {_id:13,city:"mumbai2",name: "Old unLucky Dom", img:"/assets/mumbai2.png"},
  ];
  return (
    <div className='flex justify-center flex-col items-center'>

      <div className='grid w-full grid-cols-1 gap-4 p-4 cursor-pointer sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4
'>
      {location.map((city)=>(
         <Link href={`/hostels/${city.city}`}><Citycard img={city.img} city={city.name}/></Link>
         
        ))}
      </div>

      
    </div>
  )
}

export default page
