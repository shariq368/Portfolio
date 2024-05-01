"use client"
import Image from "next/image"
import Atm from "../../../public/assests/projects/Atm.png"
import Student from "../../../public/assests/projects/Student Mangement system.jpg"
import Todo from "../../../public/assests/projects/To do list.jpg"
import University from "../../../public/assests/projects/UNIVERSITY MANAGEMENT SYSTEM.jpg"
import OOP from "../../../public/assests/projects/Untitled.jpg"
import Fitness from "../../../public/assests/projects/fitnessworld.png"

import { AnimatePresence, animate, motion } from "framer-motion";

const Project = () => {

    const Projects = () => [
        {
            id: 1,
            src: Atm,
            desc: "Atm project in Typescript and Node.js..",
            code: "https://github.com/shariq368/ATM-Project-Ts"
            
          },
          {
            id: 2,
            src: Student,
            desc: "Student Mangement System app in Typescript and Node.js....",
            code: "https://github.com/shariq368/Student-Management-Application"
           
          },
          {
            id: 3,
            src: Todo,
            desc: " Fitness Brand with a Dynamic Next.js & Tailwind CSS Website..",
            code: "https://github.com/shariq368/Todo-List-Project-TS"
            
          },
          {
            id: 4,
            src: Fitness,
            desc: "Unleash Your Fitness Brand with Dynamic Next.js&Tailwind CSS Website...",
            code: "https://github.com/shariq368/Fitness-World-Project-Nex.js-"
            
          },
          {
            id: 5,
            src: University,
            desc: "University Mangement Application in typescript...",
            code: "https://github.com/shariq368/University-Management-System"
            
          },
          {
            id: 6,
            src: OOP,
            desc: "Object Oriented Programming In Typescript..",
            code: "https://github.com/shariq368/Project_OOP"
            
          },

    ]


    return (
       
        <motion.div initial= {{opacity:0, y:20}}
        animate={{opacity: 1, y:0}}
        exit={{opacity: 0, y:20}}
        transition={{ease:'easeInOut', duration:0.75}} id="projects" className='h-auto max-h-screen-lg  bg-gradient-to-b from-[#434343] to-[#000000] w-full text-white
        md:h-screen mt-8 z-50'>
         <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
           <div className='pb-8 text-center'>
             <h2 className='text-4xl font-bold inline border-b-4 border-gray-400'>Projects</h2>
             <p className='py-6'>Check out some of my work </p>
           </div>
           <div   className='grid sm:grid-cols-2 md:grid-cols-3 mb-20 gap-8 px-12 sm:px-0'>
             {
               Projects().map(({ id, src, desc, code }) => (
   
                 <div data-aos="fade-in" data-aos-duration="500" key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                   <Image src={src} alt="Ai" className='rounded-md duration-200 hover:scale-105' />
                   <p className='p-2 text-justify font-extralight'>{desc}</p>
                   <div className='flex items-center justify-center'>
                                      
                     <button  className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-gradient-to-l from-[#73C8A9] to-gray-700 rounded-md'>
                       <a href={code}>Code</a>
                     </button>
                   </div>
                 </div>
   
               ))
             }
           </div>
         </div>
       </motion.div>
     )
   }

export default Project

































// <motion.div initial={{ opacity: 0, y: 20 }}
// animate={{ opacity: 1, y: 0 }}
// exit={{ opacity: 0, y: 20 }}
// transition={{ ease: 'easeInOut', duration: 0.75 }} id="#Projects">
// <section className="text-gray-600 body-font bg-gradient-to-b from-[#434343] to-[#000000] ">
//     <div className="container px-5 py-24 mx-auto rounded-md">
//         <div className="flex flex-col text-center w-full mb-20">
//             <h2 className="sm:text-4xl text-2xl font-bold title-font mb-4 text-white">
//                 Projects
//             </h2>

//         </div>
//         <div className="flex flex-wrap -m-8">
//             {/* Poject */}
//             <div className="lg:w-1/3 sm:w-1/2 p-4">
//                 <div className="flex relative">
//                     <Image
//                         alt="gallery"
//                         className="absolute inset-0 w-full h-full object-cover object-center"
//                         src={require("../../../public/assests/projects/Atm.png")}
//                         width={500}
//                         height={500}
//                     />
//                     <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
//                         <h2 className="tracking-widest text-xl title-font font-medium text-purple-600 mb-1">
//                             ATM Project
//                         </h2>
//                         <h1 className="title-font text-lg font-medium text-purple-600 mb-3">
//                             ATM
//                         </h1>
//                         <p className="leading-relaxed">
//                             Atm Project in Typescript & Node.js
//                         </p>
//                     </div>
//                 </div>
//             </div>
//             <div className="lg:w-1/3 sm:w-1/2 p-4">
//                 <div className="flex relative">
//                     <Image
//                         alt="gallery"
//                         className="absolute inset-0 w-full h-full object-cover object-center"
//                         src={require("../../../public/assests/projects/fitnessworld.png")}
//                     />
//                     <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
//                         <h2 className="tracking-widest text-xl title-font font-medium text-purple-600 mb-1">
//                             Fitness World Project
//                         </h2>
//                         <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
//                             Fitness World
//                         </h1>
//                         <p className="leading-relaxed">
//                             Fitness World Project in Next.js
//                         </p>
//                     </div>
//                 </div>
//             </div>
//             <div className="lg:w-1/3 sm:w-1/2 p-4">
//                 <div className="flex relative">
//                     <Image
//                         alt="gallery"
//                         className="absolute inset-0 w-full h-full object-cover object-center"
//                         src={require("../../../public/assests/projects/Student Mangement system.jpg")}
//                     />
//                     <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
//                         <h2 className="tracking-widest text-sm title-font font-medium text-purple-600 mb-1">
//                             Student Mangement System Project
//                         </h2>
//                         <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
//                             Student Mangement System
//                         </h1>
//                         <p className="leading-relaxed">
//                            Student Mangement System in Typescript
//                         </p>
//                     </div>
//                 </div>
//             </div>
//             <div className="lg:w-1/3 sm:w-1/2 p-4">
//                 <div className="flex relative">
//                     <Image
//                         alt="gallery"
//                         className="absolute inset-0 w-full h-full object-cover object-center"
//                         src={require("../../../public/assests/projects/To do list.jpg")}
//                     />
//                     <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
//                         <h2 className="tracking-widest text-xl title-font font-medium text-purple-600 mb-1">
//                             To Do List Project
//                         </h2>
//                         <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
//                             To do list
//                         </h1>
//                         <p className="leading-relaxed">
//                             To Do list in Typescript & Node.js
//                         </p>
//                     </div>
//                 </div>
//             </div>
//             <div className="lg:w-1/3 sm:w-1/2 p-4">
//                 <div className="flex relative">
//                     <Image
//                         alt="gallery"
//                         className="absolute inset-0 w-full h-full object-cover object-center"
//                         src={require("../../../public/assests/projects/UNIVERSITY MANAGEMENT SYSTEM.jpg")}
//                         width={500}
//                         height={500}
//                     />
//                     <div className="px-8 py-7 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
//                         <h2 className="tracking-widest text-xl title-font font-medium text-purple-600 mb-1">
//                             University Mangement System Project
//                         </h2>
//                         <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
//                             University Mangement System 
//                         </h1>
//                         <p className="leading-relaxed">
//                         University Mangement System  in Typescript & Node.js
//                         </p>
//                     </div>
//                 </div>
//             </div>
//             <div className="lg:w-1/3 sm:w-1/2 p-4">
//                 <div className="flex relative">
//                     <Image
//                         alt="gallery"
//                         className="absolute inset-0 w-full h-full object-cover object-center"
//                         src={require("../../../public/assests/projects/Untitled.jpg")}
//                     />
//                     <div className="px-8 py-7 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
//                         <h2 className="tracking-widest text-xl title-font font-medium text-purple-600 mb-1">
//                             Object Oriented Programming Project
//                         </h2>
//                         <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
//                         Object Oriented Programming
//                         </h1>
//                         <p className="leading-relaxed">
//                         Object Oriented Programming in Typescript & Node.js
//                         </p>
//                     </div>
//                 </div>
//             </div>
            
            
            
//         </div>
//     </div>
// </section>

// </motion.div>