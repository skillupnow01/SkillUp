import React from 'react'
import Certificate from '../assets/certificate.jpeg'
import celebrate from '../assets/celebrate.gif'
import check from '../assets/check.png'
export const Content = () => {
  return (
    <div className='Content'>
        <div className="img-deco">
        <img src={Certificate} alt="" />
        <img id='celebrate' src={celebrate} alt="" />
        </div>
        <div className="box">
            <h2>
                
            Courses focused on building strong foundational skills for career growth
            </h2>
            <div className="grid-container">
            <div className="grid-item">
                <div className="check">
            <img src={check} alt="" />
                <h3>Learn from Industry Experts</h3>
                </div>
                <p>Comprehensive self-paced courses created with top practitioners</p>
                </div>
            <div className="grid-item">
                <div className="check">
                <img src={check} alt="" />
            <h3>Learn from Industry Experts</h3>
            </div>
            <p>Comprehensive self-paced courses created with top practitioners</p>
            </div>
            <div className="grid-item">
                <div className="check">
            <img src={check} alt="" />
            <h3>Learn from Industry Experts</h3>
            </div>
            <p>Comprehensive self-paced courses created with top practitioners</p>
            </div>
            <div className="grid-item">
                <div className="check">
            <img src={check} alt="" />
            <h3>Learn from Industry Experts</h3>
            </div>
                <p>Comprehensive self-paced courses created with top practitioners</p>
            </div>
            </div>
        </div>
    </div>
  )
}
