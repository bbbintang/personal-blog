import Header from '@/Components/Header'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div>
      <Header/>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-1/3 p-4 flex flex-col items-center justify-center">
          <Image src="/assets/profil.jpg" alt='' width={200} height={100}></Image>
          <h1 className='font-bold mt-2'>My Name</h1>
        </div>
        <div className="w-full md:w-2/3 p-4 flex flex-col">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nibh nisi, pharetra vel urna vitae, cursus viverra enim. Nam convallis scelerisque diam, vitae pellentesque dui ornare non. Mauris viverra lacus magna, ut congue magna porta sit amet. Sed in ex at purus lobortis dignissim sit amet eu augue. Nullam pellentesque luctus luctus. Suspendisse potenti. Morbi tincidunt tincidunt eleifend. Donec quis maximus quam, eget feugiat magna.
          <div className='mt-6'>You can find me on :</div>
        </div>
      </div>

    </div>
  )
}

export default page
