import Image from 'next/image'
import Hero from './components/Hero'
import About from './components/About'
import What_do from './components/What_do'
import Skills from './components/Skills'
import Work from './components/Work'
import Contact from './components/Contact'

export default function Home() {
  return (
    <>
    <Hero/>
    <About/>
    <What_do/>
    <Skills/>
    <Work/>
    <Contact/>
    </>
  )
}
