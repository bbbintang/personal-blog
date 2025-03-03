import React from 'react'

const sidebar = ({setActivePage}) => {
  return (
    <div className="bg-gray-200 rounded-xl p-4 md:w-3/4 flex flex-col text-right min-h-[300px]">
      <p className="py-3 cursor-pointer" onClick={() => setActivePage("newStory")}>New Story</p>
      <p className="py-3 cursor-pointer" onClick={() => setActivePage("editStory")}>Edit Story</p>
      <p className="py-3 cursor-pointer" onClick={() => setActivePage("logout")}>Logout</p>
    </div>
  )
}

export default sidebar
