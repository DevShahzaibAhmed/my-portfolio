import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-white text-violet-600/50 fixed top-0 w-[100%] z-10'>
        <div className='container mx-auto flex justify-between items-center py-4 '>
            <div className='text-[24px] text-violet-900 font-semibold hover:italic hover:text-violet-300'>Shahzaib Ahmed</div>
            
            <div className='hover:font-bold hover:text-violet-600'>
                <Link href='/'>
                    <li className='body-text '>Home</li>
                </Link>
            </div>
            <div className='hover:font-bold hover:text-violet-600'>
                <Link href='/'>
                    <li>About</li>
                </Link>
            </div>

            <div className='hover:font-bold hover:text-violet-600'>
                <Link href='/'>
                    <li>Portfolio</li>
                </Link>
            </div>

            <div className='hover:font-bold hover:text-violet-600'>
                <Link href='/'>
                    <li>Blog</li>
                </Link>
            </div>

            <div className='hover:font-bold hover:text-violet-600'>
                <Link href='/'>
                    <li>Contact</li>
                </Link>
            </div>
        </div>
    
    </div>
  )
}

export default Navbar