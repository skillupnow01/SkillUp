import React from 'react'
import { Content } from './Content'
import Card from './Card'
import { Link } from 'react-router-dom'
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
  return (<>
  
    <div className="main">
        <h1>Learn today’s most in-demand <br />
            skills with our free online <br />
            courses
        </h1>

       <div className="btn">
        <Link to='/About'><button className='button1'><h3>Explore Free Courses</h3></button></Link>
       <button className='button2'><h3>Get Enroll</h3></button>
       </div>
    </div>
    <div className="box1">
      <Content/>
    </div>
    <div className="cards-container">
        {cardsData.map((card, index) => (
          <Card 
            key={index} 
            title={card.title} 
            content={card.content} 
            image={card.image} 
          />
        ))}
      </div>
    </>
  )
}

export default Hero