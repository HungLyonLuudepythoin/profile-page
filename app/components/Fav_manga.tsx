import Image from 'next/image'
import React from 'react'
import fav_manga from '../assets/fav_manga.jpg'
import fav_character from '../assets/fav_character.jpg'
const Fav_manga = () => {
  return (
    <div className='bg-slate-700 text-center py-6'>
      <h1 className='lg:text-4xl text-green-400 pb-3 max-md:text-xl md:text-2xl font-semibold'>My favorite anime</h1>
      <div className="flex flex-row justify-around">          
        <div className="flex-col  text-center w-1/2 mx-5">
            <Image src={fav_manga} alt='' className='w-full md:h-72 max-md:h-40 lg:h-96 transform transition-transform duration-300 hover:scale-90'/>
          <h1 className='text-xl max-md:text-sm md:text-lg text-yellow-400'>Favorite anime series</h1>
        </div>
        <div className="flex-col  text-center w-1/2 mx-5">
            <Image src={fav_character} alt='' className='w-full md:h-72 max-md:h-40 lg:h-96 transform transition-transform duration-300 hover:scale-90'/>
          <h1 className='text-xl max-md:text-sm md:text-lg text-red-500'>Favorite anime character</h1>
        </div>
      </div>
    </div>
  )
}

export default Fav_manga