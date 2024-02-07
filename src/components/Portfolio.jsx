import React from 'react'
import abuja from '../assets/abuja.png'
import home1 from '../assets/home1.jpg'
import home2 from '../assets/home2.jpg'
import home6 from '../assets/home6.jpg'
import home4 from '../assets/home4.jpg'
import home5 from '../assets/home5.jpg'


const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: home1
        },
        {
            id: 2,
            src: home2
        },
        {
            id: 3,
            src: home6
        },
        {
            id: 4,
            src: home4
        },
        {
            id: 5,
            src: abuja
        },
        {
            id: 6,
            src: home5
        },
    ]

  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xxl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='my-6'>Check out my previous projects</p>
            </div>

            
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

                {
                    portfolios.map(({id, src}) => (
                        <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                            <img src={src} alt="" className="rounded-md duration-200 hover:scale-105"/>
                            <div className='flex items-center justify-center'>
                                <button className='w-1/2 px-6 py-3 m-d duration-200 hover:scale-105'>Demo</button>
                                <button className='w-1/2 px-6 py-3 m-d duration-200 hover:scale-105'>Codes</button>
                            </div>
                        </div>
                    ))
                }
                
            </div>
        </div>
    </div>
  )
}

export default Portfolio
