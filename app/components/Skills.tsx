import React from 'react'

const Skills = () => {
  return (
    <>
    <section className='container mx-auto py-10 px-4'>

    <div className='text-[#232940] text-[32px] font-medium flex items-center gap-4 py-16'>
        Skills
        <div className='bg-[#ff4D41] h-[2px] w-[40px] translate-y-1'></div>
    </div>

    <p className='text-gray-600 -mt-10 mb-10'>I have a sound knowledg and good grip in these languages</p>
   
   <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>

            <div>
                <p>React Js</p>
                <div className='relative bg-gray-400 h-[4px] mt-2 '>
                    <div className='bg-[#ff4D41] absolute h-[4px] w-[90%]'></div>
                </div>
            </div>

            <div>
                <p>Next Js</p>
                <div className='relative bg-gray-400 h-[4px] mt-2 '>
                    <div className='bg-[#ff4D41] absolute h-[4px] w-[85%]'></div>
                </div>
            </div>

            <div>
                <p>Taiwind CSS</p>
                <div className='relative bg-gray-400 h-[4px] mt-2 '>
                    <div className='bg-[#ff4D41] absolute h-[4px] w-[95%]'></div>
                </div>
            </div>
            
            <div>
                <p>PHP</p>
                <div className='relative bg-gray-400 h-[4px] mt-2 '>
                    <div className='bg-[#ff4D41] absolute h-[4px] w-[80%]'></div>
                </div>
            </div>
            
            <div>
                <p>Laravel</p>
                <div className='relative bg-gray-400 h-[4px] mt-2 '>
                    <div className='bg-[#ff4D41] absolute h-[4px] w-[75%]'></div>
                </div>
            </div>

            <div>
                <p>Node Js</p>
                <div className='relative bg-gray-400 h-[4px] mt-2 '>
                    <div className='bg-[#ff4D41] absolute h-[4px] w-[70%]'></div>
                </div>
            </div>

   </div>
   
    </section>
    </>
  )
}

export default Skills
