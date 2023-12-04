'use client';

import Link from 'next/link'
import React, { useState } from 'react'
import {HiDownload} from 'react-icons/hi'
import {FiMenu} from 'react-icons/fi'

const Navbar = () => {

    const [menu, setMenu] = useState(false);

    const handelToggleMenu = () => {
        setMenu(!menu);
    }

  return (
    <div className='bg-white text-violet-900 sticky top-0 w-[100%] z-10'>
        <div className='container mx-auto flex justify-between items-center py-4 px-4'>
            <div className='text-[24px] text-violet-600 font-semibold hover:italic hover:text-violet-300'>Shahzaib Ahmed</div>
            
            <div className= 'hidden md:flex gap-6'>
                <Link href='/'>
                    <button className='hover:font-bold hover:text-violet-900'>Home</button>
                </Link>
                <Link href='/About'>
                    <button className='hover:font-bold hover:text-violet-900'>About</button>
                </Link>
                <Link href='/Portfolio'>
                    <button className='hover:font-bold hover:text-violet-900'>Portfolio</button>
                </Link>
                <Link href='/Blog'>
                    <button className='hover:font-bold hover:text-violet-900'>Blog</button>
                </Link>
                <Link href='/Contact'>
                    <button className='hover:font-bold hover:text-violet-900'>Contact</button>
                </Link>
            </div>

            <a href="#" className='hidden md:flex flex-border px-5 py-1 border-[#ff4D41] rounded-[5px] items-center 
            hover:bg-violet-600 text-violet-900 hover:text-white transition duration-200'>
                Download CV
                <HiDownload/>
                </a>
                
                <div className='md:hidden text-[24px] '>
                    <FiMenu onClick = {handelToggleMenu}/>
                </div>

                {
                    menu && (
                        <div className='flex flex-col bg-white z-50 fixed top-32'>
                         <Link href='/'>
                    <button className='hover:font-bold hover:text-violet-900'>Home</button>
                </Link>
                <Link href='/About'>
                    <button className='hover:font-bold hover:text-violet-900'>About</button>
                </Link>
                <Link href='/Portfolio'>
                    <button className='hover:font-bold hover:text-violet-900'>Portfolio</button>
                </Link>
                <Link href='/Blog'>
                    <button className='hover:font-bold hover:text-violet-900'>Blog</button>
                </Link>
                <Link href='/Contact'>
                    <button className='hover:font-bold hover:text-violet-900'>Contact</button>
                </Link>
                </div>
                    )
                }
        </div>
    </div>
  )
}

export default Navbar