import React from 'react'
import CV from '../../assets/Sohel_Shaikh_7875310412.pdf'

import "./About.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

import { experience } from "../../Data/Data"


import HeadingText from '../../componants/HeadingText/HeadingText'
import Card from '../../UI/Card'
import Tools from '../../componants/Tools/Tools'
import Service from '../../componants/Services/Service'

const About = () => {
  return (
    <>
      <section className='About'>
        <HeadingText title={"About"} titlePrimary={"Me"} />

        <div className="container about-container">
          <div className="about-left">
            <h1>I'am Shaikh Sohel</h1>
            <p>I am Shaikh Sohel, a passionate Software Developer with a knack for turning ideas into impactful solutions. With a Bachelor's degree in Information Technology from Government College of Engineering Aurangabad, I've cultivated a diverse skill set, specializing in React Native, JavaScript, React, Node.js, and MongoDB.</p>
            <p>My journey in software development has been marked by a series of exciting projects, where I've leveraged my expertise to create intuitive applications ranging from real-time chat platforms and cryptocurrency trackers to sophisticated banking systems. One of my proudest accomplishments was leading a team in developing a Donation Mobile App for the Rehnuma Foundation, an endeavor that not only showcased my leadership skills but also exemplified my commitment to giving back to the community.</p>
            <p>
              Beyond my technical prowess, I'm known for my ability to foster collaboration and drive results. As the Co-General Secretary of the IT Student Association, I orchestrated initiatives to promote knowledge sharing and organize impactful events, further refining my communication and organizational skills.
            </p>
            <p>              I am driven by a relentless passion for innovation and a desire to make a meaningful impact in the world of software development. Eager to contribute my talents to a dynamic team, I am excited about the opportunity to explore new challenges and drive transformative projects that push the boundaries of what's possible in technology.</p>

            <a href={CV} download className='btn'>
              Download CV <span><FontAwesomeIcon icon={faDownload} /></span></a>
          </div>

          <div className="about-right">

            {
              experience.map(({ id, no, title }) => {
                return (
                  <Card key={id} classname={'experience-card'}>
                    <h1><span>{no}</span></h1>
                    <p>{title}</p>
                  </Card>
                )
              })
            }
          </div>
        </div>
      </section>
      <Tools />
      <Service />
    </>
  )
}

export default About