import React from 'react'
import profile from '../assets/profile.jpg';
import Image from 'next/image';
import Cv_button from './Cv_button';


const Hero:React.FC = () => {
  return (
    <div className="bg-slate-800 pt-10 pb-5 flex flex-col text-center text-white">
      <div className="overflow-hidden">
        <Image src={profile} alt="Profile" className="mx-auto object-cover h-auto w-80 rounded-xl cursor-pointer relative z-0
        transform transition-all duration-300 hover:scale-110 group-hover:rotate-6" />
      </div>
        
      <h1 className="text-4xl my-5 sm:text-5xl"> Hello, I am
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500"> Luu Vinh Hung</span>
      </h1>
      
      <p className="text-lg mt-2 max-sm:text-sm w-96 mx-auto">I&apos;m a <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Web Developer</span> with a passion for creating responsive web applications. Also, 
        my expertise lies in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-300">data visualization</span>, where I bring complex datasets to life through interactive and meaningful visual designs. 
      </p>
      <Cv_button />
    </div>
  )
}

export default Hero