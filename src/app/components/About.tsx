"use client"
import Image from "next/image"
import { AnimatePresence, motion , animate } from "framer-motion"
import Link from "next/link"
import { AiOutlineCloudDownload } from 'react-icons/ai'

const About = () => {
  return (
      

        <div id="about"
         className="text-gray-600 body-fon bg-gradient-to-b from-[#000000] to-[#434343] mt-24">
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
      Shariq here, a passionate developer with skills in both front-end and UI/UX design.
       Im currently mastering Next.js to build even more impressive web experiences.
      </p>
      <div className="flex justify-center">
        <Link href={"/assests/cv/Muhammad Shariq New Cv.pdf"}>
        <button className="inline-flex text-white bg-[#73C8A9] border-0 py-2 px-6 focus:outline-none hover:bg-[#373B44] rounded-md text-lg shadow-md">
          View CV
        </button>
        </Link>
             </div>
    </div>
  </div>
</div>
          
  )
}

export default About

















    
// <div>
//         <section id="#about" className="text-gray-600 body-fon bg-gradient-to-b from-[#000000] to-[#434343] mt-24">
//   <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
//     <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
//       <Image
//         className="object-cover object-center rounded w-[20rem] mx-auto"
//         alt="about me"
//         width={500}
//         height={500}
//         src={require("../../../public/assests/dp picture/About me.png")}
        
//       />
//     </div>
//     <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
//       <h2 className="title-font sm:text-5xl text-3xl mb-4 font-medium text-white">
//         About Me
        
        
//       </h2>
//       <p className="mb-8 leading-relaxed text-white break-words">
//       Shariq here, a passionate developer with skills in both front-end and UI/UX design.
//        Im currently mastering Next.js to build even more impressive web experiences.
//       </p>
//       <div className="flex justify-center">
//         <Link href={"/assests/cv/Muhammad Shariq New Cv.pdf"}>
//         <button className="inline-flex text-white bg-[#73C8A9] border-0 py-2 px-6 focus:outline-none hover:bg-[#373B44] rounded-md text-lg shadow-md">
//           View CV
//         </button>
//         </Link>
       
//       </div>
//     </div>
//   </div>
// </section>

//     </div>
    













// <div id="about" className='w-full h-auto bg-gradient-to-b from-[#000000] to-[#434343] text-white mt-24'>
// <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-auto'>
//     <div className='pb-8 text-center'>

//         <h2 className='text-4xl  font-bold inline border-b-4 border-gray-500'>About</h2>

//     </div>

//     <p data-aos="slide-up" data-aos-duration="500" className='text-xl mt-5 ease-in fade-in'>
//         I embarked my journey as a B.Tech Computer Science & Engineering student at Ramkrishna Mahato Government Engineering College in 2020. Along the way, I fearlessly explored various fields, including Graphic Designing, Content Creation, Freelancing, and Entrepreneurship. I delved into the world of cutting-edge technologies, such as Python, Cloud computing, React, Flutter, and Firebase. I also took my passion for technology and leadership to new heights by co-establishing Google Developer Student Clubs and the E-Cell in my college, alongside my equally enthusiastic classmates. At present, I serve GDSC RKMGEC as the Co-Lead and holds the significant responsibility of being the In-Charge of E-Cell RKMGEC.
//     </p>
//     <br />
//     <p data-aos="slide-up" data-aos-duration="500" className='text-xl mt-5 ease-in fade-in'>
//     Shariq here, a passionate developer with skills in both front-end and UI/UX design.
// //        Im currently mastering Next.js to build even more impressive web experiences.
//     </p>
//     {/* <br />
//     <p data-aos="fade-in" data-aos-duration="500" className='text-xl mt-5 ease-in  fade-in'>
//         I've worked for many projects for my clients as well as my personal projects. I also contributed for the GDSC RKMGEC web page. I have a Instagram page (@codewithbiki) where I create content for those who are just starting with programming and have more that 70k followers. I have learning attitude and growth mindset which helps me to collaborate with people and work for the society.
//     </p> */}
//     <div data-aos="zoom-in" data-aos-duration="500" className='mb-20 fade-in flex mx-auto items-center justify-center hover:scale-105 duration-300 rounded bg-[#73C8A9] hover:bg-[#373B44] lg:w-1/5 md:w-1/5 w-2/4 h-10 text-center cursor-pointer mt-10 gap-2'>


//         <AiOutlineCloudDownload />
//         <Link href="/assests/cv/Muhammad Shariq New Cv.pdf" download>View CV</Link>
//     </div>
// </div>
// </div>




