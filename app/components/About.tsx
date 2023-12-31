/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image'
import {AiOutlineGift} from 'react-icons/ai'
import { FiBookOpen } from 'react-icons/fi'
import { BsGlobe2 } from 'react-icons/bs'
import { TbPacman } from 'react-icons/tb'
import { IoLocationOutline } from 'react-icons/io5'

const About = () => {
  return (
    <>
    <section className='container mx-auto py-10 px-4 id="Aboutid" '>

    <div className='text-[#232940] text-[32px] font-medium flex items-center gap-4 py-16'>
        About Me
        <div className='bg-[#ff4D41] h-[2px] w-[40px] translate-y-1'></div>
    </div>

    <div className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'>
        <div>
            <img className='w-[400px]' src="/profile.jpg" alt="Profile" />
        </div>
        <div className='flex items-center justify-between w-[300px]'>
            <div className='flex flex-col gap-6'>
                <div className='flex gap-4 items-center font-medium'>
                <AiOutlineGift className='text-[#ff4D41] text-[22px]'/>
                BirthDay
                </div>

                <div className='flex gap-4 items-center font-medium'>
                <FiBookOpen className='text-[#ff4D41] text-[22px]'/>
                Education
                </div>

                <div className='flex gap-4 items-center font-medium'>
                <BsGlobe2 className='text-[#ff4D41] text-[22px]'/>
                Website
                </div>

                <div className='flex gap-4 items-center font-medium'>
                <TbPacman className='text-[#ff4D41] text-[22px]'/>
                Interest
                </div>

                <div className='flex gap-4 items-center font-medium'>
                <IoLocationOutline className='text-[#ff4D41] text-[22px]'/>
                Location
                </div>

            </div>
            <div className='flex flex-col gap-6 text-gray-600'>
                <div>:</div>
                <div>:</div>
                <div>:</div>
                <div>:</div>
                <div>:</div>
            </div>

            <div className='flex flex-col gap-6 text-gray-600'>
            <div>04/09/2000</div>            
            <div>Uni Of Central Punjab</div>
            <div>www.github/devshahzaib</div>
            <div>Front End Development</div>
            <div>Lahore</div>          

            </div>
        </div>
    </div>
      </section>
    </>
  )
}

export default About
