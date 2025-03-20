import React from 'react'
import Card from '../components/Card';

const Courses = () => {
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
    },
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
    // <>
    // <div className="contain">
    //   <h1>Courses focused on building strong foundational skills</h1>
    // <div className="cards-container containerCourses">
    //     {cardsData.map((card, index) => (
    //       <Card 
    //         key={index} 
    //         title={card.title} 
    //         content={card.content} 
    //         image={card.image} 
    //       />
    //     ))}
    //   </div>
    //   </div>
    // </>
    <>
    <section className="p-8  dark:bg-gray-800  dark:text-white transition-colors duration-300">
      <h2 className="text-3xl font-bold text-center mb-6">Our Courses</h2>
      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Box 1 */}
        {cardsData.map((card, index) => (
          <Card 
            key={index} 
            title={card.title} 
            content={card.content} 
            image={card.image} 
          />
        ))}
      </div>
    </section>
    </>
  )
}

export default Courses