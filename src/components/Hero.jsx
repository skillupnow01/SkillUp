import React from 'react'
import { Content } from './Content'
import Card from './Card'
import { Link } from 'react-router-dom'
import banner from '../assets/banner.jpg'
const Hero = () => {
  const cardsData = [
    {
      title: 'Cloud Computing',
      content: 'This is the content of the first card.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVwHvuqWYMVHthnl2VtaMywq-3D24LXA_5yQ&s'
    },
    {
      title: 'Artifical Intelligence',
      content: 'This is the content of the second card.',
      image: 'https://beconnected.esafety.gov.au/pluginfile.php/99437/mod_resource/content/2/what-is-ai%20%281%29.jpg'
    },
    {
      title: 'Web Development',
      content: 'This is the content of the third card.',
      image: 'https://miro.medium.com/v2/resize:fit:1200/1*V-Jp13LvtVc2IiY2fp4qYw.jpeg'
    },
    {
      title: 'Introduction to Python',
      content: 'This is the content of the fourth card.',
      image: 'https://miro.medium.com/v2/resize:fit:700/1*3IcLSFuT8PQg4cUBaRXH1A.png'
    }
  ];
  return (
  <>
   <section className={`bg-[url('./assets/banner.jpg')] relative w-full h-96 bg-cover bg-center`}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex h-full flex-col justify-center items-start text-center text-white px-6 md:px-12">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
          Welcome to My Website
        </h1>
        <p className="text-lg sm:text-xl mb-6">
          Discover amazing content and engage with our community.
        </p>
        <Link to='/Courses'><a href="#learn-more" className="bg-blue-600 hover:bg-blue-700 text-white text-lg py-2 px-6 rounded-full transition duration-300">
          Learn More
        </a></Link>
      </div>
    </section>
    {/* <div className="main">
        <h1>Learn today’s most in-demand <br />
            skills with our free online <br />
            courses
        </h1>

       <div className="btn">
        <Link to='/Courses'><button className='button1'><h3>Explore Free Courses</h3></button></Link>
       <button className='button2'><h3>Get Enroll</h3></button>
       </div>
    </div> */}
    
    <div className="box1">
      <Content/>
    </div>
    {/* <div id='box'>
    <div className='ContainerBox'>
      <img src="https://onlinegiftools.com/images/gif/illustrations/crop-gif.png" alt="" />
      <div  id='text'>
      <h2>Let’s find the right course for you!</h2>
      <button>Enroll Now</button>
      </div>
    </div>
    </div> */}
      <section className="p-8  dark:bg-gray-800  dark:text-white transition-colors duration-300">
      <h2 className="text-3xl font-bold text-center mb-6">Our Courses</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Box 1 */}
        {cardsData.map((card, index) => (
          <Card 
            key={index} 
            title={card.title} 
            content={card.content} 
            image={card.image} 
          />
        ))}
        <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Box 1</h3>
          <p>This is the first box in the grid. It adjusts responsively based on screen size.</p>
        </div>

        {/* Box 2 */}
        <div className="bg-green-500 text-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Box 2</h3>
          <p>This is the second box. It behaves similarly to the first box but in a different color.</p>
        </div>

        {/* Box 3 */}
        <div className="bg-red-500 text-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Box 3</h3>
          <p>Here’s the third box, also fully responsive. Resize your screen to see it change.</p>
        </div>

        {/* Box 4 */}
        <div className="bg-yellow-500 text-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Box 4</h3>
          <p>This is the fourth box. It shares the same responsive behavior as the others.</p>
        </div>

        {/* Box 5 */}
        <div className="bg-purple-500 text-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Box 5</h3>
          <p>The fifth box in the grid, adjusting its layout depending on screen width.</p>
        </div>

        {/* Box 6 */}
        <div className="bg-indigo-500 text-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Box 6</h3>
          <p>This is the sixth box. It will appear in a new row as the screen size changes.</p>
        </div>
      </div>
    </section>
  
    </>
  )
}

export default Hero