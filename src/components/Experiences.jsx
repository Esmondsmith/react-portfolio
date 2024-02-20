import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import Javascript from '../assets/javascript.png'
import reactImage from '../assets/reactImage.png'
import php from '../assets/php.png'
import tailwind from '../assets/tailwind.png'
import boot from '../assets/boot.jpg'

const Experiences = () => {

    const techs = [
        {
            id:1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id:2,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id:3,
            src: Javascript,
            title: 'JavaScript',
            style: 'shadow-yellow-500'
        },
        {
            id:4,
            src: reactImage,
            title: 'React',
            style: 'shadow-blue-600'
        },
        {
            id:5,
            src: tailwind,
            title: 'Tailwind',
            style: 'shadow-sky-400'
        },
        {
            id:6,
            src: php,
            title: 'PHP',
            style: 'shadow-purple-500'
        },
        {
            id:7,
            src: boot,
            title: 'Bootstrap',
            style: 'shadow-blue-700'
        },
    ]

  return (
    <div name="experience" className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div className='pb-8 mt-40'>
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline mt-30'>Experience</p>
                <p className='py-6'>I am familiar with these technologies</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                {
                    techs.map(({id, src, title, style}) => (
                        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                    <img src={src} alt="" className='w-40 mx-auto'/>
                    <p className='mt-4'>{title}</p>
                </div>
                    ))
                }
            </div>

        </div>
    </div>
  )
}

export default Experiences
