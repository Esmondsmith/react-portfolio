import React, { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa';
import {Link} from "react-scroll"

//import {Link} from "react-scroll". This helps us to have a smooth scrool from one part of to another on the frontend. It is achieved by first installing the react scrool as npm i react-scroll to instal soe dependecies, after which we will direct it to a link <Link to={link} smooth duration={500}>{link}</Link>, and use it.

function Navbar() {

    const [nav, setNav] = useState(false)

    
    const links = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'about'
        },
        {
            id: 3,
            link: 'portfolio'
        },
        {
            id: 4,
            link: 'experience'
        },
        {
            id: 5,
            link: 'contact'
        },
    ]

  return (

    <div className='flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed'>
        <div>
          <h1 className='text-5xl font-signature ml-2'>Esmond</h1>
        </div>

      {/* <ul className='flex'> */} 
        <ul className='hidden md:flex'>
          {links.map(({id, link}) => (
          <li key={id} className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'>
          <Link to={link} smooth duration={500}>{link}</Link>
          </li>
          ))}
        </ul>

      {/* onclick, we want to change the state to opposite of what the state was. We also included class md:hidden, to hide the bar for medium screens and above.*/}
        <div onClick={()=>setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
      {/* Based on the state, we will render the element to change the bar*/}
          {nav ?  <FaTimes size={30}/> :  <FaBars size={30}/>}
        </div>

        {nav && (<ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
              {links.map(({id, link}) =>(
              <li key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl'>
                {/* Using using react scroll here for the small screen bars */}
                <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>{link}</Link>
              </li>
              ))}
        </ul>
        )}

        

    </div>
  )
}

export default Navbar;
