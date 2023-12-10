import Citycard from '@/components/Citycard';
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import Link from 'next/link';
import axios from 'axios';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { useQuery, gql } from '@apollo/client';



const getLocations = gql`
  query Destinations{
    getDestinations{
      id 
      city
    }
  }
`




export default function Home() {
  const location = [
    {_id:12,city:"Delhi", img:"/assets/mumbai1.png"},
    {_id:13,city:"Mumbai", img:"/assets/mumbai2.png"},
    {_id:14,city:"Jaipur", img:"/assets/delhi1.png"},
    {_id:11,city:"Banglore", img:"/assets/delhi2.png"},
  ];



  // const fetchLocation = async(){
  //   let location = await axios.fetch("localhost:8000/graphql/",{query:{getDestinations:{city}}});
  // }


  // const client = new ApolloClient({
  //   uri:"localhost:8000/graphql",
  //   cache: new InMemoryCache()
  // })

  
  // const {loading, error, location} = useQuery(getLocations);
  console.log(location, "------------------------------")




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
