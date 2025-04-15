import chaicode from '../assets/chaicode-black.png'
import { useState } from 'react'

export default function Header(){
  const [isMenuOpen,setIsMenuOpen]=useState(false);

    return (
    <header className="bg-orange-500">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <a className="block text-teal-600" href="#">
              <span className="sr-only">Home</span>
               <img src={chaicode} alt="chai code logo" className='h-8' />
            </a>
          </div>
    
          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-md font-medium">
                <li className='flex justify-center items-center gap-1'>
                   <a className="text-black transition hover:text-white hover:cursor-pointer" href="#Cohort"> Cohorts </a>
                   {/* red dot Pulsing */}
                   <span className="relative flex h-4 w-4 pt-0.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-800 opacity-95"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
                   </span>
                </li>
    
                <li>
                  <a className="text-black transition hover:text-white hover:cursor-pointer" href="#"> Udemy </a>
                </li>
    
                <li>
                  <a className="text-black transition hover:text-white hover:cursor-pointer" href="https://docs.chaicode.com/" target='_blank'> Docs </a>
                </li>
    
                <li>
                  <a className="text-black transition hover:text-white hover:cursor-pointer" href="#"> Reviews </a>
                </li>
              </ul>
            </nav>
          </div>

      <div className="flex items-center gap-4">
        <div className="sm:flex sm:gap-4">
          <a
            className="rounded-md bg-black px-5 py-2.5 text-sm font-medium text-white shadow-sm"
            href="https://courses.chaicode.com/learn/account/signin"
          >
            Login
          </a>

          {/* <div className="hidden sm:flex">
            <a
              className="rounded-md bg-white px-5 py-2.5 text-sm font-medium text-black"
              href="#"
            >
              Register
            </a>
          </div> */}
        </div>

        <div className="block md:hidden">
          <button
            onClick={()=>setIsMenuOpen(!isMenuOpen)}
            className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>

  {isMenuOpen && (
    <div className='md:hidden px-4 pb-4'>
        <nav className='mt-2 space-y-2 text-md font-medium'>
          <a className='block text-black transition hover:text-white hover:cursor-pointer' href="">Cohorts</a>
          <a className='block text-black transition hover:text-white' href="">Udemy</a>
          <a className='block text-black transition hover:text-white' href="">Docs</a>
          <a className='block text-black transition hover:text-white' href="">Reviews</a>
        </nav>
    </div>
  )}
</header>
    
)}

