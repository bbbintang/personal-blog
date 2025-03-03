import { useRouter } from 'next/navigation';
import React from 'react'

const Newstory = () => {
    const router = useRouter();
    
    const handleNewStory = () => {
      const confirmSave = window.confirm("Are you sure to save this story?");
      if(confirmSave){
        console.log("Story saved!");
        router.push("/");
      } else {
        console.log("Save canceled.");
      }
      
    };

  return (
    <div>
      <div className='w-full'>
        <label className="block font-semibold mb-1">Judul</label>
      </div>
        <div className="w-full">
          <input 
            type="text" 
            placeholder="Masukkan judul di sini..."
            className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className='w-full py-2'>
          <label className="block font-semibold mb-1">Chapter</label>
        </div>
        <div className="w-full flex gap-x-2">
          <input 
            type="number"
            placeholder='0'
            className="w-15 border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
           />
          <input 
            type="text" 
            placeholder="Masukkan judul chapter di sini..."
            className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className='w-full py-2'>
          <label className="block font-semibold mb-1">Genre</label>
        </div>
        <div className="w-full">
          <input 
            type="text" 
            placeholder="Masukkan genre di sini..."
            className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className='w-full py-2'>
          <label className="block font-semibold mb-1">Gambar</label>
        </div>
        <div className="w-full">
          <input 
            type="file" 
            accept="image/*"
            className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
          />
        </div>

        <div className='w-full py-2'>
          <label className="block font-semibold mb-1">Isi</label>
        </div>
        <div className="w-full">
          <textarea 
            placeholder="Masukkan cerita di sini..."
            className="w-full h-32 resize-y border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
          
        <div className='w-full py-2'>
          <button onClick={handleNewStory} className='w-25 border border-black rounded-lg hover:bg-blue-300 cursor-pointer'>Simpan</button>
        </div>
    </div>
  )
}

export default Newstory
