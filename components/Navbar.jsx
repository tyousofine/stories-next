import Link from 'next/link'


export default function Navbar() {
  return (
    <nav className='flex justify-between items-center bg-gradient-to-r from-green-800 to-blue-500 px-8 py-3'>
        <Link className='text-white font-bold'href={'/'}>Memoirs</Link>
        <Link className='bg-white p-2 rounded-sm' href={'/addStory'}>New Story</Link>
    </nav>
  )
}
