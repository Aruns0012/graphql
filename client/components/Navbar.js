import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='flex justify-start font-semibold gap-4 py-4 px-2 '>
      <div className='hover:bg-white hover:rounded-full transition transform scale-105 duration-300 ease-in-out px-4 py-2 rounded-lg shadow-md'> <Link href={"/"}>Destinations</Link> </div>
      <div className='hover:bg-white hover:rounded-full transition transform scale-105 duration-300 ease-in-out px-4 py-2 rounded-lg shadow-md'>About</div>
    </nav>
  );
};

export default Navbar;
