import Link from 'next/link'
import UserInfo from './UserInfo'
import LoginBtn from './LoginBtn'


export default function Navbar() {
  return (
    <nav className='flex justify-between items-center bg-gradient-to-r from-green-800 to-blue-500 px-8 py-3'>
      <div>
     
          <Link className='text-white font-bold'href={'/'}> Memoirs</Link>
      </div>
        <div className='flex items-center gap-5'>
   
          <Link className='bg-white p-2 rounded-sm' href={'/addStory'}>New Story</Link>
        </div>
    </nav>
  )
}
