import React from 'react'


const Hero = () => {
  return (
    <div className='bg-[url("/b3.jpg")] h-screen bg-cover bg-center bg-fixed flex items-center'>

      <div className='cotainer mx-auto px-4'>

        <div className='max-w-[450px] text-white flex flex-col gap-[40px]'>

          <div >
            <h1 className='text-5xl hover:underline transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 '>Shahzaib Ahmed</h1>
            <h4 className='text-2xl mt-3 '>FrontEnd Developer</h4>

          </div>

          <div className='bg-[#ff4D41] h-[2px] w-[40px]'></div>

          <div>
            <p>Welcome to My Portfolio Website</p>

            <button className='btn'>
              Learn More
            </button>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Hero

