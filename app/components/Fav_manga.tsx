import Image from 'next/image'
import React from 'react'
import fav_manga from '../assets/fav_manga.jpg'
import fav_character from '../assets/fav_character.jpg'
const Fav_manga = () => {
  return (
    <div className='bg-slate-700 text-center'>
      <h1 className='text-5xl text-green-400 py-3'>My favorite anime</h1>
      <div className="flex flex-row p-2 justify-around  max-md:flex-col max-md:justify-items-center items-center">          
        <div className="flex-col  text-center w-1/2">
            <Image src={fav_manga} alt='' className='mx-4px w-full h-full'/>
          <h1 className='text-xl text-yellow-400'>Favorite anime series</h1>
        </div>
        <div className="flex-col  text-center w-1/2">
            <Image src={fav_character} alt='' className='mx-4px w-full h-full'/>
          <h1 className='text-xl text-red-500'>Favorite anime character</h1>
        </div>
      </div>
    </div>
  )
}

export default Fav_manga