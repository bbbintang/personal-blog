import Sidebar from '@/Components/Sidebar'
import Header from '@/Components/Header'
import React from 'react'

const page = () => {
  return (
    <div>
      <Header/>
      <div className="flex flex-col md:flex-row gap-2">
        <div className="w-full md:w-1/3 py-5 flex justify-center">
          <Sidebar/>
        </div>
        <div className="w-full md:w-2/3 p-4 flex flex-col">
          inisebelah kanan
        </div>
      </div>
    </div>
  )
}

export default page
