import React from 'react'

const Header = () => {
  return (
    <div className='py-5 px-5 md:px-12 lg:px-28'>
        <div className='flex justify-between items-center'>
            Personal Blog
            <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000]'>
                Get Started
            </button>
        </div>
        <div className='text-center my-8'>
            <h1 className='text-3x1 sm:text-5x1 font-medium'>Latest Blog</h1>
            <p>Hello! this is Bintang and here are some of my projects that I have done</p>
        </div>
      
    </div>
  )
}

export default Header
