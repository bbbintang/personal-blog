import Image from 'next/image'
import React from 'react'

const Listedit = () => {
  return (
    <div className='flex flex-col md:flex-row gap-x-2 mr-5'>
        <div className='w-full md:w-2/3 flex flex-col items-center justify-center'>
            <label className='font-bold'>Story List</label>
            <div className='w-full my-2 bg-gray-200 rounded-xl p-2 text-left'>
                ini listnya
            </div>
        </div>
        <div className='w-full md:w-1/3 flex flex-col items-center justify-center'>
            <label className='font-bold'>Action</label>
            <div className='flex flex-row items-center gap-x-5 my-2'>
                <Image src='/assets/edit.png' alt='' width={25} height={25}></Image>
                <Image src='/assets/bin.png' alt='' width={25} height={25}></Image>
            </div>
        </div>
    </div>
  )
}

export default Listedit
