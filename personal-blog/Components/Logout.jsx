import { useRouter } from 'next/navigation';
import React from 'react'


const Logout = ({onLogout}) => {
    const router = useRouter();
    
    const handleLogout = () => {
        if(onLogout){
            onLogout();
        } else {
            localStorage.removeItem('isLoggedIn');
            router.push('/');
        }
    };
    const handlePost = () => {
        router.push("/post");
    };

  return (
    <div className='flex items-start py-5 justify-center min-h-screen'>
        <div className='w-100 bg-gray-200 rounded-xl m-2 min-h-[150px] text-center'>
            <label className="block font-semibold py-5">Are you sure you want to logged out?</label>
            <div className='flex justify-center gap-x-4'>
            <button onClick={handleLogout} className='w-20 mt-4 border border-black rounded-lg cursor-pointer'>Yes</button>
            <button onClick={handlePost} className='w-20 mt-4 border border-black rounded-lg cursor-pointer'>No</button>
            </div>
        </div>
    </div>
  )
}

export default Logout
