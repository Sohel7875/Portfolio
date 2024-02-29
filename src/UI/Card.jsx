import React from 'react'

import "./Card.css"

const Card = ({classname,children}) => {
  return (
   <article className={`${classname} card`}>{children}</article>
  )
}

export default Card