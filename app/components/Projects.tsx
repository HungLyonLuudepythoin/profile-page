
import React from 'react'
import { Repos } from '../types'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
export default async function Projects() {
  const response = await fetch('https://api.github.com/users/HungLyonLuudepythoin/repos')
  const repos = await response.json()
  return (
    <div className="bg-gray-800">
      <h2 className='text-5xl text-center text-yellow-300 font-bold py-3'>Projects</h2>
      <ul className='text-white flex flex-row flex-wrap'>
        {repos.map((repo: Repos) => (
          <li key={repo.id} className='w-1/2 bg-gray-600 p-5 border-4 border-gray-800 box-border rounded-xl 
          transform hover:scale-105 transition duration-300'>
            <div className="font-semibold">{repo.name}</div>
            <Button className='mt-3'><Link href={repo.html_url}>Link repository</Link></Button>
          </li>
          ))
       } 
      </ul>
    </div>
  )
}
