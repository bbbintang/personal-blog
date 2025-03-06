"use client";

import Sidebar from '@/Components/Sidebar'
import Header from '@/Components/Header'
import React, { useState, useEffect } from 'react'
import Newstory from '@/Components/Newstory'
import Logout from '@/Components/Logout';
import Listedit from '@/Components/Listedit';
import { useRouter } from 'next/navigation';

const Page = () => {
  const [activePage, setActivePage] = useState("newStory");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  // Check if user is authenticated on component mount
  useEffect(() => {
    // Check if we're in the browser environment
    if (typeof window !== 'undefined') {
      const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
      setIsAuthenticated(isLoggedIn);
      setIsLoading(false);
      
      // If not authenticated, redirect to login page
      if (!isLoggedIn) {
        router.push('/');
      }
    }
  }, [router]);

  // Handle logout function
  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    router.push('/');
  };

  const renderContent = () => {
    switch (activePage) {
      case "newStory":
        return <Newstory />;
      case "editStory":
        return <Listedit />;
      case "logout":
        return <Logout onLogout={handleLogout} />;
      default:
        return <Newstory />; // Default balik ke Newstory
    }
  };

  // Show loading state while checking authentication
  if (isLoading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  // If not authenticated, this will never render as the useEffect will redirect
  // But we keep this check as a fallback
  if (!isAuthenticated) {
    return null;
  }

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