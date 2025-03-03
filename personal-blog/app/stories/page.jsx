"use client";

import Header from '@/Components/Header'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React from 'react'

const page = () => {
      const router = useRouter();
  
      const handleFull = () => {
        router.push("/full");
      };
  return (
    <div>
      <Header/>
      <div className='mx-25 bg-gray-200 rounded-xl p-4 py-5 flex flex-col text-left'>
        <div className='flex flex-col md:flex-row items-center'>
          <div className="w-full md:w-1/4 p-2 flex flex-col items-center justify-center">
            <Image src="/assets/contoh.jpg" alt='' width={100} height={100}></Image>
          </div>
          <div className="w-full md:w-3/4 p-2 flex flex-col text-start">
            <label className="block font-semibold mb-1 py-3">Cerita 1</label>
            <p>ini deskripsinyaini deskripsinya</p>
            <button onClick={handleFull} className='w-30 my-3 border border-black rounded-lg hover:bg-blue-300 cursor-pointer'>Full Story Here</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
