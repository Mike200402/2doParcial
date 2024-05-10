import React from 'react'
import "./Card.css"
import Imagen2doParcial from '../public/Imagen2doParcial.jpeg'
const Card = () => {
  return (
        <div className='card'>
            <img src={Imagen2doParcial} className="imagen" />
        </div>

  )
}

export default Card