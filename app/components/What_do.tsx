import React from 'react'
import {RiLightbulbFlashLine} from "react-icons/ri"

const What_do = () => {
  return (
    <>
    <section className='container mx-auto py-10 px-4'>

    <div className='text-[#232940] text-[32px] font-medium flex items-center gap-4 py-16'>
        What I Do
        <div className='bg-[#ff4D41] h-[2px] w-[40px] translate-y-1'></div>
    </div>

    <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        <div className='shadow-lg flex flex-col gap-4 px-8 py-10 bg-[#ff4D41] text-white'>
            <RiLightbulbFlashLine className='text-[28px]'/>

            <h2 className='font-medium text-[20px]'>Creative Designs</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum dicta molestiae corporis vero nostrum
            excepturi iure ipsa laborum architecto eum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, fugiat?</p>

        </div>

        <div className='shadow-lg flex flex-col gap-4 px-8 py-10 bg-[#ff4D41] text-white'>
            <RiLightbulbFlashLine className='text-[28px]'/>

            <h2 className='font-medium text-[20px]'>Creative Designs</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum dicta molestiae corporis vero nostrum
            excepturi iure ipsa laborum architecto eum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, fugiat?</p>

        </div>

        <div className='shadow-lg flex flex-col gap-4 px-8 py-10 bg-[#ff4D41] text-white'>
            <RiLightbulbFlashLine className='text-[28px]'/>

            <h2 className='font-medium text-[20px]'>Creative Designs</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum dicta molestiae corporis vero nostrum
            excepturi iure ipsa laborum architecto eum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, fugiat?</p>

        </div>
    </div>

    </section>
    </>
  )
}

export default What_do