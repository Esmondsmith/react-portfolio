import React from 'react'
import heroImg from "../assets/heroImg.jpeg"
import { MdKeyboardArrowRight } from "react-icons/md";
import {Link} from "react-scroll"


const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 '>

        <div className='max-w-screen-lg mx-auto flex flex-col items-center justiy-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'> I am a < br/> Software Development Engineer</h2>
                <p  className='text-gray-500 py-4 max-w-md'>
                    I have experince in building and designing softwares. I currently dedicate a lot of time working and building website applications which i love so much and i use technologies like React, Tailwind, Javascript, HTML, CSS and PHP
                </p>
                <div>
        {/* change the buttons to Link and include the react smooth scroll */}
                    <Link to='portfolio' smooth duration={500} className='text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer group'>
                        Portfolio
                        {/* To make the entire arrow rotate when both the button and the arrow is hovered, you add class 'group' to the main button and use group-hover:rotate-90*/}
                        <span className='group-hover:rotate-90 duration-300'>
                        <MdKeyboardArrowRight size={22} className='ml-1'/> 
                        </span>
                    </Link>
                </div>
            </div>

            <div>
                <img src={heroImg} alt="My personal picss" className='rounded-2xl mx-auto w-2/3 md:w-full' />
            </div>
        </div>


    </div>
  )
}

export default Home
