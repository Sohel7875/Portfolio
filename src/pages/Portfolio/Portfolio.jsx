import React from 'react'
import "./Portfolio.css"

import Card from '../../UI/Card'
import HeadingText from '../../componants/HeadingText/HeadingText'

import {portfolio} from '../../Data/Data'
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Carousel } from 'react-responsive-carousel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'


const Portfolio = () => {

// console.log(portfolio)


  return (
    <>
 <section className='portfolio'> 
 <HeadingText title={'Recent'} titlePrimary={'Work'} />

 <div className="container portfolio-container">
  {
    portfolio.map(({id,img,name,des,github,demo})=>{
      return(
        <Card classname={'project'} key={id} >
          
        <div className="previw">
       <Carousel autoPlay interval={(Math.round(Math.random()*(6-3+1)) +3)*1000} infiniteLoop showStatus={false}  showThumbs={false} showArrows={false}>
       {img.map((item,index) =>   <img key={index} src={item} alt={name} />)}
       </Carousel>
        </div>
          <h3>{name}</h3>
          <p>{des}</p>
          <a href={github} target='blank'>Github</a>
         <a href={demo} className='btn demo' target='blank'>Demo
         <span><FontAwesomeIcon icon={faPaperPlane} /></span>
         </a>
        </Card>
      )
    })
  }
 </div>
 
 </section>

 </>
  )
}

export default Portfolio