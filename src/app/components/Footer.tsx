import React from 'react'
import { BsYoutube } from 'react-icons/bs'
import { BsGithub } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='bg-gradient-to-b from-[#434343] to-[#000000] mt-20 '>
    <footer className="text-white body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
    
      <span className="ml-3 text-xl text-[#73C8A9]">Muhammad Shariq</span>
    </a>
    <p className="text-sm text-[#73C8A9] sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
      © Develop and Design by me 
     
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start gap-6">
      <Link 
      target='_blank'
      href={"https://www.youtube.com/@Shasvynz"} className="text-white">
        <BsYoutube className='text-3xl hover:text-[#ff0000]'/>
      </Link>
      <Link 
      target='_blank'
      href={"https://github.com/shariq368"} className="text-white">
        <BsGithub className='text-3xl hover:text-[#776464]'/>
      </Link>
      <Link 
      target='_blank'
      href={"https://www.facebook.com/shariq.shari.524/"} className="text-white">
        <BsFacebook className='text-3xl hover:text-[#4979d8]'/>
      </Link>
      <Link 
      target='_blank'
      href={"https://www.linkedin.com/in/muhammad-shariq-07a57328b/"} className="text-white">
        <BsLinkedin className='text-3xl hover:text-[#3faae4]'/>
      </Link>
      
                </span>
      </div>
</footer>
</div>

  )
}

export default Footer