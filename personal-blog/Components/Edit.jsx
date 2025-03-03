import { useRouter } from 'next/navigation';
import React from 'react'

const Edit = () => {
    const router = useRouter();
    
    const handleEdit = () => {
      const confirmSave = window.confirm("Are you sure to save the edit?");
      if(confirmSave){
        console.log("Story saved!");
        router.push("/");
      } else {
        console.log("Save canceled.");
      }
      
    };

  return (
    <div className='py-5'>
      <label className='block font-semibold mb-1'>Judul :</label>
      <label className='block font-semibold mb-1'>Chapter :</label>
      <div className="w-full">
          <textarea 
            placeholder="Edit cerita di sini..."
            className="w-full h-32 resize-y border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className='w-full py-2'>
          <button onClick={handleEdit} className='w-25 border border-black rounded-lg hover:bg-blue-300 cursor-pointer'>Simpan</button>
        </div>
    </div>
  )
}

export default Edit
