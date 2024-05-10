"use client"
import html from "../../../public/assests/Experience/html.png"
import css from "../../../public/assests/Experience/css.png"
import javascript from '../../../public/assests/Experience/javascript.png' 
import react from "../../../public/assests/Experience/react.png"
import tailwind from "../../../public/assests/Experience/tailwind.png"
import node from "../../../public/assests/Experience/node.png"
import Image from "next/image"
import { AnimatePresence, animate, motion } from "framer-motion";


const Skill = () => {

    const techs = () => [
        {
            id: 1,
            scr: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            scr: css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            scr: javascript,
            title: 'JAVASCRIPT',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            scr: react,
            title: 'REACT',
            style: 'shadow-blue-600'
        },
        {
            id: 5,
            scr: tailwind,
            title: 'Tailwind',
            style: 'shadow-sky-500'
        },
        {
            id: 6,
            scr: node,
            title: 'Node JS',
            style: 'shadow-green-500'
        },
       
    ]
  return (
    <motion.div initial= {{opacity:0, y:20}}
    animate={{opacity: 1, y:0}}
    exit={{opacity: 0, y:20}}
    transition={{ease: 'easeInOut', duration:0.75}} id="#Skill">
    <div id="Skill" className=' text-white
    w-auto h-auto z-50'>
           <div className='max-w-screen-lg max-h-screen-lg p-4  mx-auto flex flex-col justify-center w-full '>
               <div className='pb-8 text-center'>
                   <p className='text-4xl font-bold inline border-b-4 border-gray-400'>Skills</p>
                   <p className='py-6'>This are the technologies Ive worked with</p>
               </div>

               <div className='w-full h-full grid grid-cols-2 text-center sm:grid-cols-3 gap-8 px-12 sm:px-0'>
                   {
                       techs().map(({ id, scr, title, style }) => (

                           <div data-aos="zoom-in" data-aos-duration="500" key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                               <Image src={scr} alt="" className='w-20 mx-auto' />
                               <p className='mt-4'>{title}</p>
                           </div>
                       ))
                   }
               </div>
           </div>
       </div>
       </motion.div>
  )
}

export default Skill