import React from 'react'

const About = () => {
  return (
    <>
   <div className="bg-gray-50">

{/* Hero Section */}
<section className="relative bg-gradient-to-r from-indigo-600 to-indigo-900 text-white py-24">
  <div className="absolute inset-0 bg-black opacity-50"></div>
  <div className="relative container px-6 py-12 mx-auto text-center">
    <h1 className="text-4xl font-extrabold sm:text-5xl">
      About Us
    </h1>
    <p className="mt-4 text-lg sm:text-xl">
      Learn more about our team, mission, and values.
    </p>
  </div>
</section>

{/* Our Mission Section */}
<section className="py-16 bg-white text-center">
  <div className="container px-6 mx-auto">
    <h2 className="text-3xl font-bold text-gray-900">
      Our Mission
    </h2>
    <p className="mt-4 text-lg text-gray-600">
      Our mission is to build innovative solutions that bring value to our customers, make their lives easier, and create lasting change.
    </p>
  </div>
</section>

{/* Team Section */}
<section className="py-16 bg-gray-100">
  <div className="container px-6 mx-auto text-center">
    <h2 className="text-3xl font-bold text-gray-900">
      Meet Our Team
    </h2>
    <p className="mt-4 text-lg text-gray-600">
      Our talented team works together to deliver outstanding results.
    </p>

    {/* Team Grid */}
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      <div className="bg-white rounded-lg shadow-md p-6 text-center">
        <img className="w-24 h-24 rounded-full mx-auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-e73lHSywvwHbtQulEd1uIwl40tbvVkJwjQ&s" alt="Team Member" />
        <h3 className="mt-4 text-xl font-semibold text-gray-900">John Doe</h3>
        <p className="text-gray-600">CEO & Founder</p>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6 text-center">
        <img className="w-24 h-24 rounded-full mx-auto" src="https://bizimages.withfloats.com/tile/64c6ba8b983c44000141ee62.jpg" alt="Team Member" />
        <h3 className="mt-4 text-xl font-semibold text-gray-900">Jane Smith</h3>
        <p className="text-gray-600">Chief Technology Officer</p>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6 text-center">
        <img className="w-24 h-24  mx-auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL7yEGVr0WDqJTtcLbXpUXmUSwwzlHDtF1XA&s" alt="Team Member" />
        <h3 className="mt-4 text-xl font-semibold text-gray-900">Samuel Green</h3>
        <p className="text-gray-600">Head of Marketing</p>
      </div>
    </div>
  </div>
</section>

{/* Contact Section */}
<section className="py-16 bg-white text-center">
  <div className="container px-6 mx-auto">
    <h2 className="text-3xl font-bold text-gray-900">
      Get in Touch
    </h2>
    <p className="mt-4 text-lg text-gray-600">
      We'd love to hear from you. Feel free to reach out to us for any inquiries.
    </p>
    <a
      href="mailto:skillupnow01@gmail.com"
      className="mt-8 inline-block px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
    >
      Contact Us
    </a>
  </div>
</section>

</div>

    </>
  )
}

export default About