import React from 'react'
import Image from 'next/image'

export default function LoginBtn() {
  return (
    <button className='flex items-center gap-4 shadow-xl rounded-lg pl-3'>
        <Image src="/google-logo.png" width={30} height={30} alt='google logo'></Image>
        <span className='bg-blue-500 text-white px-4 py-3'>Sign In/out with Google</span>
        </button>
  )
}
