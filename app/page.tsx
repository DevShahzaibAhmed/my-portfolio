import Image from 'next/image'
import Hero from './components/Hero'
import About from './components/About'
import What_do from './components/What_do'
import Skills from './components/Skills'
import Work from './components/Work'
import Contact from './components/Contact'
import { useState } from 'react'
import Sidebar from './components/Sidebar'

export default function Home() {

  // {const [isOpen,setIsOpen]=useState(false)
  // const toggleSidebar=() => {
  //   setIsOpen(!isOpen)
  // }

  return (
    <>
    <Sidebar isOpen={undefined} toggleSidebar={undefined}/>
    <Hero/>
    <About/>
    <What_do/>
    <Skills/>
    <Work/>
    <Contact/>
    </>
  )
}
