import React from 'react'
import "./Home.css"
import HeaderImage from '../../assets/My Photo.jpg'



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
  return (
    <header>
      <div className="conatainer container-lg header-container">
        <img src={HeaderImage} alt="Header.png" />
        <div className="header-right">
          <h1>
            <span>Hi, I'm Sohel Shaikh</span><br />
            Full Stack Developer
          </h1>
          <p>
            Aspiring Full Stack Developer With Strong Foundation in React.js, React Native, Javacript, Node.js and MongoDB. Eager to Contribute Skills And Learn in Dynamic Software Development Environment.
          </p>
       <Link to={'/about'} className='btn'>
        About Me Hello World
        <span><FontAwesomeIcon icon={faArrowRight}/></span>
       </Link>
        </div>
      </div>
    </header>
  )
}

export default Home