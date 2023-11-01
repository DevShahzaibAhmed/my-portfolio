import React from 'react'

const Contact = () => {
  return (
    <>
    <section className='container mx-auto py-10 px-4'>
        <div className='text-[#232940] text-[32px] font-medium flex items-center gap-4 py-16'>
            Contact
            <div className='bg-[#ff4D41] h-[2px] w-[40px] translate-y-1'></div>
        </div>
        
        <form className='flex flex-col gap-8'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>

                <input type="text" placeholder='Name' className='inputStyle' required/>
            </div>

        </form>
    </section>
    </>
  )
}

export default Contact
