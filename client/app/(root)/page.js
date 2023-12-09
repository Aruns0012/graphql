import Citycard from '@/components/Citycard';
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import Link from 'next/link';

export default function Home() {
  const location = [
    {_id:12,city:"Delhi", img:"/assets/mumbai1.png"},
    {_id:13,city:"Mumbai", img:"/assets/mumbai2.png"},
    {_id:14,city:"Jaipur", img:"/assets/delhi1.png"},
    {_id:11,city:"Banglore", img:"/assets/delhi2.png"},
  ];
  return (
    <main className="flex justify-center">
      <div className='grid h-full grid-cols-1 gap-4 p-4 cursor-pointer sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4
'>
        {location.map((city)=>(
         <Link href={`/hostels/${city.city}`}><Citycard img={city.img} city={city.city}/></Link>
         
        ))}
      </div>
    </main>
  )
}
