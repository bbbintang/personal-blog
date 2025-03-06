"use client";

import Header from '@/Components/Header'
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react'

const page = () => {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // Check if already logged in on component mount
    useEffect(() => {
      // Check if we're in the browser environment
      if (typeof window !== 'undefined') {
        const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
        
        // If already authenticated, redirect to post page
        if (isLoggedIn) {
          router.push('/post');
        }
      }
    }, [router]);

    const handleLogin = () => {
      // Check if username and password match the required values
      if (username === 'bbbintang' && password === 'bbbintang.18') {
        // Store authentication status in localStorage
        localStorage.setItem('isLoggedIn', 'true');
        
        // If correct, navigate to the post page
        router.push("/post");
      } else {
        // If incorrect, show an error message
        setError('Username atau password tidak sesuai!');
      }
    };

  return (
    <div>
      <Header/>
      <div className="flex items-start py-5 justify-center min-h-screen">
        <div className="w-100 bg-gray-200 rounded-xl m-2 min-h-[300px] text-center p-4">
            <label className="block font-semibold mb-1 py-5">Login Required!</label>
            
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-4">
                {error}
              </div>
            )}
            
            <div className='w-full'>
                <label className="block mb-1">Username</label>
                <input 
                    type="text" 
                    placeholder="Masukkan username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-50 text-center border bg-white border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                </input>

                <label className="block mb-1 mt-4">Password</label>
                <input 
                    type="password" 
                    placeholder="Masukkan password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-50 text-center border bg-white border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                </input>

                <button 
                  onClick={handleLogin} 
                  className='block w-20 mt-4 border border-black rounded-lg mx-auto cursor-pointer hover:bg-gray-300 py-1'>
                  Login
                </button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default page