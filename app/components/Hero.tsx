import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className='h-screen flex flex-col opacity-75 object-right-top '>
      <div className="flex w-full justify-end items-center">
        <Image className="w-[10rem] h-[10rem]" src='/bg-1.jpg' width={1000} height={1000} alt="Profile Pic"/>
      </div>
    </div>

  );
};

export default Hero;
