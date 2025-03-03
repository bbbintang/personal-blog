"use client";

import Header from '@/Components/Header'
import { useRouter } from 'next/navigation';
import React from 'react'

const page = () => {
    const router = useRouter();

    const handleLogin = () => {
      // Bisa ditambah validasi login sebelum redirect
      router.push("/post"); // Ganti "/post" dengan halaman tujuan
    };

  return (
    <div>
      <Header/>
      <div className="flex items-start py-5 justify-center min-h-screen">
        <div className="w-100 bg-gray-200 rounded-xl m-2 min-h-[300px] text-center">
            <label className="block font-semibold mb-1 py-5">Login Required!</label>
            <div className='w-full'>
                <label className="block mb-1">Username</label>
                <input 
                    type="text" 
                    placeholder="Masukkan username"
                    className="w-50 text-center border bg-white border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                </input>

                <label className="block mb-1 mt-4">Password</label>
                <input 
                    type="password" 
                    placeholder="Masukkan password"
                    className="w-50 text-center border bg-white border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                </input>

                <button onClick={handleLogin} className='block w-20 mt-4  border border-black rounded-lg mx-auto'>Login</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default page