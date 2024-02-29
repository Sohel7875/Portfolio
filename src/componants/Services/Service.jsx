import React from 'react'
import './Service.css'

import Card from '../../UI/Card'
import HeadingText from '../HeadingText/HeadingText'

import { services } from '../../Data/Data'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Service = () => {
  return (
   <section className='services'>
    <HeadingText title={'What I'} titlePrimary={'Offer'} />

    <div className="container services-container">
   
        {
            services.map(({id,icon,name,des}) =>{
return(
    <Card key={id} classname={'services-card'}>
        <span><FontAwesomeIcon icon={icon} /></span>
        <h3>{name}</h3>
        <p>{des}</p>
    </Card>
)
            })


        }
    </div>
   </section>
  )
}

export default Service