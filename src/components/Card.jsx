import React from 'react'
import "./Card.css"
import Imagen2doParcial from '../public/Imagen2doParcial.jpeg'
import Terapia from "./Terapia";
import Ejercicios from "./Ejercicios";
const Card = () => {
  return (
        <div className='card'>
            <img src={Imagen2doParcial} className="imagen" />
            <Terapia/>
            <Ejercicios/>
        </div>

  )
}

export default Card