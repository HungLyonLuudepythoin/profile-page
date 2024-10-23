import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const Cv_button = () => {
  return (
    <div>
      <Button className='text-lg mt-5 before:ease relative h-12 w-40 overflow-hidden border border-black 
      shadow-2xl before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right 
      before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-gray-900 before:transition-all 
      before:duration-300 hover:text-white hover:shadow-red-700 hover:before:-rotate-180 hover:bg-red-600'>
        <Link href="https://pdflink.to/my-portfolio-file/"><span className="relative z-10">My resume</span></Link>
      </Button>
    </div>
  )
}

export default Cv_button