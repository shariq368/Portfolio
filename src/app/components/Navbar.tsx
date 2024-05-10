"use client"
import Link from "next/link"
import { AnimatePresence, animate, motion } from "framer-motion";




const Navbar = () => {
  return (
    <div className="bg-[#232526] bg-opacity-90 z-50 sticky top-0">
    <header className="text-white body-font">
    <div className="container mx-auto flex flex-wrap p-6 flex-col md:flex-row items-center">
      {/* <a 
      className="flex title-font font-bold items-center text-[#73C8A9] mb-4 md:mb-0">
       
        <motion.span initial= {{opacity:0, y:-20}}
    animate={{opacity: 1, y:-0}}
    exit={{opacity: 0, y:-20}}
    transition={{ease:'easeInOut', duration:0.75}} className="ml-3 text-3xl">Code with Shariq</motion.span>
      </a> */}
      <motion.nav initial= {{opacity:0, y:-20}}
    animate={{opacity: 1, y:-0}}
    exit={{opacity: 0, y:-20}}
    transition={{ease:'easeInOut', duration:0.75}}
       className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
        <Link href={"/"} className="mr-5 hover:text-[#73C8A9]">Home</Link>
        <Link href={"#about"} className="mr-5 hover:text-[#73C8A9]">About</Link>
        <Link href={"#Skill"} className="mr-5 hover:text-[#73C8A9]">Skills</Link>
        <Link href={"#projects"} className="mr-5 hover:text-[#73C8A9]">Projects</Link>
        <Link href={"#Contact"} className="mr-5 hover:text-[#73C8A9]">Contact</Link>
      </motion.nav>
     
     
    </div>
  </header>
  </div>
  

  )
}

export default Navbar