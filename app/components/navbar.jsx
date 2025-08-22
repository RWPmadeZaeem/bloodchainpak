import React from 'react'
import Link from 'next/link'

function navbar() {
  return (
    <nav className='flex justify-between items-center px-20 py-4 border-b border-gray-200'>
        <div>
            <h2 className='text-xl font-semibold'>Blood Chain</h2>
        </div>
        <ul className='flex gap-6'>
            <li>
                <Link href="/" className='relative text-gray-700 hover:text-[#EC1D23] transition-colors duration-300 ease-in-out group'>
                    Home
                    <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-[#EC1D23] transition-all duration-300 ease-in-out group-hover:w-full'></span>
                </Link>
            </li>
            <li>
                <Link href="/login" className='relative text-gray-700 hover:text-[#EC1D23] transition-colors duration-300 ease-in-out group'>
                    Blogs
                    <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-[#EC1D23] transition-all duration-300 ease-in-out group-hover:w-full'></span>
                </Link>
            </li>
            <li>
                <Link href="/login" className='relative text-gray-700 hover:text-[#EC1D23] transition-colors duration-300 ease-in-out group'>
                    Gallery
                    <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-[#EC1D23] transition-all duration-300 ease-in-out group-hover:w-full'></span>
                </Link>
            </li>
            <li>
                <Link href="/about" className='relative text-gray-700 hover:text-[#EC1D23] transition-colors duration-300 ease-in-out group'>
                    Contact
                    <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-[#EC1D23] transition-all duration-300 ease-in-out group-hover:w-full'></span>
                </Link>
            </li>
            <li>
                <Link href="/contact" className='relative text-gray-700 hover:text-[#EC1D23] transition-colors duration-300 ease-in-out group'>
                    About Us
                    <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-[#EC1D23] transition-all duration-300 ease-in-out group-hover:w-full'></span>
                </Link>
            </li>
        </ul>
        <div>
            <button className='bg-[#EC1D23] text-white px-5 py-3 rounded-full hover:bg-red-700 hover:scale-105 hover:shadow-lg transform transition-all duration-300 ease-in-out active:scale-95'>
                Donate Now
            </button>
        </div>
    </nav>
  )
}

export default navbar