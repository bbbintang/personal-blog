"use client";

import Header from '@/Components/Header'
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';

const Page = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentChapter = Number(searchParams.get("id")) || 1;

  const chapters = [
    { id: 1, name: "Chapter 1", title: "Payungnya Tidak Terbawa", content: "Lorem ipsum dolor sit amet..." },
    { id: 2, name: "Chapter 2", title: "Langkah Kecil di Hujan", content: "Isi cerita chapter 2..." },
    { id: 3, name: "Chapter 3", title: "Senja yang Tertinggal", content: "Isi cerita chapter 3..." }
  ];

  const chapterData = chapters.find(ch => ch.id === currentChapter);

  const handleNavigate = (newId) => {
    if (newId >= 1 && newId <= chapters.length) {
      router.push(`/full?id=${newId}`);
    }
  };

  return (
    <div>
      <Header />
      <div className='flex justify-between px-5 mt-5 mx-25'>
        <p className={`underline cursor-pointer ${currentChapter === 1 ? 'opacity-50 cursor-default' : ''}`} 
           onClick={() => currentChapter > 1 && handleNavigate(currentChapter - 1)}>
          Back
        </p>
        <p className={`underline cursor-pointer ${currentChapter === chapters.length ? 'opacity-50 cursor-default' : ''}`} 
           onClick={() => currentChapter < chapters.length && handleNavigate(currentChapter + 1)}>
          Next
        </p>
      </div>
      <div className='mx-25 my-2 bg-gray-200 rounded-xl p-4 flex flex-col text-left'>
        <div className='flex justify-center text-center'>
          <Image src="/assets/contoh.jpg" alt='' width={100} height={100} />
        </div>
        <div className='flex flex-col mt-2 text-center'>
          <label className='font-bold'>Unsaid Intimacy</label>
          <label>{chapterData?.name} : {chapterData?.title}</label>
        </div>
        <div className='text-left px-5 mt-5'>
          <p>{chapterData?.content}</p>
        </div>
      </div>
    </div>
  );
}

export default Page;
