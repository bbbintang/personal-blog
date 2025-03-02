import React from 'react'

const sidebar = () => {
  return (
        <div className="bg-gray-200 rounded-xl p-4 w-2/3 flex flex-col text-right min-h-[300px]">
            <p className="py-3 pb-3">New Story</p>
            <p className="py-3 w-full">Edit Story</p>
            <p className="py-3 w-full">Logout</p>
        </div>
  )
}

export default sidebar
