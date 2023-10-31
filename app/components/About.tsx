import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <>
    <section className='container mx-auto py-10 px-4'>

    <div className='text-[#232940] text-[32px] font-medium flex items-center gap-4 py-16'>
        About Me
        <div className='bg-[#ff4D41] h-[2px] w-[40px] translate-y-1'></div>
    </div>

    <div className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'>
        <div>
            <Image
            src="/profile.jpg"
             width={400}
            height={500}
             alt="Profile-Pic"
            />

        </div>
        <div className='flex items-center justify-between w-[300px]'>
            <div className='flex flex-col gap-6'>
                <div className='flex gap-4 items-center font-medium'>
                    

                </div>

            </div>

        </div>

    </div>
    

      </section>
      </>
     
  )
}

export default About
