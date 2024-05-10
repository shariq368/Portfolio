"use client"
import { IconBase } from "react-icons"
import { AnimatePresence, animate, motion } from "framer-motion";


const Contact = () => {
  return (
    <motion.div initial= {{opacity:0, y:20}}
    animate={{opacity: 1, y:0}}
    exit={{opacity: 0, y:20}}
    transition={{ease:'easeInOut', duration:0.75}} id="Contact">
      <section className="text-white  body-font relative mt-20">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h2 className="sm:text-4xl text-2xl font-bold title-font mb-4 text-white border-gray-400">
        Contact Us
      </h2>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
        Feel Free to Contact
      </p>
    </div>
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2">
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="name" className="leading-7 text-sm text-white">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-purple-400 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="email" className="leading-7 text-sm text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-white"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              defaultValue={""}
            />
          </div>
        </div>
        <div className="p-2 w-full">
          <button className="flex mx-auto text-white bg-[#73C8A9] border-0 py-2 px-8 focus:outline-none hover:bg-[#373B44] rounded-md text-lg">
           Send Message
          </button>
        </div>
        <div className="p-2 w-full pt-8 mt-8 border-t border-white text-center">
          <a className="text-[#73C8A9] text-lg">Muhammadshariq368@email.com</a>
          <p className="leading-normal my-5">
            Dha St
            <br />
            Karachi, Pakistan
          </p>
          
        </div>
      </div>
    </div>
  </div>
</section>


    </motion.div>
  )
}

export default Contact




