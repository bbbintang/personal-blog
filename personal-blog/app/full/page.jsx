"use client";

import Header from '@/Components/Header'
import Image from 'next/image';
import React from 'react'

const page = ({setActivePage}) => {
  return (
    <div>
      <Header/>
      <div className='flex justify-between mx-30 mt-5'>
        <p className='underline cursor-pointer' onClick={setActivePage}>Back</p>
        <p className='underline cursor-pointer' onClick={setActivePage}>Next</p>
      </div>
      <div className='mx-25 my-2 bg-gray-200 rounded-xl p-4 flex flex-col text-left'>
        <div className='flex justify-center text-center'>
          <Image src="/assets/contoh.jpg" alt='' width={100} height={100}></Image>
        </div>
        <div className='flex flex-col mt-2 text-center'>
          <label className='font-bold'>Unsaid Intimacy</label>
          <label>Chapter 1 : Payungnya Tidak Terbawa</label>
        </div>
        <div className='text-left px-5 mt-5'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nibh nisi, pharetra vel urna vitae, cursus viverra enim. Nam convallis scelerisque diam, vitae pellentesque dui ornare non. Mauris viverra lacus magna, ut congue magna porta sit amet. Sed in ex at purus lobortis dignissim sit amet eu augue. Nullam pellentesque luctus luctus. Suspendisse potenti. Morbi tincidunt tincidunt eleifend. Donec quis maximus quam, eget feugiat magna.</p>
        </div>
      </div>
    </div>
  )
}

export default page