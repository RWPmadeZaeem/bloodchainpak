import React from 'react'
import Image from 'next/image'

function InfoSection() {
  return (
    <div className='w-full py-16 '>
        <div className='flex flex-col items-center space-y-6'>
            <h1 className='font-semibold text-5xl'>What is Blood Chain?</h1>
            <p className='text-2xl text-[#6A6A6A]'>A Lifesaving Mission to End Blood Shortages Across Pakistan</p>
        </div>
        <div className='flex flex-col md:flex-row mt-18 px-4 sm:px-8 lg:px-20'>
            <p className='max-w-1/2'>Blood Chain Pakistan is a non-profit organization dedicated to solving blood shortages across the country. With a network of passionate volunteers, we work to raise awareness, mobilize donors, and connect them with pati See more...</p>
            <div className='max-w-1/2'>
                 
            </div>
           
        </div>

    </div>
  )
}

export default InfoSection