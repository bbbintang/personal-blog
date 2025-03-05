"use client";

import Sidebar from '@/Components/Sidebar'
import Header from '@/Components/Header'
import React, { useState } from 'react'
import Newstory from '@/Components/Newstory'
import Logout from '@/Components/Logout';
import Listedit from '@/Components/Listedit';

const Page = () => {
  const [activePage, setActivePage] = useState("newStory");

  const renderContent = () => {
    switch (activePage) {
      case "newStory":
        return <Newstory />;
      case "editStory":
        return <Listedit />;
      case "logout":
        return <Logout />;
      default:
        return <Newstory />; // Default balik ke Newstory
    }
  };

  return (
    <div>
      <Header />
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/4 py-5 flex justify-center">
          <Sidebar setActivePage={setActivePage} />
        </div>
        <div className="w-full md:w-3/4 py-7 flex flex-col justify-start">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Page;
