import React from 'react'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'




const Socials = () => {

    const links = [
        {
            id: 1,
            child: (
                <>
                LinkedIn <FaLinkedin size={30}/>
                </>
            ),
            href: "https://www.linkedin.com/in/esmond-agharovbokhan-7766a2274/",
            style: 'rounded-tr-md' //to round the top right
        },
        {
            id: 2,
            child: (
                <>
                Github <FaGithub size={30}/>
                </>
            ),
            href: "https://github.com/Esmondsmith",
        },
        {
            id: 3,
            child: (
                <>
                Mail <HiOutlineMail size={30}/>
                </>
            ),
            href: 'Mailto:aghaesmond@gmail.com', //to open email right away
        },
        {
            id: 4,
            child: (
                <>
                Resume <BsFillPersonLinesFill size={30}/>
                </>
            ),
            href: "/esmond.pdf",
            style: 'rounded-br-md', //to round the bottom right
            download: true, //to allow download of the resume
        }
    ]

  return (
    //hidden and lg:flex is use to hide the socials for a small screen and flex out for large screens
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>

            {links.map(({id, child, href, style, download}) => (
                <li key={id} className={`flex justify-between items-center w-40 h-14 px-4 bg-gray-600 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300' + ' ' + ${style}`}>
                    <a href={href} className='flex justify-between items-center w-full text-white'
                    download={download}
                    target='_blank'
                    rel='noreferrer' //We include this whenever we use the target='_blank'
                    >
                        {child}
                    </a>
                </li>
            ))}

            
        </ul>
    </div>
  )
}

export default Socials
