import React from 'react'
import Certificate from '../assets/certificate.jpeg'
import celebrate from '../assets/celebrate.gif'
import check from '../assets/check.png'
export const Content = () => {
  return (
    // <div className='Content'>
    //     <div className="img-deco">
    //     <img src={Certificate} alt="" />
    //     <img id='celebrate' src={celebrate} alt="" />
    //     </div>
    //     <div className="box">
    //         <h2>
                
    //         Courses focused on building strong foundational skills for career growth
    //         </h2>
    //         <div className="grid-container">
    //         <div className="grid-item">
    //             <div className="check">
    //         <img src={check} alt="" />
    //             <h3>Learn from Industry Experts</h3>
    //             </div>
    //             <p>Comprehensive self-paced courses created with top practitioners</p>
    //             </div>
    //         <div className="grid-item">
    //             <div className="check">
    //             <img src={check} alt="" />
    //         <h3>Learn from Industry Experts</h3>
    //         </div>
    //         <p>Comprehensive self-paced courses created with top practitioners</p>
    //         </div>
    //         <div className="grid-item">
    //             <div className="check">
    //         <img src={check} alt="" />
    //         <h3>Learn from Industry Experts</h3>
    //         </div>
    //         <p>Comprehensive self-paced courses created with top practitioners</p>
    //         </div>
    //         <div className="grid-item">
    //             <div className="check">
    //         <img src={check} alt="" />
    //         <h3>Learn from Industry Experts</h3>
    //         </div>
    //             <p>Comprehensive self-paced courses created with top practitioners</p>
    //         </div>
    //         </div>
    //     </div>
    // </div>
    <section className="flex flex-col  dark:text-white transition-colors duration-300 dark:bg-gray-800 md:flex-row items-center text-center justify-between p-8">
    {/* Left Image */}
    <div className="md:w-1/2 relative items-center flex justify-center mb-8 md:mb-0">
      <img
        src={Certificate}
        alt="Sample"
        className="w-4/5 h-auto rounded-lg shadow-lg"
      />
      <img
       src={celebrate}
        alt="Sample"
        className="w-4/5 h-auto absolute z-1 left-8 top-0 "
      />
    </div>

    {/* Right Text */}
    <div className="md:w-1/2 text-center  md:text-left">
      <h2 className="text-3xl font-bold dark:text-white transition-colors duration-300  text-gray-800 mb-4">
        Discover Amazing Content
      </h2>
      <p className="text-lg text-gray-600 mb-6">
        Learn about the best tips and tricks to enhance your experience and make the most of your time.
      </p>
      <a href="#learn-more" className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
        Learn More
      </a>
    </div>
  </section>
  )
}
