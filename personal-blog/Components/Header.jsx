import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='py-5 px-5 md:px-12 lg:px-28'>
        <div className='flex justify-between items-center'>
        <div className='font-medium'>
            Sudut Ekspresi
        </div>
        <div className='flex gap-4 underline'>
            <Link href="/">Home</Link>
            <Link href="/profile">Profile</Link>
            <Link href="/stories">Stories</Link>
            <Link href="/post">Post</Link>
        </div>
        </div>
    </div>
  )
}

export default Header
