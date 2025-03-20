import React from 'react'

const Card = ({ title, content, image }) => {
  return (
      <>
    {/* <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{content}</p>
      </div>

    </div> */}
      {/* Box 1 */}
      <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg">
          <img src={image} alt={title} className="card-image rounded-xl mb-2 " />
          <h3 className="text-2xl font-semibold mb-4">{title}</h3>
          <p>{content}</p>
        </div>
    </>
  )
}

export default Card