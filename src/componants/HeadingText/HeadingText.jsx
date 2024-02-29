import React from 'react'

import './HeadingText.css'

const HeadingText = ({title,titlePrimary}) => {
  return (
   <h2 className='heading-text'>
    {title} <span>{titlePrimary}</span>
   </h2>
  )
}

export default HeadingText