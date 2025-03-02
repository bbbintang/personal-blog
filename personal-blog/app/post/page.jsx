import Sidebar from '@/Components/Sidebar'
import Header from '@/Components/Header'
import React from 'react'
import Newstory from '@/Components/Newstory'

const page = () => {
  return (
    <div>
      <Header/>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/4 py-5 flex justify-center">
          <Sidebar/>
        </div>
        <div className="w-full md:w-3/4 py-7 flex flex-col justify-start">
        <Newstory/>
        </div>
      </div>
    </div>
  )
}

export default page
