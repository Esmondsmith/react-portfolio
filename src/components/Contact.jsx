import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='w-full h-full bg-gradient-to-b from-black to-gray-800 p-4 text-white'>

        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div className='pb-8 mt-40'>
                <p className='text-5xl font-bold inline border-b-4 border-gray-500'>Contact</p>
                <p className='py-6'>Submit the form to contact me</p>
            </div>
            <div className='flex justify-center items-center'>
                <form action="https://getform.io/f/431ee09a-786e-4e08-8d2b-58f5768f0410" method='POST' className='flex flex-col w-full md:w-1/2'>
                    <input type="text" name="name" placeholder='Enter Name' id="" className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                    <input type="email" name="email" placeholder='Enter Email' id="" className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                    <textarea name="message" id="" cols="30" rows="10" placeholder='Enter your message' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>
                    <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 py-3 px-6 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Submit</button>
                </form>
            </div>
        </div>
      
    </div>
  )
}

export default Contact
