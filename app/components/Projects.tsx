
import Link from 'next/link'
import React from 'react'
const Projects = () => {
  return (
    <div className='bg-gray-700 flex-col items-center py-4 justify-items-center text-center'>
      <div className="bg-slate-600 w-5/6 h-auto mx-auto flex-col py-5 text-white text-center items-center ">
          <h1 className='text-2xl font-medium my-5'>Analyzing game sales sales across regions and platforms</h1>
          <p className="py-2 text-xl w-1/2 mx-auto">This project focuses on analyzing layoff waves from major companies in the USA and around the world 
            during the COVID-19 pandemic (2020-2023). The dataset, comprising over 2,000 rows of raw data, was cleaned and normalized 
            to ensure accuracy. Using advanced SQL queries, trends in layoffs were extracted, focusing on industry, company size, and 
            time period. The analysis further explores the impact of economic shifts on employment trends, with key findings presented 
            in an interactive dashboard for clear and actionable insights</p>
      </div>
      <div className="bg-slate-600 w-5/6 h-auto mx-auto flex-col py-5 text-white text-center my-2">
          <h1 className='text-2xl font-medium my-5'>Analyzing Global Layoff Trends During COVID-19: Insights from Major Companies (2020-2023)</h1>
          <p className="py-2 text-xl w-1/2 mx-auto">This project analyzes sales breakdowns by region (NA, EU, JP, Other) 
          and globally, identifying top-performing platforms and how each region contributes to their success. 
          It examines sales trends over time, comparing older and newer games, and explores which genres and publishers dominate 
          both overall and regionally.</p>
      </div>
      <p className='text-white font-bold hover:underline text-2xl'>My <Link href="https://github.com/HungLyonLuudepythoin/data-analyst-portfolio">github portfolio</Link></p>   
    </div>
  )
}

export default Projects