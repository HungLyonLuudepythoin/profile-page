import Image from 'next/image'
import React from 'react'
import fav_books from '../assets/fav_book.jpg'

const Fav_book = () => {
  return (
  <div className="bg-gray-600 text-center py-6">
    <div className='flex flex-row relative items-center'>
      <div className="group justify-center text-center relative overflow-hidden rounded-md cursor-pointer w-1/3">
        <Image src={fav_books} alt='' className='"w-full ml-3 relative z-0 rounded-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-6'/>
        <div className="absolute h-full w-full top-0 left-0"></div>
    </div>
      
    <div className="text-white w-2/3">
      <h1 className='lg:text-4xl text-red-500 py-4 max-md:text-xl md:text-2xl font-semibold max-md:py-3'>My favortie book</h1>
      <p className='lg:text-2xl py-5 pl-2 max-md:text-sm md:text-base max-md:py-0'>
      The main character is <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 
      to-cyan-500"> Captain Nemo</span>, a mysterious and enigmatic figure who commands the submarine Nautilus. 
      Nemo is portrayed as a brilliant yet conflicted man who has turned his back on the surface world after suffering personal 
      and political tragedies. He’s a skilled engineer, scientist, and an advocate for freedom, 
      but he also harbors a deep resentment toward imperialism and injustice.
      </p>
    </div>
  
    </div>
  </div>
    
  )
}

export default Fav_book