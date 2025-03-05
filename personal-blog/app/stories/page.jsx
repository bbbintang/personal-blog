"use client";

import Header from '@/Components/Header'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const page = () => {
      const router = useRouter();
      const [isOpen, setIsOpen] = useState(false);
  
      const handleFull = (id) => {
        router.push(`/full?id=${id}`);
        setIsOpen(false);
      };
      const chapters = [
        {id : 1, name : "Chapter 1"},
        {id : 2, name : "Chapter 2"},
        {id : 3, name : "Chapter 3"}
      ];

      {chapters.map((chapter) => (
        <div
          key={chapter.id}
          className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
          onClick={() => handleFull(chapter.id)}
        >
          {chapter.name}
        </div>
      )
    )
  }

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
            
            <div className='relative'>
              <button onClick={() => setIsOpen(!isOpen)} className='w-30 my-3 border border-black rounded-lg px-4 py-2 hover:bg-blue-300 cursor-pointer'>
                Chapters
              </button>
              {isOpen && (
                <div className='absolute left-0 mt-2 w-40 bg-white border border-gray-300 rounded-lg shadow-md'>
                  {chapters.map((chapter) => (
                    <div
                    key={chapter.id}
                    className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleFull(chapter.id)}
                    >
                      {chapter.name}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
