import Image from 'next/image'
import React from 'react'

const Work = () => {
  return (
    <>
    <section className='container mx-auto py-10 px-4'>
    <div className='text-[#232940] text-[32px] font-medium flex items-center gap-4 py-16'>
        Projects
        <div className='bg-[#ff4D41] h-[2px] w-[40px] translate-y-1'></div>
    </div>

    <div className='grid grid-cols-3 ga-4'>
        <div className='row-span-2 relative group'>

            <Image src="/p1.jpg" alt="Project 1" width={30} height={30} />
            <div className='bg-[#000000bd] absolute w-[100%] h-[100%] top-0 opacity-0 transition duration-500 group-hover:opacity-100 grid place-items-center text-white '>
                Project 1
            </div>
        </div>

        <div className='relative group'>
        <Image src="/p2.jpg" alt="Project 2" width={30} height={30} />
            <div className='bg-[#000000bd] absolute w-[100%] h-[100%] top-0 opacity-0 transition duration-500 group-hover:opacity-100 grid place-items-center text-white '>
                Project 2
            </div>
        </div>

        <div className='relative group'>
        <Image src="/p3.jpg" alt="Project 3" width={30} height={30} />
            <div className='bg-[#000000bd] absolute w-[100%] h-[100%] top-0 opacity-0 transition duration-500 group-hover:opacity-100 grid place-items-center text-white '>
                Project 3
            </div>
        </div>

        <div className='relative group'>
        <Image src="/p3.jpg" alt="Project 4" width={30} height={30} />
            <div className='bg-[#000000bd] absolute w-[100%] h-[100%] top-0 opacity-0 transition duration-500 group-hover:opacity-100 grid place-items-center text-white '>
                Project 4
            </div>
        </div>

        <div className='relative group'>
        <Image src="/p2.jpg" alt="Project 5" width={30} height={30} />
            <div className='bg-[#000000bd] absolute w-[100%] h-[100%] top-0 opacity-0 transition duration-500 group-hover:opacity-100 grid place-items-center text-white '>
                Project 5
            </div>
        </div>


    </div>
    </section>
    </>
  )
}

export default Work
