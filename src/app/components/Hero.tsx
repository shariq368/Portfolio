"use client"
import Image from "next/image"
import { AnimatePresence, animate, motion } from "framer-motion";
import Typewriter from 'typewriter-effect';
import Link from "next/link";

const Hero = () => {
  return (
    <motion.div initial= {{opacity:0, y:20}}
    animate={{opacity: 1, y:0}}
    exit={{opacity: 0, y:20}}
    transition={{ease:'easeInOut', duration:0.75}}>
        <section className="text-gray-600 body-font bg-gradient-to-b from-[#000000] to-[#434343]">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 ">
      <Image
        className="object-cover object-center rounded mx-auto w-[20rem]"
        alt="hero"
        width={400}
        height={400}
        src={require('../../../public/assests/dp picture/Rectangle 1.png')}
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-5xl text-4xl mb-4 font-semibold text-[#73C8A9]">
       I am
        <br className="hidden lg:inline-block" />
        <Typewriter
  options={{
    strings: ['Muhammad Shariq','Frontend Developer', 'UI/UX Designer'],
    autoStart: true,
    loop: true,
  }}
/>
      </h1>
      <div className="w-[100px] h-[2px] bg-[#73C8A9]"></div>
      <p className="mb-8 leading-relaxed text-white">
        Create intuitive and visually appealing interfaces using user-centered design principles. I am proficient in HTML, CSS, and JavaScript and can build responsive and cross-browser compatible websites and applications. I am a detail-oriented and problem-solving individual who is skilled at meeting deadlines.
      </p>
      <div className="flex justify-center">
          <Link href="/assests/cv/Muhammad Shariq New Cv.pdf">
        <button className="inline-flex text-white bg-[#73C8A9]   border-0 py-2 px-6 focus:outline-none hover:bg-[#373B44] rounded-md text-lg shadow-md">
          Download CV
        </button>
          </Link>
        
      </div>
    </div>
  </div>
</section>

    </motion.div>
  )
}

export default Hero