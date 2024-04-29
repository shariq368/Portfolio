"use client"
import Image from "next/image"
import Link from "next/link"
import { AnimatePresence, animate, motion } from "framer-motion";

const page = () => {
  return (
    <motion.div initial= {{opacity:0, y:20}}
    animate={{opacity: 1, y:0}}
    exit={{opacity: 0, y:20}}
    transition={{ease:'easeInOut', duration:0.75}} 
    id="about">
        <section className="text-gray-600 body-fon bg-gradient-to-b from-[#000000] to-[#434343]">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <Image
        className="object-cover object-center rounded w-[20rem] mx-auto"
        alt="about me"
        width={500}
        height={500}
        src={require("../../../public/assests/dp picture/About me.png")}
        
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h2 className="title-font sm:text-5xl text-3xl mb-4 font-medium text-white">
        About Me
        
        
      </h2>
      <p className="mb-8 leading-relaxed text-white break-words">
      Shariq here, a passionate developer with skills in both front-end and UI/UX design. I'm currently mastering Next.js to build even more impressive web experiences.
      </p>
      <div className="flex justify-center">
        <Link href={"/assests/cv/Muhammad Shariq New cv.pdf"}>
        <button className="inline-flex text-white bg-[#73C8A9] border-0 py-2 px-6 focus:outline-none hover:bg-[#373B44] rounded-md text-lg shadow-md">
          View CV
        </button>
        </Link>
       
      </div>
    </div>
  </div>
</section>

    </motion.div>
  )
}

export default page